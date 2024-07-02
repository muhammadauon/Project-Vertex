import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from '../Screens/Chat/ChatScreen';


const Stack = createStackNavigator();

const ChatStack = () => {
  return (
    <Stack.Navigator initialRouteName="Chat" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Employee Chat Screen" component={ChatScreen}  />
    </Stack.Navigator>
  );
};

export default ChatStack;
