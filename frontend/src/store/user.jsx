import csrfFetch from "./csrf";
import { RECEIVE_DM, RECEIVE_DM_INDEX } from "./directMessages";

const GETUSER = 'user/GETUSER';
const GETUSERS = 'user/GETUSERS';

//Selector 

// const getUserbyId = (id) => (state) => {
//     return state.users[id]
// }

const getUser = (user) => ({
    type: GETUSER,
    user

})

const getUsers = (users) => ({
    type: GETUSERS,
    users

})

const getUserThunkAction = (userId) => async (dispatch) => {
    const res = await csrfFetch('/api/user',{method: "GET"})
}

export const fetchUsers = () => async (dispatch) => {
    const res = await csrfFetch('/api/users');
    const data = await res.json();

    dispatch({type: GETUSERS, data})
}


const userReducer = (state ={},action) => {

    const newState = Object.assign({},Object.freeze(state));

    switch (action.type){
        case RECEIVE_DM_INDEX: 

            
            return {...newState,...action.data.users}
        case GETUSERS:

        return {...newState,...action.data.users}

        
    
        default : 
        return state;

    }
   

}

export default userReducer