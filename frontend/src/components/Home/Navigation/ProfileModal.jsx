import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router-dom/cjs/react-router-dom";
import { closeModal } from "../../../store/modal";
import "./ProfileModal.css"
import { logoutAction, logoutThunkAction } from "../../../store/session";

const ProfileModal = () => {
    const dispatch = useDispatch();
    const modal = useSelector(state => state.modal)
    const history = useHistory();
    

    if (!modal)
    return null; 

    const handleModalClose = (e) => {
        e.preventDefault();
        dispatch(closeModal())
    }



    

    const handleSignout = (e) => {
        e.preventDefault();
        dispatch(closeModal());
        dispatch(logoutThunkAction());
        
        // dispatch logout thunk action, set modal to false and redirect to 
        
    }

    return (
        <div className ="modal-background" onClick = {handleModalClose}>
            <div className = "modal-child" onClick ={e => e.stopPropagation()}>
                
             <div className="modalMenu" onClick ={handleSignout}> Sign out of Cack </div>
            </div>
        </div>
    )
}

export default ProfileModal