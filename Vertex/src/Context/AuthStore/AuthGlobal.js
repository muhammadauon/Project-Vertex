import React, { useContext } from 'react';
import { AuthContext } from './Auth';

const AuthGlobal = () => {
    const { isAuthenticated, user, token, setCurrentUser, handleLogout } = useContext(AuthContext);

    return {
        isAuthenticated,
        user,
        token,
        setCurrentUser,
        handleLogout
    };
};

export default AuthGlobal;
