import React from 'react';
import AppNavigator from './src/components/AppNavigator';
import { NavigationContainer } from '@react-navigation/native';

import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';

interface State {
  randomAlbumId: string;
}

class App extends React.Component<{}, State> {

  render() {
    return (
      <ApplicationProvider {...eva} theme={eva.light}>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </ApplicationProvider>
    );    
  }
}

export default App;