import { StyleSheet } from "react-native/Libraries/StyleSheet/StyleSheet";

const customButtonStyle = StyleSheet.create({
    container: {
      borderRadius: 10,
      backgroundColor: 'transparent',
      paddingVertical: 10,
      paddingHorizontal: 20,
      marginVertical: 10,
    },
    text: {
      fontSize: 16,
      color: '#fff',
      textAlign: 'center',
    },
  });

export { customButtonStyle }