import "./Content.scss"
import UserProfile from "./UserProfile"

const Content = () => {

    return (
        <>
        <div className="conversation-list">
            ConversationList
            </div>
        <div className="conversation">
            Conversation</div>
            <div className="userProfile">
                <UserProfile userId={1}/>
            </div>
        </>
    )


}

export default Content 