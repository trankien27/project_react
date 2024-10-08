

import { FETCH_LOGIN } from '../action/userAction';
const INITIAL_STATE = {
    account: {
        username: "",
        token: "",
        roles: ""

    },
    isAuthenticated: false
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_LOGIN:
            return {
                ...state, account: {
                    username: action?.payload?.result?.username,
                    token: action?.payload?.result?.token,
                    roles: action?.payload?.result?.roles[0].name
                },
                isAuthenticated: action.payload.result.authenticated
            };

        default: return state;


    };
}
export default userReducer;