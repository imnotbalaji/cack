import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchDMIndex, getDMList } from "../../../../store/directMessages";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom";
import { setChannel } from "../../../../store/channel";
import consumer from "../../../../consumer";
import { RECEIVE_DM_INDEX } from "../../../../store/directMessages";


const ConversationList = () => {

  const dispatch = useDispatch();

  const logged_in_user = useSelector(state=>state.session.user.id)
  const directMessageList = useSelector(getDMList)
  const users = useSelector(state => state.users);

    useEffect( ()=>{
      dispatch(fetchDMIndex());
      const subscription = consumer.subscriptions.create(
        {channel: "DirectMessagesIndexChannel"},
        {
          received: dm_list => dispatch({type: RECEIVE_DM_INDEX, data: dm_list})
          
        }

      );

      return() => subscription?.unsubscribe();
      
      
    },[dispatch])

    return (
      <>
      
      <div className="new-message-form-container">
      <h3>App Academy</h3>
      <Link to = "/directMessages/new">
        
        <i className="fa-regular fa-pen-to-square"></i>
        {/* <FontAwesomeIcon icon={icon({name: 'coffee'})} /> */}
      </Link>



      </div>
      
      <ul>
                
        
      {directMessageList && 
        directMessageList.map((dm) => (
          <li>
            <NavLink key={dm.id} to={`/directMessages/${dm.id}` }>
            
            {dm?.users?.filter(userId=> userId!== logged_in_user).map((userId)=> users[userId]?.email?.split("@")[0]).join(", ")}
            
            
           </NavLink>
           </li>



          
          
    
        ) )}
        
      </ul>
      </>
        
    )

}

export default ConversationList