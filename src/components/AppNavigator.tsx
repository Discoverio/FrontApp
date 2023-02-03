import React from 'react';


import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HeaderApp from './HeaderApp';
import Card from './Card';
import s from '../assets/styles/globalStyles';

const Tab = createMaterialTopTabNavigator();

function Screen1() {
    return (
        <View>
            <HeaderApp />
            <View style={s.secondarybackgroundColor}>

            </View>
            <Text style={[s.backgroundColor, s.primaryColor, s.fs36, s.p2]}>La Musique</Text>

            <Card bkgColor={s.backgroundColor} txtColor={s.primaryColor} borderColor={s.borderColor}></Card>

        </View>
    );
}

function Screen2() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Screen 2</Text>
        </View>
    );
}

function Screen3() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Screen 3</Text>
        </View>
    );
}


export default function AppNavigator() {
    return (
        <Tab.Navigator style={{ paddingTop: StatusBar.currentHeight }} screenOptions={{
            tabBarStyle: { backgroundColor: "#18206F" },
            tabBarIndicatorStyle: {
                backgroundColor: '#dbe9ee',
            }
        }}>
            <Tab.Screen
                options={{
                    title: ({ color, focused }) => (
                        <Ionicons
                            size={25}
                            name={focused ? 'home' : 'home-outline'}
                            color={focused ? '#fff' : '#fff'}
                        />
                    ),
                }}
                component={Screen1}
                name='Home'
            />
            <Tab.Screen
                options={{
                    title: ({ color, focused }) => (
                        <Ionicons
                            size={25}
                            name={focused ? 'people-sharp' : 'people-outline'}
                            color={focused ? '#fff' : '#fff'}
                        />
                    ),
                }}
                component={Screen2}
                name='Friends'
            />
            <Tab.Screen
                options={{
                    title: ({ color, focused }) => (
                        <Ionicons
                            size={25}
                            name={focused ? 'lock-closed' : 'lock-open-outline'}
                            color={focused ? '#fff' : '#fff'}
                        />
                    ),
                }}
                component={Screen3}
                name='Login'
            />

        </Tab.Navigator>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
