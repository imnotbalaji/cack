import csrfFetch, { storeCSRF } from "./csrf";

const SESSIONLOGIN = 'session/login';
const SESSIONLOGOUT = 'session/logout'

export const loginAction = (user) => ({
type: SESSIONLOGIN,
user
})

export const logoutAction = () => ({
    type: SESSIONLOGOUT
})

export const loginThunkAction = (email,password) => async (dispatch) => {
    const res = await csrfFetch('/api/session/', {method: "post", body: JSON.stringify({email, password})})
    const data = await res.json()
    dispatch(loginAction(data.user));
    storeCurrentUser(data.user);
    return res;
}

// Thunk action to sign up


export const signupThunkAction = (email,password) => async (dispatch) => {
    const res = await csrfFetch('/api/users',{method:'post',body:JSON.stringify({email,password})});
    const data = await res.json();
    dispatch(loginAction(data.user));
    storeCurrentUser(data.user);
    return res;
}

export const logoutThunkAction = () => async (dispatch) => {

    const res = await csrfFetch('/api/session/', {method: "DELETE"});
    
    dispatch(logoutAction());
    storeCurrentUser(null)


}

const storeCurrentUser = (user) => {
    if (user) {
        sessionStorage.setItem("currentUser",JSON.stringify(user))
    } else {
        sessionStorage.removeItem("currrentUser");
    }
}

export const restoreSession = () => async (dispatch) => {
    
    const res = await csrfFetch('/api/session');
    storeCSRF(res);
    const data = await res.json()
    
    storeCurrentUser(data.user);
    dispatch(loginAction(data.user))
}



const initialState = {user: JSON.parse(sessionStorage.getItem("currentUser"))}


const sessionReducer = (state = initialState, action) => {
    const newState = Object.assign({},Object.freeze(state));
    switch (action.type) {
        case SESSIONLOGIN: 
            newState.user = action.user
            return newState
        case SESSIONLOGOUT: 
            newState.user = null 
            return newState
        default: 
            return state;
    }
}

export default sessionReducer