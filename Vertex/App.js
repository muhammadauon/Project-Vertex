import React from 'react';
import AuthStack from './src/navigation/Auth/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
const App = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default App;
