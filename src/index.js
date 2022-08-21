import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/_app';
import reportWebVitals from './reportWebVitals';
import HomePage from "./pages";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <React.StrictMode>
    <App Component={HomePage}/>
    // </React.StrictMode>
);

reportWebVitals();
