import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Link, Redirect, useHistory } from "react-router-dom/cjs/react-router-dom";
import { closeModal } from "../../../../store/modal";
import "./ProfileModal.scss"
import { logoutAction, logoutThunkAction } from "../../../../store/session";
import UserProfile from "../../Content/UserProfile";

const ProfileModal = () => {
    const dispatch = useDispatch();
    const modal = useSelector(state => state.modal)
    const history = useHistory();
    const user = useSelector(state => state.session.user)
    const [status,setStatus] = useState();
    

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

    const changeStatus = (e) => {
        e.preventDefault();

    }

    return (
        <div className ="modal-background" onClick = {handleModalClose}>
            <div className = "modal-child" onClick ={e => e.stopPropagation()}>
                <div className="username-id"> 
                    <h1>B</h1>
                    <p> {user.email}</p>
                </div>
                <input placeholder = "Update your status" value ={status} onChange ={changeStatus} /> 
                <div className="userprofile">
                    <Link to ="/userprofile">Profile</Link>
                </div>
                <div className="signOutButton" onClick ={handleSignout}> Sign out of Cack </div>
            </div>
        </div>
    )
}

export default ProfileModal