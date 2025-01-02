import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { customButtonStyle } from './styles/styles';
interface ButtonProps {
  title: string;
  onPress: () => void;
}

/**
 * A custom button component that uses TouchableOpacity and Text components
 * to create a button with a specified title and onPress event handler
 */
const CustomButton = ({ title, onPress }: ButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={customButtonStyle.container}>
        <Text style={customButtonStyle.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};



export default CustomButton;
