import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';
import AuthStack from './src/navigation/Auth/AuthStack';
import ProjectManagerContainer from './src/navigation/ProjectManager/ProjectManagerContainer';
import ProjectMemberContainer from './src/navigation/ProjectMember/ProjectMemberContainer';
import customTheme from './src/theme/Theme';
import Auth from './src/Context/AuthStore/Auth';
import AuthGlobal from './src/Context/AuthStore/AuthGlobal';
import Store from './src/redux/store';
import { Provider } from 'react-redux';

const Container = () => {
  const context = useContext(AuthGlobal)
  console.log(context.stateUser);

  return context.stateUser.isAuthenticated ? (
    context.stateUser.user.RoleId == 1 ? (
      <ProjectManagerContainer />
    ) : (
      <ProjectMemberContainer />
    )
  ) : (
    <AuthStack />
  );

};

const App = () => {
  return (
    <Auth>
      <NavigationContainer>
        <NativeBaseProvider theme={customTheme}>
          <Provider store={Store} >
          <Container />
          </Provider >
        </NativeBaseProvider>
      </NavigationContainer>
    </Auth>
  );
};

export default App;
