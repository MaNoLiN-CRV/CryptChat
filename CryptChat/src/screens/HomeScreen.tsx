import { View, Text, Image } from 'react-native'
import React from 'react'
import CustomButton from '../components/CustomButton'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { RouteParams } from './Stack';
import { HomeScreenStyle } from './styles/screenStyles';

export default function HomeScreen() {
  const navigation = useNavigation<NavigationProp<RouteParams>>();
  return (
    <View style={HomeScreenStyle.container}>
      <Image source={require('../../assets/logo.jpg')} style={HomeScreenStyle.image} />
      <CustomButton title="Login" onPress={() => navigation.navigate('Login')} />
    </View>
  )
}
