import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import { HandymanListProvider } from './contexts/HandymanListContext'
import { HandymanProvider } from './contexts/HandymanContext'
import { ServiceListProvider } from './contexts/ServiceListContext'

ReactDOM.render(
    <BrowserRouter>
        <HandymanListProvider>
            <HandymanProvider>
                <ServiceListProvider>
                    <App />
                </ServiceListProvider>
            </HandymanProvider>
        </HandymanListProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
