/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import Stack from './src/screens/Stack';


function App(): React.JSX.Element {

  return (
   <NavigationContainer>
      <Stack />
   </NavigationContainer>
  );
}


export default App;
