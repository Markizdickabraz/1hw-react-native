import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground } from 'react-native';
import LoginScreen from './Screens/LoginScreen';
import RegistrationScreen from './Screens/RegistrationScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground style={styles.image} source={require('./assets/images/PhotoBG.jpg')} >
        <RegistrationScreen></RegistrationScreen>
        {/* <LoginScreen></LoginScreen> */}
      </ImageBackground>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
    image: {
    flex: 1,
      justifyContent: 'center',
      resizeMode: 'cover',
      justifyContent:'flex-end'
  },
});
