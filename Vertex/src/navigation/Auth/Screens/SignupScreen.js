import React, { useState } from 'react';
import { Box, Button, Center, Input, Text, VStack, Select } from 'native-base';
import { storeSignupData } from '../../../Context/Authactions/Auth.action';
import { useNavigation } from '@react-navigation/native';

const SignupScreen = () => {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [userName, setUserName] = useState('');
  const [role, setRole] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigation = useNavigation();

  const handleSignup = async () => {
    if (password !== confirmPassword) {
      setErrorMessage('Password does not match the confirm password');
      return;
    }

    let roleId;
    if (role === 'Project Manager') {
      roleId = 1;
    } else if (role === 'Project Member') {
      roleId = 2;
    } else {
      setErrorMessage('Invalid role selected');
      return;
    }

    try {
      await storeSignupData(companyName, email, password, userName, roleId);

      setErrorMessage('');
      navigation.navigate('SigninScreen');
    } catch (error) {
      console.error('Error storing signup data:', error);
      setErrorMessage('Error storing signup data');
    }
  };

  return (
    <Center flex={1} px="3">
      <Box w="100%">
        <VStack space={5} alignItems="center">
          <Text fontSize="2xl" bold>
            Sign Up
          </Text>
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
            value={userName}
            onChangeText={setUserName}
          />
          <Select
            placeholder="Select Role"
            selectedValue={role}
            minWidth={200}
            onValueChange={(itemValue) => setRole(itemValue)}
          >
            <Select.Item label="Project Manager" value="Project Manager" />
            <Select.Item label="Project Member" value="Project Member" />
          </Select>
          {errorMessage ? <Text color="red.500">{errorMessage}</Text> : null}
          <Button onPress={handleSignup}>Sign Up</Button>
        </VStack>
      </Box>
    </Center>
  );
};

export default SignupScreen;
