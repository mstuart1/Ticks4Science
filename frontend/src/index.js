import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import { configureStore } from "./store"
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import App from './App';
import './index.css'

const rootElement = document.getElementById('root')
const basename = process.env.REACT_APP_BASENAME;

const store = configureStore()
const persistor = persistStore(store)

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
        <BrowserRouter 
        basename={basename}
        >
        <App/>
        </BrowserRouter>
        </PersistGate>
        </Provider>
    </React.StrictMode>, rootElement
)
