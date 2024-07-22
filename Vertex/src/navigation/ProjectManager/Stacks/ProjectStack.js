import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TeamManagement from '../Screens/More/Managment/TeamManagement';
import AddProjects from '../Screens/Projects/AddProjects';

const Stack = createStackNavigator();

const ProjectStack = () => {
  return (
    <Stack.Navigator initialRouteName="AddProject" screenOptions={{headerShown:false}}>
      <Stack.Screen name="AddProject" component={AddProjects} />
    </Stack.Navigator>
  );
};

export default ProjectStack;
