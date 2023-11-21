import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchDMIndex, getDMList } from "../../../../store/directMessages";
import { Link, NavLink } from "react-router-dom/cjs/react-router-dom";
import { setChannel } from "../../../../store/channel";


const ConversationList = () => {

  const dispatch = useDispatch();


  const directMessageList = useSelector(getDMList)
  const users = useSelector(state => state.users);

    useEffect( ()=>{
      dispatch(fetchDMIndex());
      
    },[])

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
            
            {dm?.users.map((userId)=> users[userId]?.email?.split("@")[0] + ", ")}
            
            
           </NavLink>
           </li>



          
          
    
        ) )}
        
      </ul>
      </>
        
    )

}

export default ConversationList