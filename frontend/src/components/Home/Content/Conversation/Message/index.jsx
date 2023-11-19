import { useSelector } from "react-redux"
import "./Message.scss"


const Message = ({message}) =>{

    const author = useSelector(state=>state.users[message.authorId].email)

    const date = new Date(message.createdAt)
    // .getHours()

    // const moment = require('moment');



    return (

        <div className="message-container">
             <p>{author.slice(0,1).toUpperCase()}</p>
            <div className= "message">
                <p><strong>{author}</strong>    {date.getHours()}:{date.getMinutes()}{date.getHours()>12 ? "PM":"AM"}</p>
                <p>{message.body}</p>
            </div>
            
        </div>
    )


}

export default Message