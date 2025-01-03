import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import CustomTextField from '../components/CustomTextField'
import CustomButton from '../components/CustomButton'
import { useState } from 'react'

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <Text style={styles.text}>LoginScreen</Text>
      <CustomTextField value={username} setValue={setUsername} placeholder='Username'/>
      <CustomTextField value={password} setValue={setPassword} isPassword placeholder='Password'/>
      <CustomButton title="Login" onPress={() => {
        console.log(password, + " " + username)
      }}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
  },

  text : {
    color: 'white',
  }

})