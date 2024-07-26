import React, { useReducer} from 'react';

// reducers
import authReducer from '../Authreducer/Auth.reducer';

import AuthGlobal from './AuthGlobal';

const Auth = props => {
  const [stateUser, dispatch] = useReducer(authReducer, {
    isAuthenticated: null,
    user: {},
  });

  return (
    <AuthGlobal.Provider
      value={{
        stateUser,
        dispatch
      }}>
      {props.children}
    </AuthGlobal.Provider>
  );
};

export default Auth;
