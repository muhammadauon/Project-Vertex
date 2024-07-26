import jwtEncode from "jwt-encode";
import { jwtDecode } from "jwt-decode";
import {
    setGenericPassword,
    resetGenericPassword,
    setInternetCredentials
} from "react-native-keychain";

// Action type
export const SET_CURRENT_USER = "SET_CURRENT_USER";

// Function to handle user login
export const loginUser = async (loginId, password, dispatch) => {
    try {
        const response = await fetch(`http://172.31.224.1:7281/api/Users/Login?username=${loginId}&password=${password}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username: loginId, password: password }),
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const token = await response.text(); // assuming the token is returned as a plain text response
        const decoded = jwtDecode(token);

        await setGenericPassword(loginId, password);
        await setInternetCredentials('your-base-url', loginId, token);

        dispatch(setCurrentUser(decoded, token));
        console.log('token',decoded)
    } catch (e) {
        console.log(e);
        throw new Error('Login failed: ' + e.message);
    }
};

// Redux action to set the current user
export const setCurrentUser = (decoded, token) => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded,
        token,
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

export const storeSignupData = async (companyName, email, password, userName, roleId) => {
    try {
      const response = await fetch('http://172.31.224.1:7281/api/Users/CreateUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          CompanyName: companyName,
          Email: email,
          Password: password,
          UserName: userName,
          RoleId: roleId,
        }),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(errorText || 'Error storing signup data');
      }
  
      const SuccessMsg = await response.json();
      console.log('Signup data stored successfully:', SuccessMsg);
    } catch (error) {
      console.error('Error storing signup data:', error.message);
      throw error;
    }
  };
  