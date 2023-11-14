import Navigation from "./Navigation"
import SearchBar from "./SearchBar";
import "./Home.scss"
import { Route } from "react-router-dom/cjs/react-router-dom";
import UserProfile from "./Content/UserProfile";
import Content from "./Content";

const HomePage = () => {
    return (
        <>
            
            {/* <SearchBar/> */}
            {/* <Navigation/> */}
            {/* <Content/>     */}
            <div className ="content-grid">
                <div className="search-bar-container">
                   <SearchBar/>
                </div>
                <div className ="side-bar-container">
                    <Navigation/>
                </div>
                <div className="content">
                     <Content/>
                </div>
            </div>
            
            
            
            
            
        

    
        

        
        </>
        
    )
}

export default HomePage;