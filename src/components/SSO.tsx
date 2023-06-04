import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useStore } from "../hooks/useStore";
import User from "./User";
import React from "react";

function SSO(): JSX.Element {
  const setAuthData = useStore((state: any) => state.setAuthData);
    // Get the client ID from environment variable or use a default value
    // const clientId = process.env.REACT_APP_GOOGLE_CLIENT_ID || "";
    const clientId = "674546016382-4b1st85hr20iv3ckr1mdrtt0itrvrg7n.apps.googleusercontent.com"
  return (
    <div className="SSO">
      {!useStore((state: any) => state.authData) ? (
        <>
          <h1>Welcome</h1>
          <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
              useOneTap={true}
              onSuccess={async (credentialResponse: any) => {
                console.log(credentialResponse);
                const { data } = await axios.post(
                  "http://localhost:3000/login",
                  {
                    // pass the token as part of the req body
                    token: credentialResponse.credential,
                  }
                );
                localStorage.setItem("AuthData", JSON.stringify(data));
                setAuthData(data);
              }}
              onError={() => {
                console.log("Login Failed");
              }}
            />
          </GoogleOAuthProvider>
        </>
      ) : (
        <>
          <h1>React x Nestjs Google Sign in</h1>
          <User />
        </>
      )}
    </div>
  );
}

export default SSO;
