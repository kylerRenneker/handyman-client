import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import { HandymanListProvider } from './contexts/HandymanListContext'
import { HandymanProvider } from './contexts/HandymanContext'

ReactDOM.render(
    <BrowserRouter>
        <HandymanListProvider>
            <HandymanProvider>
                <App />
            </HandymanProvider>
        </HandymanListProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
