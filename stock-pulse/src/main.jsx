import React from 'react'
import './index.css'
import App from './App.jsx'
import ReactDOM from 'react-dom/client'
import AuthProvider from './context/AuthProvider.jsx'
// import { Toaster } from 'react-hot-toast'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <App />
    <ToastContainer autoClose={3000} theme="colored" position="top-center" />
  </AuthProvider>
)
