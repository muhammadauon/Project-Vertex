import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Button, Center, Image, Text } from 'native-base';
import WelcomeImage from '../../../assets/images/WelcomeNobg.png';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handleSignupPress = () => {
    navigation.navigate('SigninScreen');
  };

  return (
    <Center flex={1} px="3" backgroundColor="primary.500">
      <Box >
        <Image source={WelcomeImage} alt="Welcome Image" style={styles.image} />
        <Text style={styles.sloganText}>Empower Your Projects, Elevate Your Success!</Text>
        <Button onPress={handleSignupPress}>
          Get Started
        </Button>
      </Box>
    </Center>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 10,
  },
  sloganText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 20,
  },
});

export default WelcomeScreen;
