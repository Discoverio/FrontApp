import React from 'react';
import AppNavigator from './src/components/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DangerScreen from './src/screens/DangerScreen';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import SSO from './src/components/SSO'; // Update the import statement
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { LoginScreen } from './src/screens/LoginScreen';

interface State {
  randomAlbumId: string;
  isLoggedIn: boolean;
}

const Stack = createStackNavigator();


class App extends React.Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      randomAlbumId: '',
      isLoggedIn: false,
    };
  }

  handleLogin = () => {
    // Log in logic
    // Set the isLoggedIn state to true
    this.setState({ isLoggedIn: true });
  }

  render() {
    const { isLoggedIn } = this.state;

    return (
       <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator headerMode='none'>
            {isLoggedIn ? (
              <>
                <Stack.Screen name='App' component={AppNavigator} />
                <Stack.Screen name='DangerScreen' component={DangerScreen} />
              </>
            ) : (
              <Stack.Screen name='SSO'>
                {(props) => (
                  <LoginScreen {...props} onLogin={this.handleLogin} />
                  /* <GoogleOAuthProvider clientId="674546016382-4b1st85hr20iv3ckr1mdrtt0itrvrg7n.apps.googleusercontent.com">
                      <GoogleLogin
                        onSuccess={this.handleLogin} />
                    </GoogleOAuthProvider> */
                )}
              </Stack.Screen>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    );    
  }
}

export default App;