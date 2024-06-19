import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RenderProvider } from './context/RenderContext';

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <React.StrictMode>
        <RenderProvider>
            <App />
        </RenderProvider>
    </React.StrictMode>
);
