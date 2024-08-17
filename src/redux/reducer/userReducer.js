
const INITIAL_STATE = {
    account: {
        username: "",
        token: ""

    },
    isAuthenticated: false
};
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_USER_LOGIN_SUCCESS':
            console.log(action)
            return {
                ...state, account: {

                    username: action?.payload?.username,
                    token: action.payload.token
                },
                isAuthenticated: action?.payload?.authenticated
            };


        default: return state;
    }
};

export default userReducer;