
import { useDispatch, useSelector } from "react-redux";

import ProfileModal from "./ProfileModal";
import { openModal } from "../../../store/modal";


const ProfileButton = () => {
    
    const modal = useSelector(state => state.modal)
    const current_user = useSelector(state => state.session.user.email)

   
    

    const dispatch = useDispatch();


    const openMenu= (e) => {
        e.preventDefault();
    
        dispatch(openModal())

    }





    return(
        <>
            <button onClick ={openMenu}>
                <div style={{color: "white",fontSize: "20px"}}>
                    {/* <i class="fa-regular fa-user"></i> */}
                    {current_user?.slice(0,1).toUpperCase()}
                </div>
            </button>
            
            {modal && <ProfileModal/>}
        </>
        

    )
    
}

export default ProfileButton