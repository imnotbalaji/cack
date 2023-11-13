import { useSelector } from "react-redux";
import LoginForm from "./components/LoginForm";
import { Route } from "react-router-dom/cjs/react-router-dom";
import SignupForm from "./components/SignupForm";

function App() {
  const sessionUser = useSelector(state => state.session.user);
  
  return (
    <>
    <h1>Hello from App</h1>
    <Route path="/login">
      <LoginForm />
    </Route>
    <Route path="/signup">
      <SignupForm />
    </Route>
    {(sessionUser)? sessionUser.email : ""}

    </>
    
  );
}

export default App;
