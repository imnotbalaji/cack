import { useDispatch, useSelector } from "react-redux"
import {Link, Redirect, useHistory } from "react-router-dom/cjs/react-router-dom";
import { useState } from "react";
import { signupThunkAction } from "../../../store/session";
import Footer from "../Footer";


import "./SignupForm.scss"

const SignupForm = () => {

    // debugger
    const sessionUser = useSelector(state => state.session.user);
    const dispatch = useDispatch();
    const history = useHistory();

    const [email,setEmail] = useState("");
    const [password,setPassword]=useState("")
    const [errors,setErrors] = useState([]);

    if (sessionUser) return <Redirect to = "/"/>


    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
       
        dispatch(signupThunkAction(email,password)).catch(async res => { 
            const data = await res.json();
            
            setErrors(data);

        })
        
        
    }
    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }
    

    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value);

    }

    return (
        <div className = "signup-container">
            <header>
            <div className = "logo">
                <img  src="https://www.edigitalagency.com.au/wp-content/uploads/slack-logo-png-1.png" />
                </div>
                
            </header>
            
            <form className="signup-form" onSubmit={handleSubmit}>
            <h1>First, enter your email</h1>
            <p>We suggest using the <strong>email you use at work</strong></p>
            <input placeholder="name@work-email.com" className={(errors.length) ? "error" : "no-error"} value={email} onChange = {handleEmailChange}/>
            <input placeholder ="pasword" className={(errors.length) ? "error" : "no-error"}  value={password} onChange ={handlePasswordChange}/>
            
            <ul className = "errors">
                {errors?.map(error => <li key ={error}>{error}</li>)}
            </ul>
            <button className ="signup-button">Continue</button>
            </form>
            <div className ="login-link">
                <p>Already using Slack?</p>
                <Link to ="/login">Sign in</Link>

            </div>
         <Footer/>


        </div>
        
    )



}

export default SignupForm