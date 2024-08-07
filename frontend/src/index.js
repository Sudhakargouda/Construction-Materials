// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
// import './index.css'
// import { Provider } from 'react-redux';
// import store from './redux/store.js';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
// )


// src/index.js
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App';
// import './index.css';
// import { Provider } from 'react-redux';
// import store from './redux/store';



// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         <Provider store={store}>
//         <App />
//         </Provider>
//     </React.StrictMode>,
// );


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import { HelmetProvider } from 'react-helmet-async'; // Import HelmetProvider

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelmetProvider>
            <Provider store={store}>
                <App />
            </Provider>
        </HelmetProvider>
    </React.StrictMode>
);
