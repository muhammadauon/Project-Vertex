import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddProject from '../Screens/Projects/AddProjects';

const Stack = createStackNavigator();

const ProjectStack = () => {
  return (
    <Stack.Navigator initialRouteName="AddProject" screenOptions={{headerShown:false}}>
      <Stack.Screen name="AddProject" component={AddProject} />
    </Stack.Navigator>
  );
};

export default ProjectStack;
