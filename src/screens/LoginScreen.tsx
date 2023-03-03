import React from 'react';
import { View } from 'react-native';
import HeaderApp from '../components/HeaderApp';
import LoginForm from '../components/loginWidget';


export class LoginScreen extends React.Component<{}, State> {
    render(): React {
        return (
            <View>
              <HeaderApp />
              <LoginForm></LoginForm>
            </View>
          );
    }
}