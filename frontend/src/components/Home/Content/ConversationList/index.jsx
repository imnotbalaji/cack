import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { fetchDMIndex, getDMList } from "../../../../store/directMessages";
import { Link } from "react-router-dom/cjs/react-router-dom";
import { setChannel } from "../../../../store/channel";

const ConversationList = () => {

  const dispatch = useDispatch();

  // debugger
  const directMessageList = useSelector(getDMList)
  const users = useSelector(state => state.users);

  const changeConversation = (dmId) => () =>{

    
    console.log(dmId)
    dispatch(setChannel(dmId));



  }
  console.log("dml-check");
  console.log(directMessageList);



    useEffect( ()=>{
      dispatch(fetchDMIndex());
      
    },[])

    return (

      <ul>
        {/* {directMessageList} */}
      {directMessageList && 
        directMessageList.map((dm) => (
          <Link key={dm.id} to={`/directMessages/${dm.id}` }>
            {/* <li>{dm.id}</li> */}
           <li >{dm?.users.map((userId)=> users[userId]?.email?.split("@")[0] + ", ")}</li>
          </Link>
          //  <li onClick={changeConversation(dm.id)}>{dm.users?.map((userId)=> users[userId]?.email.split("@")[0] + ", ")}</li>
        ) )}
        
      </ul>
        
    )

}

export default ConversationList