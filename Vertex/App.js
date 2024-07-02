import React from 'react';
import AuthStack from './src/navigation/Auth/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import ProjectManagerContainer from './src/navigation/ProjectManager/ProjectManagerContainer';
import ProjectMemberContainer from './src/navigation/ProjectMember/ProjectMemberContainer';
const App = () => {
  return (
    <NavigationContainer>
    <ProjectMemberContainer/>
    </NavigationContainer>
  );
};

export default App;
