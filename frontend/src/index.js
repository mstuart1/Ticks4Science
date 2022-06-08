import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from "./store"
import App from './App';

const rootElement = document.getElementById('root')
const basename = process.env.REACT_APP_BASENAME;

ReactDOM.render(
    <React.StrictMode>
        <Provider>
        <BrowserRouter 
        basename={basename}
        >
        <App/>
        </BrowserRouter>
        </Provider>
    </React.StrictMode>, rootElement
)
