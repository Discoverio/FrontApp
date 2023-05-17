import React from 'react';
import { View } from 'react-native';
import HeaderApp from '../components/HeaderApp';
import RegisterForm from '../components/registerWidget';
import { Image } from 'react-native';
import s from '../assets/styles/globalStyles';
import { Text } from '@ui-kitten/components';
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import GoogleLoginWidget from '../components/buttons/sso/google';

import WelcomeInfoBoard from '../components/buttons/WelcomeInfoBoard';
import { Button } from '@ui-kitten/components';
export class RegisterScreen extends React.Component<{}, State> {
    render(): React {
        return (
            <View style={{ backgroundColor: '#18206f'}}>
              {/* <HeaderApp /> */}
              <View style={{position: 'relative'}}>
                <Image source={require('../assets/img/register_image.png')} style={{ width: '100%', height: '628px', position:"absolute"}} />
                {/* <Image source={require('../assets/img/DISCOVER_IO_SQUARE_512.png')} style={s.logo} /> */}
              </View>
              <View style={{height:160}}>
                <WelcomeInfoBoard title='Welcome To' subtitle='DiscoverIO' color="#ffffff"></WelcomeInfoBoard>
                
              </View>
              <RegisterForm></RegisterForm>
              
              <View style={{width: '80', alignItems: "center", paddingTop: 20, paddingBottom: 20 }}>
              <Text style={{color: '#FFFFFF', fontWeight:'640'}}>Or continue with</Text>
                <View style={{paddingTop: 20, paddingBottom: 20 }}>
                  <GoogleLoginWidget></GoogleLoginWidget>
                </View>
              </View>
              <View style={{width: '80', alignItems: "center", paddingTop: 60, paddingBottom: 80 }}>
                <Text style={{color: '#FFFFFF', fontWeight:'640'}}>Already member? <a style={{color: '#5DB0CD', fontWeight:'640'}} href="http://">Login now</a></Text> 

              </View>              

            </View>
          );
          
    }
    
}

