import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import {Provider} from "react-redux";
import store, {persistor} from "./redux/store";
import {TodoProvider} from "./context";
import {PersistGate} from 'redux-persist/integration/react'
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <TodoProvider>
                    <App/>
                </TodoProvider>
            </PersistGate>
        </Provider>
    </BrowserRouter>
);

