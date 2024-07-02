import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

// Import the local image
import WelcomeImage from '../../../assets/images/WelcomeNobg.png';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handleSignupPress = () => {
    navigation.navigate('SignupScreen');
  };

  return (
    <View style={styles.container}>
      <Image source={WelcomeImage} style={styles.image} />
      <Text style={styles.sloganText}>Empower Your Projects, Elevate Your Success!</Text>
      <TouchableOpacity style={styles.button} onPress={handleSignupPress}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#00b4d8',
  },
  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
    borderRadius: 10,
    marginTop: '10%',
  },
  sloganText: {
    fontWeight: 'bold',
    color: '#000042',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
  button: {
    width: '90%',
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    marginTop: 'auto',
    marginBottom: 40,
  },
  buttonText: {
    fontSize: 20,
    color: '#00b4d8',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;
