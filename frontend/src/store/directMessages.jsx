import csrfFetch from "./csrf";

export const RECEIVE_DM = "directMessages/RECEIVE_DM"
export const RECEIVE_DM_INDEX = "directMessages/RECEIVE_DM_INDEX"


export const postMessagetoDM = (dmId, messageBody) => async (dispatch) => {
  const res = await csrfFetch(`/api/direct_messages/${dmId}/messages`,{
    method: "POST",
    body: JSON.stringify(messageBody)
  })

  const data = await res.json()


}

export const createDM = (memberList, messageBody) => async (dispatch) => {
  const res = await csrfFetch('/api/direct_messages',{
    method:"POST",
    body: JSON.stringify({members: memberList, body: messageBody})
  });
  const data = await res.json();
  console.log("DM_ID to redirect to is ",Object.values(data.directMessages)[0].id)
  // console.log(data);
  dispatch({type: RECEIVE_DM, data})
  return Object.values(data.directMessages)[0].id;


}




export const getDMList =  (state) => {
  if (state.directMessages) {
        
    return Object.values(state.directMessages)
} else {
    return []
}
}


export const fetchDMIndex = () => async (dispatch) => {
  const res = await csrfFetch('/api/direct_messages');

  const data = await res.json();

  dispatch({type: RECEIVE_DM_INDEX, data})
}

export const fetchDM = (dmId) => async (dispatch) => {

    const res = await csrfFetch(`/api/direct_messages/${dmId}`)
    // debugger

    const data = await res.json();

    dispatch({type: RECEIVE_DM, data})


}

export const sendDM = (message) => async (dispatch) => {

  
}

const dmReducer = (state = {}, action) => {
  
  
  let newState =  Object.assign({},Object.freeze(state))

  switch (action.type) {


      case RECEIVE_DM: 
      return {...newState,...action.data.directMessages}

    


  case RECEIVE_DM_INDEX:
    newState = {}  

    return {...newState,...action.data.directMessages}

  

    default: 
    return state;
  }

}
export default dmReducer
