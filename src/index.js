import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import { HandymanListProvider } from './contexts/HandymanListContext'
import { HandymanProvider } from './contexts/HandymanContext'
import { ServiceListProvider } from './contexts/ServiceListContext'
import { UserProvider } from './contexts/UserContext';

ReactDOM.render(
    <BrowserRouter>
        <HandymanListProvider>
            <HandymanProvider>
                <ServiceListProvider>
                    <UserProvider>
                        <App />
                    </UserProvider>
                </ServiceListProvider>
            </HandymanProvider>
        </HandymanListProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
