import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';

export type RouteParams = {
    Home: undefined;
    Login: undefined;
}   

export default function Stack() {
    const Stack = createNativeStackNavigator<RouteParams>();
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}