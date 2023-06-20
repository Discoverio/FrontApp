import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { useStore } from "../../../hooks/useStore";
import axios from "axios";
import React from "react";
import Constants from 'expo-constants';

interface Props {
  onLogin: () => void;
}

const GoogleLoginWidget: React.FC<Props> = ({ onLogin }) => {
  const setAuthData = useStore((state: any) => state.setAuthData);
  // Get the client ID from environment variable or use a default value
  const clientId = Constants.manifest?.extra?.REACT_APP_GOOGLE_CLIENT_ID || '';
  const backend_adress = Constants.manifest?.extra?.REACT_APP_BACKEND_ADRESS_LOGIN || '';
  const handleSuccess = async (credentialResponse: any) => {
    console.log(credentialResponse);
    try {
      const { data } = await axios.post(
        backend_adress,
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
