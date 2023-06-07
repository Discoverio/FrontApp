import React from 'react';
import { View } from 'react-native';
import HeaderApp from '../components/HeaderApp';
import LoginForm from '../components/loginWidget';
import { Image } from 'react-native';
import s from '../assets/styles/globalStyles';
import { State, Text } from '@ui-kitten/components';
import GoogleLoginWidget from '../components/buttons/sso/google';
import WelcomeInfoBoard from '../components/buttons/WelcomeInfoBoard';

interface Props {
  onLogin: () => void; // Define the type of onLogin prop
}

export class LoginScreen extends React.Component<Props, State> {
    render(): React.ReactNode { // Change the return type to React.ReactNode
        const { onLogin } = this.props;
        return (
            <View style={{ backgroundColor: '#FFFFFF'}}>
              {/* <HeaderApp /> */}
              <View style={{position: 'relative'}}>
                <Image source={require('../assets/img/login_image.png')} style={{ width: '100%', height: '140px' }} />
                <Image source={require('../assets/img/DISCOVER_IO_SQUARE_512.png')} style={s.logo} />
              </View>
              <View style={{height:160}}>
                <WelcomeInfoBoard title='Welcome To' subtitle='DiscoverIO' color="#18206F"></WelcomeInfoBoard>
                
              </View>
              <LoginForm></LoginForm>
              
              <View style={{width: '80', alignItems: "center", paddingTop: 60, paddingBottom: 80 }}>
              <Text style={{color: '#174B6A', fontWeight:'640'}}>Or continue with</Text>
                <View style={{paddingTop: 20, paddingBottom: 20 }}>
                  <GoogleLoginWidget onLogin={onLogin} />
                </View>
              </View>
              <View style={{width: '80', alignItems: "center", paddingTop: 60, paddingBottom: 80 }}>
                <Text style={{color: '#174B6A', fontWeight:'640'}}>Not Member? <a style={{color: '#5DB0CD', fontWeight:'640'}} href="http://">Create account</a></Text> 
              </View>              
            </View>
          );
    }  
}
