import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useStore } from "../../../hooks/useStore";
import axios from "axios";
import React from "react";

interface Props {
  onLogin: () => void;
}

const GoogleLoginWidget: React.FC<Props> = ({ onLogin }) => {
  const setAuthData = useStore((state: any) => state.setAuthData);
  // Get the client ID from environment variable or use a default value
  // const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";
  const clientId = "674546016382-4b1st85hr20iv3ckr1mdrtt0itrvrg7n.apps.googleusercontent.com";

  const handleSuccess = async (credentialResponse: any) => {
    console.log(credentialResponse);
    try {
      const { data } = await axios.post(
        "http://localhost:3000/login",
        {
          // pass the token as part of the req body
          token: credentialResponse.credential,
        }
      );
      localStorage.setItem("AuthData", JSON.stringify(data));
      setAuthData(data);
      onLogin(); // Call the onLogin prop to update the App's isLoggedIn state
    } catch (error) {
      console.log("Login Failed", error);
    }
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <GoogleLogin
        useOneTap={true}
        onSuccess={handleSuccess}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
}

export default GoogleLoginWidget;
