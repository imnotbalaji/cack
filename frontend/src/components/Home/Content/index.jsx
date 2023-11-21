import Conversation from "./Conversation"
import "./Content.scss"
import UserProfile from "./UserProfile"
import ConversationList from "./ConversationList"
import { Route, Switch } from "react-router-dom/cjs/react-router-dom"
import NewDMForm from "./NewDMForm"

const Content = () => {

    return (
        <>
        

        <div className="conversation-list">
            <ConversationList/>
        </div>

        <Switch>

        <Route path ="/directMessages/new">
            <div className="new-conversation-form">
                <NewDMForm/>
            </div>
        </Route>


        <Route path ="/directMessages/:dmId">
            <div className="conversation">
                <Conversation/>
            </div>
        </Route>
     



        </Switch>
        

        
            
        
            {/* <div className="userProfile">
                <UserProfile userId={1}/>
            </div> */}
        </>
    )


}

export default Content 