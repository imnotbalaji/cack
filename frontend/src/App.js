import { useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";
import {Switch, Route, Redirect } from "react-router-dom/cjs/react-router-dom";
import SignupForm from "./components/SignupForm";
import Navigation from "./components/Navigation";
import SplashPage from "./components/SplashPage";
import ErrorPage from "./components/ErrorPage";

function App() {
  const sessionUser = useSelector(state => state.session.user);
  
  return (
    <>
    <Switch>
      <Route path = "/errors"> <ErrorPage/></Route>
      <Route path="/login"> <LoginForm /> </Route>
      <Route path="/signup"><SignupForm /></Route>
      <Route exact path = "/">
      {sessionUser ? <Navigation/> : <SplashPage/>}
      </Route>
      <Redirect to = "/errors"/>
    </Switch>
    </>
  );
}

export default App;
