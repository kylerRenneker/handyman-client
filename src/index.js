import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import { HandymanListProvider } from './contexts/HandymanListContext'

ReactDOM.render(
    <BrowserRouter>
        <HandymanListProvider>
            <App />
        </HandymanListProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
