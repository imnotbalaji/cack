import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import {  useParams} from "react-router-dom/cjs/react-router-dom"
import { RECEIVE_DM, fetchDM } from "../../../../store/directMessages";

import Message from "./Message";
import "./Conversation.scss"
import SendMessageForm from "./SendMessageForm";
import consumer from "../../../../consumer";

const Conversation = () => {
  // debugger

    const { dmId } = useParams();
    
    const dispatch = useDispatch();
    const messagesEndRef = useRef(null);

    const logged_in_user = useSelector(state=>state.session.user.id);
    const dmMessageList = useSelector(state=>state.directMessages[dmId]?.messages);
    const userList= useSelector(state=>state.directMessages[dmId]?.users);
    const userNames = useSelector( state => Object.values(state?.users)?.filter(user => userList?.includes(user.id)).filter(user=> user.id!== logged_in_user).map(user=>user.email.split("@")[0]))
    // I still need a method which just filters the messages from the dmMessageList in the order in which they are appearing
    const dmMessages = useSelector(state=> Object.values(state.messages).filter(message=>dmMessageList.includes(message.id)));
    // const dmMessages = useSelector(state=> Object.values(state.messages))
    useEffect(()=>{

        
        dispatch(fetchDM(dmId));
        
        const subscription = consumer.subscriptions.create(
          {channel: "DirectMessagesChannel", id: dmId},
          {
            received: message => dispatch({type: RECEIVE_DM, data: message})
          }
        );
        scrollToBottom();


        return () => subscription?.unsubscribe();

    }, [dmId, dispatch])

    useEffect(()=>{
      scrollToBottom();

    },[dmMessages])

    const scrollToBottom = () => {
      messagesEndRef.current?.scrollIntoView({behavior: "smooth"})

    }

    

    return (

       

        <> 
          <div className="message-header">
           {userNames.join(", ")}

          </div>
          
          <div className="message-area">
            { dmMessages?.map(message=> {
              return <li><Message message ={message}/></li>
            })}
            <div ref={messagesEndRef}/>
          </div>
          <div className="send-message-area">

          <SendMessageForm dmId ={dmId} userNames={userNames}/>
          </div>
          
      
        </>

        
        
        
            
        

    )

}

export default Conversation