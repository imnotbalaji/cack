import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Route, useParams, useRouteMatch } from "react-router-dom/cjs/react-router-dom"
import { RECEIVE_DM, fetchDM } from "../../../../store/directMessages";
import { getMessageDetails } from "../../../../store/messages";
import Message from "./Message";
import "./Conversation.scss"
import SendMessageForm from "./SendMessageForm";
import consumer from "../../../../consumer";

const Conversation = () => {

    const { dmId } = useParams();
    
    const dispatch = useDispatch();
    const messagesEndRef = useRef(null);

 
    const dmMessageList = useSelector(state=>state.directMessages[dmId]?.messages);
    // I still need a method which just filters the messages from the dmMessageList in the order in which they are appearing
    const dmMessages = useSelector(state=> Object.values(state.messages));
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
          
          <div className="message-area">
            { dmMessages?.map(message=> {
              return <li><Message message ={message}/></li>
            })}
            <div ref={messagesEndRef}/>
          </div>
          <div className="send-message-area">

          <SendMessageForm dmId ={dmId}/>
          </div>
          
      
        </>

        
        
        
            
        

    )

}

export default Conversation