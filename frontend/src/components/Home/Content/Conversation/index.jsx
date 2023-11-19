import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { Route, useParams, useRouteMatch } from "react-router-dom/cjs/react-router-dom"
import { fetchDM } from "../../../../store/directMessages";
import { getMessageDetails } from "../../../../store/messages";
import Message from "./Message";
import "./Conversation.scss"
import SendMessageForm from "./SendMessageForm";

const Conversation = () => {

    const { dmId } = useParams();
    
    const dispatch = useDispatch();

 
    const dmMessageList = useSelector(state=>state.directMessages[dmId]?.messages);
    // I still need a method which just filters the messages from the dmMessageList in the order in which they are appearing
    const dmMessages = useSelector(state=> Object.values(state.messages));
    useEffect(()=>{

        console.log(dmId);
        dispatch(fetchDM(dmId));


    }, [dmId, dispatch])

    

    return (

       

        <>
          
          <div className="message-area">
            { dmMessages?.map(message=> {
              return <li><Message message ={message}/></li>
            })}
          </div>
          <div className="send-message-area">

          <SendMessageForm dmId ={dmId}/>
          </div>
          
      
        </>

        
        
        
            
        

    )

}

export default Conversation