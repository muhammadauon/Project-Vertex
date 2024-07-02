import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { ButtonStyles, Inputstyles, TextStyles } from '../../../theme/Theme';

const SignupScreen = () => {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [managerName, setManagerName] = useState('');
  const navigation = useNavigation();

  const handleSignup = () => {
    // Implement signup logic here
    console.log('Company Name:', companyName);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Manager Name:', managerName);
    navigation.navigate('Home');
  };

  const navigateToSignin = () => {
    navigation.navigate('SigninScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={TextStyles.MainHeading}>Sign Up</Text>
      <TextInput
        style={Inputstyles.input}
        placeholder="Company Name"
        value={companyName}
        onChangeText={setCompanyName}
      />
      <TextInput
        style={Inputstyles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={Inputstyles.input}
        placeholder="Password"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={Inputstyles.input}
        placeholder="Manager Name"
        value={managerName}
        onChangeText={setManagerName}
      />
      <TouchableOpacity style={[ButtonStyles.ButtonColor ,styles.Buttons]} onPress={handleSignup}> 
        <Text style={ButtonStyles.ButtonText}> Sign Up </Text>

      </TouchableOpacity>
      <View style={styles.linkContainer}>
        <Text style={styles.text}>Already have an account? </Text>
        <TouchableOpacity onPress={navigateToSignin}>
          <Text style={styles.linkText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  signupText: {
    fontWeight: 'bold',
    color: 'white',
  },
  linkContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  text: {
    color: 'black',
  },
  linkText: {
    color: '#00b4d8',
    textDecorationLine: 'underline',
  },
  Buttons:
  {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 10,
    marginTop: '5%',
    alignSelf:'center'

  },
});

export default SignupScreen;
