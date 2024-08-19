
export const FETCH_LOGIN = 'FETCH_LOGIN';
export const doLogin = (data) => {

    return {
        type: 'FETCH_LOGIN',
        payload: data

    }
}