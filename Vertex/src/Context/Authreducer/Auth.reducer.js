import { SET_CURRENT_USER } from "../Authactions/Auth.action";


const authReducer = (state, action) => {
    switch (action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                isAuthenticated: !!action.payload,
                user:action.payload,
                token:action.token,

            };
        default:
            return state;
    }
};

export default authReducer;