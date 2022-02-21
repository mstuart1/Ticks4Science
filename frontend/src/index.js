import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import App from './App';

const rootElement = document.getElementById('root')
const basename = process.env.REACT_APP_BASENAME || '/basename-not-working'

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter 
        basename={basename}
        >
        <App/>
        </BrowserRouter>
    </React.StrictMode>, rootElement
)