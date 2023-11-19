import { createStore, combineReducers, applyMiddleware,compose } from 'redux';
import thunk from 'redux-thunk';
import sessionReducer from './session';
import modalReducer from './modal';
import dmReducer from './directMessages';
import userReducer from './user';
import messageReducer from './messages';
import channelReducer from './channel';





// Create root reducer 

export const rootReducer = combineReducers({
    session: sessionReducer,
    directMessages: dmReducer,
    messages: messageReducer,
    users: userReducer,
    modal: modalReducer,
    channel: channelReducer
    
    
})

// Create enhancer 

let enhancer;

if (process.env.NODE_ENV === 'production') {

    enhancer = applyMiddleware(thunk);

} else {

    const logger = require('redux-logger').default;
    const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    enhancer = composeEnhancer(applyMiddleware(thunk,logger))

}


// Create configure store including logger

const configureStore = (preloadedState = {}) => {
    return createStore(rootReducer,preloadedState,enhancer)

}

export default configureStore