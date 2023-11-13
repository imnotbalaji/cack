import { useDispatch, useSelector } from "react-redux"
import { Redirect, useHistory } from "react-router-dom/cjs/react-router-dom";
import { useState } from "react";
import { signupThunkAction } from "../../../store/session";
import Footer from "../Footer";

import "./SignupForm.css"

const SignupForm = () => {

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
            <h1>logo </h1>
            </header>
            
            <form className="signup-form" onSubmit={handleSubmit}>
            <h1>First, enter your email</h1>
            <p>We suggest using the <strong>email you use at work</strong></p>
            <input placeholder="name@work-email.com" value={email} onChange = {handleEmailChange}/>
            <input placeholder ="pasword" value={password} onChange ={handlePasswordChange}/>
            
            <ul className = "errors">
                {errors?.map(error => <li key ={error}>{error}</li>)}
            </ul>
            <button className ="signup-button">Continue</button>
        </form>
         <Footer/>


        </div>
        
    )



}

export default SignupForm