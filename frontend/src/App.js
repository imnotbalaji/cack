import { useSelector } from "react-redux";
import {Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom";
import LoginForm from "./components/User_auth/LoginForm";
import SignupForm from "./components/User_auth/SignupForm";

import SplashPage from "./components/SplashPage";
import HomePage from "./components/Home"

import ErrorPage from "./components/ErrorPage";

function App() {
  const sessionUser = useSelector(state => state.session.user);
  
  return (
    <>
    <Switch>
      {/* <Route path = "/errors"> <ErrorPage/></Route> */}
      <Route path="/login"> <LoginForm /> </Route>
      <Route path="/signup"><SignupForm /></Route>
      <Route path = "/">
      {sessionUser ? <HomePage/> : <SplashPage/>}
      </Route>
      {/* <Redirect to = "/errors"/> */}
    </Switch>
    </>
  );
}

export default App;
