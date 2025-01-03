import { Dimensions, StyleSheet } from 'react-native';

export const customButtonStyle = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Grayish transparent background
        borderWidth: 1,
        borderColor: '#fff',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center',
       
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
        marginVertical: 10,
        width: Dimensions.get('window').width * 0.5,
        
    },
    input: {
        fontSize: 16,
        color: 'red',
        width: '100%',
      
    },
});

export const customModalStyle = StyleSheet.create({
  blurContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 20,
    width: Dimensions.get('window').width * 0.85,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

