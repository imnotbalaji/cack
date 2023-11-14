import { Link } from "react-router-dom/cjs/react-router-dom"

const SplashNavBar = () => {

    return (
        <div className="splash-navbar">
            <img   src="https://thevinemadison.org/img/slack.png" />
            <Link to = "/login">Sign In</Link>

        </div>
        
    )

}

export default SplashNavBar