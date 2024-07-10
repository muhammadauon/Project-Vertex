import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SigninScreen from './Screens/SigninScreen';
import SignupScreen from './Screens/SignupScreen';
import ForgetPassword from './Screens/ForgetPassword';
import Home from '../ProjectManager/Screens/Home/Home';
import WelcomeScreen from './Screens/Welcomescreen';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      
      <Stack.Screen
        name="WelcomeScreen"
        component={WelcomeScreen}
        options={{ title: 'Welcome Screen' }}
      />
      <Stack.Screen
        name="SigninScreen"
        component={SigninScreen}
        options={{ title: 'Sign In' }}
      />
      <Stack.Screen
        name="SignupScreen"
        component={SignupScreen}
        options={{ title: 'Sign Up' }}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
        options={{ title: 'Forgot Password' }}
      />
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Home' }}
      />
      
    </Stack.Navigator>
  );
};

export default AuthStack;
