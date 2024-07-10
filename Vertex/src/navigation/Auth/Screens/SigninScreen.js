import { useNavigation } from '@react-navigation/native';
import React, { useState, useContext } from 'react';
import { ActivityIndicator, Platform } from 'react-native';
import { Box, Button, Center, HStack, Input, Link, Text, VStack, useToast } from 'native-base';
import { AuthContext } from '../../../Context/AuthStore/Auth';
import { loginUser } from '../../../Context/Authactions/Auth.action';

const SigninScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const toast = useToast();
  const { dispatch } = useContext(AuthContext);

  const validateFields = () => {
    if (!email || !password) {
      toast.show({
        title: 'Validation Error',
        description: 'Email and Password are required',
      });
      return false;
    }
    return true;
  };

  const onSubmit = async () => {
    if (validateFields()) {
      setLoading(true);
      try {
        await loginUser(email, password, dispatch);
        toast.show({
          title: 'Success',
          description: 'Signed in successfully!',
        });
        navigation.navigate('Home');
      } catch (e) {
        console.log(e)
        toast.show({
          title: 'Error',
          description: 'An Error Occurred, Try Again Later!',
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <Center flex={1} px="3">
      <Box w="100%">
        <VStack space={5} alignItems={'center'} justifyContent={"center"}>
          <Text fontSize="2xl" bold>Sign In</Text>
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
          {loading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            <Button onPress={onSubmit}>Sign In</Button>
          )}
          <HStack>
            <Text> Don't have an account? </Text>
            <Link _text={{ color: 'primary.500' }} onPress={() => navigation.navigate('SignupScreen')}>Sign Up</Link>
          </HStack>
        </VStack>
      </Box>
    </Center>
  );
};

export default SigninScreen;
