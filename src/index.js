import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './components/App/App';
import { ProviderListProvider } from './contexts/ProviderListContext'

ReactDOM.render(
    <BrowserRouter>
        <ProviderListProvider>
            <App />
        </ProviderListProvider>
    </BrowserRouter>,
    document.getElementById('root')
);
