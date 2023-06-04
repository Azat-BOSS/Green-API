import React from 'react'
import ReactDOM from 'react-dom/client'
import { Layout } from './layout/Layout'
import { Provider } from 'react-redux'
import { store } from './services/store'
import { BrowserRouter as Router } from "react-router-dom";
import './global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Layout />
      </Router>
    </Provider>
  </React.StrictMode>,
)
