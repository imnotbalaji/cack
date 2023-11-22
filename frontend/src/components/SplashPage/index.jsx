import { Link } from "react-router-dom/cjs/react-router-dom";
import SplashNavBar from "./NavBar";
import SplashFooter from "./Footer";
import "./SplashPage.scss"

const SplashPage = () => {

    return (
        <>
       <SplashNavBar/>
       <div className = "splash-content"> 


       <h1>Made for people. 
        <span> Built for productivity</span></h1>
        <p>Connect the right people, find anything you need and automate the rest. That’s work in Slack, your productivity platform.</p>
        <div className="login-button">
        <Link to ="/signup">SIGN UP WITH EMAIL</Link>
      
        
        </div>
        

       </div>
       
       <SplashFooter/>
        
        </>
        
        
    )

    
}

export default SplashPage;