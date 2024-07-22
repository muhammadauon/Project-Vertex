import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import More from '../Screens/More/More';
import TeamManagement from '../Screens/More/Managment/TeamManagement';
import AddTeam from '../Screens/More/Managment/AddTeam';
import AddProjects from '../Screens/Projects/AddProjects';

const Stack = createStackNavigator();

const MoreStack = () => {
  return (
    <Stack.Navigator initialRouteName="Chat" screenOptions={{headerShown:false}}>
      <Stack.Screen name="More Screen" component={More}  />
      <Stack.Screen name="TeamManagement" component={TeamManagement} />
      <Stack.Screen name="AddProjects" component={AddProjects} />
      <Stack.Screen name="AddTeam" component={AddTeam} />
    </Stack.Navigator>
  );
};

export default MoreStack;
