import { useState } from "react"
import "./SendMessageForm.scss"
import { useDispatch, useSelector } from "react-redux";
import { postMessagetoDM } from "../../../../../store/directMessages";
const SendMessageForm = ({dmId}) => {
    const [body,setBody] = useState("");
    const dispatch = useDispatch();
    const userList = useSelector(state => state.directMessages[dmId].users)
    const userNames = useSelector( state => Object.values(state.users)?.filter(user => userList.includes(user.id)).map(user=>user.email.split("@")[0]))


    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(postMessagetoDM(dmId,{body: body})).then(()=> setBody(''))
        

    }
    const handleChange = (e) => {

        e.preventDefault();
        setBody(e.target.value)


    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={body} placeholder={`Message...${userNames}`} onChange = {handleChange}/>
            <div className="button-area"> 
            <button>Submit</button> 
            </div>
           

        </form>
       
    )




}

export default SendMessageForm