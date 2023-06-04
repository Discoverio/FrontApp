import React from 'react';
import AppNavigator from './src/components/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DangerScreen from './src/screens/DangerScreen';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import SSO from './src/components/SSO'; // Update the import statement

interface State {
  randomAlbumId: string;
}

const Stack = createStackNavigator();


class App extends React.Component<{}, State> {

  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <Stack.Navigator headerMode='none'>
            {/* <Stack.Screen name='App' component={AppNavigator} />
            <Stack.Screen name='DangerScreen' component={DangerScreen} /> */}
            <Stack.Screen name='SSO' component={SSO} />
          </Stack.Navigator>
        </NavigationContainer>
      </ApplicationProvider>
    );    
  }
}

export default App;