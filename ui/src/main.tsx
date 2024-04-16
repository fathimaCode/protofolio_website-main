import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import { Provider } from 'react-redux';
import configureStore from './store/store.ts';
import { BrowserRouter } from 'react-router-dom';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <BrowserRouter>
    <Provider store={configureStore}>
     <App />
  </Provider>
    </BrowserRouter>
  </React.StrictMode>,
)
