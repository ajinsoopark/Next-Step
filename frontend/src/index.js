import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom"


import {createStore,applyMiddleware, compose} from "redux"
import {Provider} from "react-redux"
import logger from "redux-logger"
import thunk from 'redux-thunk'

import RootReducer from "./Redux/Reducers/rootReducer"
//Renders new page at the top of the page consistently
import ScrollToTop from './scrollToTop'

let initialState = {}

const middleware = [thunk,logger]

let store = createStore(RootReducer, initialState, compose(applyMiddleware(thunk, logger)))


ReactDOM.render(<Provider store = {store}> 
                    <BrowserRouter>
                        <ScrollToTop>
                            <App/>
                        </ScrollToTop>
                    </BrowserRouter>
                </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
