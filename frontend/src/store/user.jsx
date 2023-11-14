import csrfFetch from "./csrf";

const GETUSER = 'user/GETUSER';

const getUser = (user) => ({
    type: GETUSER,
    user

})

const getUserThunkAction = (userId) => async (dispatch) => {
    const res = await csrfFetch('/api/user',{method: "GET"})
}


const userReducer = (state ={},action) => {

    return state;

}

export default userReducer