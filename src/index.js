import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from 'redux-logger';
import registerServiceWorker from './registerServiceWorker';

const feelings = (state=0, action) => {
    if(action.type==='FEELINGS'){
        return action.payload;
    }
    return state;
}

const understanding = (state=0, action) => {
    if(action.type==='UNDERSTANDING'){
        return action.payload;
    }
    return state;
}

const support = (state=0, action) => {
    if(action.type==='SUPPORT'){
        return action.payload;
    }
    return state;
}

const comment = (state='', action) => {
    if(action.type==='COMMENT'){
        return action.payload;
    }
    return state;
}

let storeInstance = createStore(
    combineReducers({
        feelings,
        understanding,
        support,
        comment
    }),
    applyMiddleware(logger)
)

ReactDOM.render(
<Provider store={storeInstance}>
    <App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
