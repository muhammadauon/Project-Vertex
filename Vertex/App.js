import React, { useContext, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';
import AuthStack from './src/navigation/Auth/AuthStack';
import ProjectManagerContainer from './src/navigation/ProjectManager/ProjectManagerContainer';
import ProjectMemberContainer from './src/navigation/ProjectMember/ProjectMemberContainer';
import customTheme from './src/theme/Theme';
import { AuthProvider, AuthContext } from './src/Context/AuthStore/Auth';
import store from './src/redux/store';
import { Provider } from 'react-redux';

const AppContent = () => {
  const { isAuthenticated, user } = useContext(AuthContext);
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (isAuthenticated && user && user.role) {
      setRole(user.role);
    } else {
      setRole(null);
    }
  }, [isAuthenticated, user]);

  return (
    <NavigationContainer>
      {isAuthenticated ? (
        role === 'Project Manager' ? (
          <ProjectManagerContainer />
        ) : (
          <ProjectMemberContainer />
        )
      ) : (
        <AuthStack />
      )}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <AuthProvider>
        <NativeBaseProvider theme={customTheme}>
          <AppContent />
        </NativeBaseProvider>
      </AuthProvider>
    </Provider>
  );
};

export default App;
