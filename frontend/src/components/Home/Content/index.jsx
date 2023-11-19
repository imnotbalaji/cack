import Conversation from "./Conversation"
import "./Content.scss"
import UserProfile from "./UserProfile"
import ConversationList from "./ConversationList"
import { Route, Switch } from "react-router-dom/cjs/react-router-dom"

const Content = () => {

    return (
        <>
        

        <div className="conversation-list">
            <ConversationList/>
        </div>
        
        <Route path ="/directMessages/:dmId">
            <div className="conversation">
                <Conversation/>
            </div>
        </Route>

        
            
        
            {/* <div className="userProfile">
                <UserProfile userId={1}/>
            </div> */}
        </>
    )


}

export default Content 