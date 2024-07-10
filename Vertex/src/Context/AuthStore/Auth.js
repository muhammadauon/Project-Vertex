import React, { createContext, useReducer } from 'react';
import authReducer from '../Authreducer/Auth.reducer';
import { SET_CURRENT_USER } from '../Authactions/Auth.action';
import {
    resetGenericPassword,
    resetInternetCredentials,
} from 'react-native-keychain';

const initialState = {
    isAuthenticated: false,
    user: {},
    token: null
};

// Create the context
export const AuthContext = createContext(initialState);

// Create a provider component
export const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, initialState);

    const setCurrentUser = (decoded, token) => {
        dispatch({
            type: SET_CURRENT_USER,
            payload: {
                user: decoded,
                token
            }
        });
    };

    const handleLogout = async () => {
        try {
            await resetGenericPassword();
            await resetInternetCredentials('baseURL');
            setCurrentUser({}, null);
        } catch (error) {
            console.error('Error logging out:', error);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated: state.isAuthenticated,
                user: state.user,
                token: state.token,
                setCurrentUser,
                handleLogout,
                dispatch // Ensure dispatch is included in the context
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};