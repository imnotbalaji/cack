import csrfFetch from "./csrf";
import { RECEIVE_DM, RECEIVE_DM_INDEX } from "./directMessages";

const GETUSER = 'user/GETUSER';

//Selector 

// const getUserbyId = (id) => (state) => {
//     return state.users[id]
// }

const getUser = (user) => ({
    type: GETUSER,
    user

})

const getUserThunkAction = (userId) => async (dispatch) => {
    const res = await csrfFetch('/api/user',{method: "GET"})
}


const userReducer = (state ={},action) => {

    // const newState = Object.assign({},Object.freeze(state));

    switch (action.type){
        case RECEIVE_DM_INDEX: 

            const newState = {};
            return {...newState,...action.data.users}

        
    
        default : 
        return state;

    }
   

}

export default userReducer