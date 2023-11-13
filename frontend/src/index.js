import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import csrfFetch from './store/csrf';
import * as sessionActions from './store/session'
import { restoreSession } from './store/session';


const store = configureStore();

if (process.env.NODE_ENV !== 'production'){
  window.store = store;
  window.csrfFetch =csrfFetch;
  window.sessionActions = sessionActions;
}

const Root = () => {
  return (
    <Provider store = {store}>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </Provider>
  )
}



const render_application = () => {
  
  ReactDOM.render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>,
  document.getElementById('root')
  );

}
// debugger
if (
  sessionStorage.getItem('X-CSRF-Token') === null || 
  sessionStorage.getItem('currentUser') === null
  ) {
    // debugger
  console.log("testing")
  store.dispatch(restoreSession()).then(render_application)
} else {
  
  render_application()
  
}

