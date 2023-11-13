const OPEN_MODAL = "modal/OPEN_MODAL";
const CLOSE_MODAL = "modal/CLOSE_MODAL";

// modal actions

export const openModal = () => {
    return ({
        type: OPEN_MODAL
    });
}

export const closeModal = () => {
    // debugger
    return ({
        type: CLOSE_MODAL
    })

}



// Modal Reducer
const modalReducer = (state = null ,action) => {
// debugger
    switch (action.type){
        case OPEN_MODAL:
            return true
        case CLOSE_MODAL:
            return null;
        default : 
            return state;
    }
}

export default modalReducer;