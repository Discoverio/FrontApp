import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import s from '../assets/styles/globalStyles';
import { Text, View } from 'react-native';
import HeaderApp from '../components/HeaderApp';
import LoginForm from '../components/loginWidget';


export class ProfileScreen extends React.Component<{}, State> {
    render(): React {
        return (
            <View>
                <HeaderApp />
                <View style={s.secondarybackgroundColor}>
                    <Ionicons name="person-circle-outline" size={100} color="#fff" />
                    <Text style={[s.backgroundColor, s.fs36, s.p4]}>Hello YP522 !</Text>
                </View>
            </View>
        );
    }
}