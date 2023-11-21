import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom/cjs/react-router-dom";
import React from "react";
import Select from 'react-select'
import { fetchUsers } from "../../../../store/user";
import { createDM } from "../../../../store/directMessages";
import "./NewDMForm.scss"

const NewDMForm = () => {

    /// Choose the people you want to send a message to from a sort of drop down box 
/// You also have some tesxt in there .. 
    
const users = useSelector(state => Object.values(state.users).
filter(user => user.id !== state.session.user.id)
.map(user=> ({"value": user.id, "label": user.email })));
const dispatch = useDispatch();
const history = useHistory();

const [dmUsers,setDmUsers] = useState([]);
const [messageBody,setMessageBody] = useState("")

//Once the  users are selected and the message is typed allow them to send a message 



const handleUsersChange = (dmUsers) => {
    // e.preventDefault();
    setDmUsers(dmUsers||[])
    // console.log("DMUSers:", dmUsers);

}
const handlemessageBodyChange = (e) => {
    e.preventDefault();
    setMessageBody(e.target.value)
    // console.log("messageBody",messageBody)


}

const handleSubmit = (e) => {
    e.preventDefault();
    const memberList = dmUsers.map(user=>user.value);
    console.log(messageBody);
    dispatch(createDM(memberList,messageBody)).then(res => history.push(`/directMessages/${res}`))
    


}

useEffect(()=>{

dispatch(fetchUsers());

},[])

    return (
        <>
        
            <div className="message-area">
                <div className ="new-message-banner">
                    <h3>New Message</h3>
                </div>
            <Select isMulti options ={users} value={dmUsers} onChange={handleUsersChange}/>
            </div>
        
        
        <div className="send-message-area">
        <form onSubmit = {handleSubmit}>
        <textarea value={messageBody} placeholder={`Message...`} onChange = {handlemessageBodyChange}/>
        <button type="submit" disabled={ (dmUsers.length !== 0) && (messageBody)? false: true }>Submit</button>
        </form>
        
        </div>

        
        </>
        
        
    )


}

export default NewDMForm;