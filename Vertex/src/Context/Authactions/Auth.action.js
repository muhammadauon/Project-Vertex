import jwtEncode from "jwt-encode";
import { jwtDecode } from "jwt-decode";
import {
    setGenericPassword,
    resetGenericPassword,
    setInternetCredentials
} from "react-native-keychain";
import AsyncStorage from '@react-native-async-storage/async-storage';

// Action type
export const SET_CURRENT_USER = "SET_CURRENT_USER";

// Function to handle user login
export const loginUser = async (loginId, password, dispatch) => {
    try {
        // Retrieve stored user data from AsyncStorage
        const storedData = await AsyncStorage.getItem('userData');
        if (!storedData) {
            throw new Error('No user data found in AsyncStorage');
        }
        const userData = JSON.parse(storedData);
        console.log(userData);

        // Find the user with the matching email and password
        const user = userData.find(user => user.email === loginId && user.password === password);
        if (!user) {
            throw new Error('Invalid login credentials');
        }

        const token = jwtEncode({
            companyName: user.companyName,
            username: user.userName,
            email: user.email,
            role: user.role,
        }, 'your-secret-key'); // Encode JWT token
        console.log(token);

        const decoded = jwtDecode(token);
        console.log(decoded);

        await setGenericPassword(loginId, password);
        await setInternetCredentials('your-base-url', loginId, token);

        dispatch(setCurrentUser(decoded, token));
    } catch (e) {
        console.log(e);
        throw new Error('Login failed: ' + e.message);
    }
};

// Redux action to set the current user
export const setCurrentUser = (decoded, token) => {
    return {
        type: SET_CURRENT_USER,
        payload: {
            user: decoded,
            token
        }
    };
};

// Function to handle user logout
export const logoutUser = async (dispatch) => {
    try {
        await resetGenericPassword();
        dispatch(setCurrentUser({}, null));
    } catch (e) {
        console.log("Error in logout:", e);
        throw new Error(e);
    }
};

// Function to store signup data in AsyncStorage
export const storeSignupData = async (companyName, email, password, userName, role) => {
    try {
        // Retrieve the current list of users from AsyncStorage
        const storedData = await AsyncStorage.getItem('userData');
        const userData = storedData ? JSON.parse(storedData) : [];

        // Check if the user already exists
        const userExists = userData.some(user => user.email === email);
        if (userExists) {
            throw new Error('User already exists with this email');
        }

        // Append the new user's data to the list
        userData.push({
            companyName,
            email,
            password,
            userName,
            role,
        });

        // Store the updated list back in AsyncStorage
        await AsyncStorage.setItem('userData', JSON.stringify(userData));
        console.log('Signup data stored successfully:', userData);
    } catch (error) {
        console.error('Error storing signup data:', error);
        throw error;
    }
};
