import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import More from '../Screens/More/More';

const Stack = createStackNavigator();

const MoreStack = () => {
  return (
    <Stack.Navigator initialRouteName="Chat" screenOptions={{headerShown:false}}>
      <Stack.Screen name="More Screen" component={More}  />
    </Stack.Navigator>
  );
};

export default MoreStack;
