import { RECEIVE_DM } from "./directMessages";

// Selector to get a specifc 
export const getMessageDetails = (messagelist) => (state) => {
    // debugger
// 
    return state
    // return Object.values(state.messages).filter(message=>messagelist.includes(message.id))
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