import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Component/App/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware,compose } from 'redux';
import rootReducer from './reducers/reducer';
import thunk from 'redux-thunk';

const initialState = {};
const middleware = [thunk]
 
const store = createStore(rootReducer, initialState, 
    compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    );

ReactDOM.render(
    <Provider store ={store}>
    <App />,
    </Provider>,
    
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

serviceWorker.unregister();
