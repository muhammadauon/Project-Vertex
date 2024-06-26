import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from './Screens/SigninScreen';
import SignupScreen from './Screens/SignupScreen';
import ForgetPassword from './Screens/ForgetPassword';
const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{ title: 'Sign Up' }}
      />
      <Stack.Screen
        name="SigninScreen"
        component={SigninScreen}
        options={{ title: 'Sign In' }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{ title: 'Forgot Password' }}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
