const SET_CHANNEL = "channel/SET_CHANNEL"
export const setChannel = (dmId) => ({
    type: SET_CHANNEL,
    dmId

})

const channelReducer = (state = null,action) => {

    switch (action.type) {

        case (SET_CHANNEL):
            return action.dmId
        default:
            return state;

    }

}

export default channelReducer