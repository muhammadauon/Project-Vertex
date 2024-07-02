import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home/Home';
import AddProjects from '../Screens/Projects/AddProjects';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Home Screen" component={Home} options={{ title: 'Home' }} />
      <Stack.Screen name="Add Project" component={AddProjects} options={{ title: 'Add Project' }} />
    </Stack.Navigator>
    
  );
};

export default HomeStack;
