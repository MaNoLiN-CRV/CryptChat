import React from 'react';
import { TextInput, View, TextInputProps } from 'react-native';
import { customTextFieldStyle } from './styles/styles';

interface CustomTextFieldProps extends TextInputProps {
  isPassword?: boolean;
}

/**
 * A custom text field component that uses TextInput
 * @param {boolean} isPassword - optional, determines if the text input is a password field
 * @param {TextInputProps} props - optional, props for the TextInput component
 */
const CustomTextField = ({ isPassword = false, ...props }: CustomTextFieldProps) => {
  return (
    <View style={customTextFieldStyle.container}>
      <TextInput
        style={customTextFieldStyle.input}
        secureTextEntry={isPassword}
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        {...props}
      />
    </View>
  );
};

export default CustomTextField;

