import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Box, Button, Center, Input, Text, VStack, Select, HStack } from 'native-base';
import { storeSignupData } from '../../../Context/Authactions/Auth.action';
const SignupScreen = () => {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [Role , setRole] = useState('')
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleSignup = () => {
    if (password !== confirmPassword) {
      setErrorMessage('Password does not match the confirm password');
      return;
    }

    // Store signup data in AsyncStorage
    try {
      storeSignupData(companyName, email, password, userName, Role);
    } catch (error) {
      console.error('Error storing signup data:', error);
      setErrorMessage('Error storing signup data');
      return;
    }

    // Clear the error message and navigate to Home if signup is successful
    setErrorMessage('');
    navigation.navigate('SigninScreen');
  };

  return (
    <Center flex={1} px="3">
      <Box w="100%">
        <VStack space={5} alignItems={'center'}>
          <Text fontSize="2xl" bold>Sign Up</Text>
          <Input
            placeholder="Company Name"
            value={companyName}
            onChangeText={setCompanyName}
          />
          <Input
            placeholder="Email"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
          />
          <Input
            placeholder="Password"
            secureTextEntry={true}
            value={password}
            onChangeText={setPassword}
          />
          <Input
            placeholder="Confirm Password"
            secureTextEntry={true}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <Input
            placeholder="User Name"
            secureTextEntry={false}
            value={userName}
            onChangeText={setUserName}
          />
          
          <Select
            placeholder="Select Role"
            selectedValue={Role}
            minWidth={200}
            onValueChange={(itemValue) => setRole(itemValue)}
          >
            <Select.Item label="Project Manager" value="Project Manager" />
            <Select.Item label="Project Member" value="Project Member" />
          </Select>
          {errorMessage ? (
            <Text color="red.500">{errorMessage}</Text>
          ) : null}
          <Button onPress={handleSignup}>
            Sign Up
          </Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default SignupScreen;
