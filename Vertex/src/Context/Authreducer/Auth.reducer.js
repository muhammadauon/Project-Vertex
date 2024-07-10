import { SET_CURRENT_USER } from "../Authactions/Auth.action";

const initialState = {
    isAuthenticated: false,
    user: {},
    token: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!action.payload.user,
                user: action.payload.user,
                token: action.payload.token
            };
        default:
            return state;
    }
};

export default authReducer;
