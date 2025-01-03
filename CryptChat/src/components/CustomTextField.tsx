import React from 'react';
import { TextInput, View, TextInputProps } from 'react-native';
import { customTextFieldStyle } from './styles/styles';

interface CustomTextFieldProps extends TextInputProps {
  isPassword?: boolean;
  setValue: (value: string) => void;
  value: string
}

/**
 * A custom text field component that uses TextInput and View components
 * to create a text field with a specified style and properties.
 *
 * @param {boolean} isPassword - Whether the text field is a password field.
 * @param {function} setValue - A function to call when the text field value changes.
 * @param {string} value - The current value of the text field.
 * @param {object} props - Additional properties to pass to the TextInput component.
 *
 * @example
 * <CustomTextField
 *   isPassword={true}
 *   setValue={(text) => this.setState({ password: text })}
 *   value={this.state.password}
 *   placeholder="Enter your password"
 * />
 */
const CustomTextField = ({ isPassword = false, setValue, value ,...props }: CustomTextFieldProps) => {
  return (
    <View style={customTextFieldStyle.container}>
      <TextInput
        style={customTextFieldStyle.input}
        secureTextEntry={isPassword}
        placeholderTextColor="rgba(255, 255, 255, 0.5)"
        {...props}
        onChangeText={(text) => setValue && setValue(text)}
        value={value}
      />
    </View>
  );
};

export default CustomTextField;

