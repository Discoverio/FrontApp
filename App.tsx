import React from 'react';
import AppNavigator from './src/components/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import DangerScreen from './src/screens/DangerScreen';
// import { useStore } from "./src/hooks/useStore";
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import axios from "axios";

interface State {
  randomAlbumId: string;
}

const Stack = createStackNavigator();

class App extends React.Component<{}, State> {
  // setAuthData = useStore((state: any) => state.setAuthData);
  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
      <NavigationContainer>
        <Stack.Navigator headerMode='none'>
          <Stack.Screen name='App' component={AppNavigator} />
          <Stack.Screen name='DangerScreen' component={DangerScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApplicationProvider>
    );    
  }
}

export default App;