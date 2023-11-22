import { useState } from "react";
import { useDispatch } from "react-redux";
import { editMessageThunkAction } from "../../../../../store/messages";

const EditMessageForm = ({message,hideEditForm}) => {
    
    const [messageBody,setMessageBody] = useState(message.body)
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        hideEditForm(pre_state => false)
        dispatch(editMessageThunkAction(message.id,messageBody))
        
    }

    const handleChange = (e) => {

        e.preventDefault();
        setMessageBody(e.target.value)


    }
    return (
        <form onSubmit={handleSubmit}>
            <textarea value={messageBody} onChange={handleChange}/>
            <div className="submit-area">
            <i class="fa-regular fa-face-smile"></i>
            <button> Save </button> 
                </div>
            
            
        </form>
    )
}

export default EditMessageForm