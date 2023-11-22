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
import { fetchDM, postMessagetoDM,fetchDMIndex } from './store/directMessages';
import { fetchUsers } from './store/user';
import { createDM } from './store/directMessages';
import { editMessageThunkAction } from './store/messages';





const store = configureStore();

if (process.env.NODE_ENV !== 'production'){
  window.store = store;
  window.csrfFetch =csrfFetch;
  window.sessionActions = sessionActions;
  window.fetchDM = fetchDM;
  window.fetchDMIndex = fetchDMIndex;
  window.postMessagetoDM = postMessagetoDM;
  window.fetchUsers = fetchUsers;
  window.createDM = createDM;
  window.editMessageThunkAction = editMessageThunkAction;
  

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
  
  store.dispatch(restoreSession()).then(render_application)
} else {
  
  render_application()
  
}

