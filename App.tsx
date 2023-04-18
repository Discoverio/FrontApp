import React from 'react';
import AppNavigator from './src/components/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
// import { useStore } from "./src/hooks/useStore";
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import axios from "axios";

interface State {
  randomAlbumId: string;
}

class App extends React.Component<{}, State> {
  // setAuthData = useStore((state: any) => state.setAuthData);
  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <AppNavigator />
          <h1>Welcome</h1>
          {/* <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}> */}
          <GoogleOAuthProvider clientId="674546016382-4b1st85hr20iv3ckr1mdrtt0itrvrg7n.apps.googleusercontent.com">
          <GoogleLogin
             useOneTap={true}
             onSuccess={async (credentialResponse) => {
               console.log(credentialResponse);
               const { data } = await axios.post(
                 "http://localhost:19006/login",
                 {
                  // pass the token as part of the req body
                  token: credentialResponse.credential,
                });
               localStorage.setItem("AuthData", JSON.stringify(data));
              //  this.setAuthData(data);
             }}
             onError={() => {
               console.log("Login Failed");
             }}
           />
         </GoogleOAuthProvider>
        </NavigationContainer>
      </ApplicationProvider>
    );    
  }
}

export default App;