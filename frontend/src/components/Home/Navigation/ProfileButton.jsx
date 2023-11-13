
import { useDispatch, useSelector } from "react-redux";

import ProfileModal from "./ProfileModal";
import { openModal } from "../../../store/modal";


const ProfileButton = () => {
    
    const modal = useSelector(state => state.modal)

   
    

    const dispatch = useDispatch();


    const openMenu= (e) => {
        e.preventDefault();
    
        dispatch(openModal())

    }





    return(
        <>
            <button onClick ={openMenu}>
                <div style={{color: "white",fontSize: "30px"}}>
                    <i class="fa-regular fa-user"></i>
                </div>
            </button>
            
            {modal && <ProfileModal/>}
        </>
        

    )
    
}

export default ProfileButton