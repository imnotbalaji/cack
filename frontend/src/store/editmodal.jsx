const OPEN_EDIT_MODAL = "modal/OPEN_EDIT_MODAL";
const CLOSE_EDIT_MODAL = "modal/CLOSE_EDIT_MODAL";

// modal actions

export const openEditModal = () => {
    return ({
        type: OPEN_EDIT_MODAL
    });
}

export const closeEditModal = () => {
    // debugger
    return ({
        type: CLOSE_EDIT_MODAL
    })

}



// Modal Reducer
const editModalReducer = (state = false ,action) => {
// debugger
    switch (action.type){
        case OPEN_EDIT_MODAL:
            return true
        case CLOSE_EDIT_MODAL:
            return false;
        default : 
            return state;
    }
}

export default editModalReducer;