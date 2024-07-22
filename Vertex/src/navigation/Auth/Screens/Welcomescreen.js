import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Box, Button, Center, Heading, Image, Text } from 'native-base';
import WelcomeImage from '../../../assets/images/WelcomeNobg.png';

const WelcomeScreen = () => {
  const navigation = useNavigation();

  const handleSignupPress = () => {
    navigation.navigate('SigninScreen');
  };

  return (
    <Center flex={1} px="3" backgroundColor="primary.500">
      <Box alignItems="center" justifyContent="center">
        <Image source={WelcomeImage} alt="Welcome Image" style={styles.image} />
        <Heading color={'white'} mb={4}>Empower Your Projects, Elevate Your Success!</Heading>
        <Button onPress={handleSignupPress}>
          Get Started
        </Button>
      </Box>
    </Center>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
    borderRadius: 10,
  },
});

export default WelcomeScreen;
