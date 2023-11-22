import { useDispatch, useSelector } from "react-redux"
import "./Message.scss"
import { useState } from "react";
import SendMessageForm from "../SendMessageForm";
import { openEditModal } from "../../../../../store/editmodal";
import ProfileModal from "../../../Navigation/ProfileModal";
import EditModal from "./EditModal";
import EditMessageForm from "./EditMessageForm";


const Message = ({message}) =>{

    const author = useSelector(state=>state?.users[message.authorId]?.email);
    const [editMessage,setEditMessage] = useState(false);
    const dispatch = useDispatch();
    const editModal = useSelector(state=> state.editModal);
    

    

    const date = new Date(message.createdAt);

    const openEditMenu = (e) => {
        e.preventDefault();
        dispatch(openEditModal())
        

    }

    const preEditForm = () => {

        return (
            <div className="edit-modal-area">
                <p>{message.body}</p>

                <div className = "editing-area">
                <button onClick={openEditMenu}>
                <i class="fa-solid fa-ellipsis-vertical"></i>
                    </button>
                
                {editModal && <EditModal showEditForm={setEditMessage}/>}


                </div>
                
                </div>
      

        )
    }



    return (

        <div className="message-container">
            <div className ="image-container">
            <p>{author?.slice(0,1).toUpperCase()}</p>
            </div>
             
            <div className= "message">
            <p><strong>{author}</strong>  <span className="time">  {date.getHours()}:{date.getMinutes()}{date.getHours()>12 ? "PM":"AM"}</span></p>
                
                {editMessage ? <EditMessageForm message ={message} hideEditForm ={setEditMessage}/> : preEditForm()}
          
            </div>
                
            
        </div>
    )


}

export default Message