import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import './LoginForm.css';
import { Link } from "react-router-dom/cjs/react-router-dom";

import { loginThunkAction } from "../../../store/session";
import { Redirect, useHistory } from "react-router-dom/cjs/react-router-dom";
import Footer from "../Footer";

const LoginForm = () => {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [errors, setErrors] = useState([]);

    const sessionUser = useSelector(state => state.session.user);

    

    const history = useHistory();

    const dispatch = useDispatch();

    if (sessionUser) return <Redirect to = "/"/>;

    

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors([]);
        // Why didnt' /t
        dispatch(loginThunkAction(email,password))
            .catch(async res =>{
            const data = await res.json();
            setErrors(data.errors);
            // There is some more error handlign code in the auth_me project that I don't follow and havent included 
            
        } )  
    }

    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value)
    }

    return (

        <div className ="getting-started">
             <div className="login-form-header">
                <div> </div>
                <h2>logo</h2>
                <div className="sign-up-link">
                    New to Slack?
                    <br/>
                    <Link to="/signup">Create an account</Link>
                </div>
             </div>
            <form className = "login-form" onSubmit = {handleSubmit}>
                <h1> Sign in to Cack </h1>
                <p> We suggest using the <strong>email address</strong> you use at school </p>
                <div className="login-input-container">
                    <input placeholder="name@work-email.coms"value={email} onChange={handleEmailChange}/>
                    <input type ="password" placeholder="*******" onChange={handlePasswordChange}/>
                    {errors && 
                        <ul className = "errors"> 
                        {errors?.map(error => <li key = {error}>{error} </li>)}
                    </ul>
                    }
                    <button> Sign In with Email</button>
                </div>
            </form>
            <Footer/>

        </div>
    )
    
    
}

export default LoginForm