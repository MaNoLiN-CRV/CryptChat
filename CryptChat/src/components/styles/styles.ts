import { StyleSheet } from "react-native/Libraries/StyleSheet/StyleSheet";

export const customButtonStyle = StyleSheet.create({
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


export const customTextFieldStyle = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: 10,
        marginVertical: 10,
    },
    input: {
        fontSize: 16,
        color: '#fff',
    },
});
