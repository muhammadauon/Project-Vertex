import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { ButtonStyles, ButtonText, Inputstyles, TextStyles } from '../../../theme/Theme';

const SigninScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
const navigation = useNavigation()
  const handleSignIn = () => {
    // Implement sign in logic here
    Alert.alert('Sign In', `Signed in successfully!\nEmail: ${email}`);
    navigation.navigate('Home')
    
  };

  return (
    <View style={styles.container}>
      <Text style={TextStyles.MainHeading}>Sign In</Text>
      
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
      
      <TouchableOpacity style={[styles.Buttons, ButtonStyles.ButtonColor]}> 
        <Text style={ButtonStyles.ButtonText}> Sign In </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
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

export default SigninScreen;
