import React from 'react';
import ReactDOM, { render } from 'react-dom';
import './index.css';
import App from './App';
import configureStore from './store';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux';
import csrfFetch, { restoreCSRF } from './store/csrf';



const render_application = () => {

  const store = configureStore();

  if (process.env.NODE_ENV !== 'production'){
    window.store = store;
    window.csrfFetch =csrfFetch;
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

  
  ReactDOM.render(
  <React.StrictMode>
    <Root/>
  </React.StrictMode>,
  document.getElementById('root')
  );

}

if (sessionStorage.getItem('X-CSRF-Token')===null) {
  
  restoreCSRF().then(render_application)
  console.log(sessionStorage.getItem('X-CSRF-Token'))
  
  
} else {
  console.log(sessionStorage.getItem('X-CSRF-Token'))
  render_application()
  
}

