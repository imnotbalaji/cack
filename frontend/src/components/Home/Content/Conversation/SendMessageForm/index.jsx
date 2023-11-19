import { useState } from "react"
import "./SendMessageForm.scss"
import { useDispatch } from "react-redux";
import { postMessagetoDM } from "../../../../../store/directMessages";
const SendMessageForm = ({dmId}) => {
    const [body,setBody] = useState("");
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(body)
        dispatch(postMessagetoDM(dmId,{body: body}))
        

    }
    const handleChange = (e) => {

        e.preventDefault();
        setBody(e.target.value)


    }

    return (
        <form onSubmit={handleSubmit}>
            <textarea value={body} placeholder={`Message...${dmId}`} onChange = {handleChange}/>
           <button>Submit</button> 

        </form>
       
    )




}

export default SendMessageForm