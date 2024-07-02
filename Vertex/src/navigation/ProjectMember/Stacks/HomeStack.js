import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home/Home';


const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Employee Home Screen" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;
