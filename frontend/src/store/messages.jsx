import csrfFetch from "./csrf";
import { RECEIVE_DM } from "./directMessages";

// Selector to get a specifc 
export const getMessageDetails = (messagelist) => (state) => {
    // debugger
// 
    return state
    // return Object.values(state.messages).filter(message=>messagelist.includes(message.id))
}

export const editMessageThunkAction = (messageId,messageBody) => async (dispatch) => {

    const res = await csrfFetch(`/api/messages/${messageId}`,{
        method: "PATCH",
        body: JSON.stringify({body:messageBody})
    });
    const data = await res.json();
    dispatch({type:RECEIVE_DM,data})


}

const messageReducer = (state = {},action) => {
    // debugger

    const newState = Object.freeze({},Object.freeze(state))

    switch (action.type) {

        case RECEIVE_DM: 
         return {...newState, ...action.data.messages}
        default: 
        return state;
    }


    
}

export default messageReducer;