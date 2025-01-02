import { View, StyleSheet } from 'react-native';
import { Appbar, Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Stack from './src/screens/Stack';
import CustomModal from './src/components/CustomModal';
import { useState } from 'react'; 

const App = () => {
  
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Appbar.Header style={styles.header}>
          <Appbar.Content
            title="CryptChat"
            titleStyle={styles.title}
          />
          <Appbar.Action
            icon={'account'}
            color="#FF0000"
            onPress={() => setModalVisible(true)} 
          />
        </Appbar.Header>

        <CustomModal 
          visible={modalVisible} 
          onDismiss={() => setModalVisible(false)}
        >
          <Text>By Kaos and Jelly!</Text>
        </CustomModal>

        <NavigationContainer>
          <Stack />
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  header: {
    backgroundColor: 'black',
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    color: '#FF0000',
    fontFamily : 'monospace',
    textShadowColor: 'grey',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 1,
    elevation: 1,
    shadowColor: 'grey',
    shadowOffset: {width: -1, height: 1},
    shadowOpacity: 1,
    shadowRadius: 1,
  },
});



export default App;