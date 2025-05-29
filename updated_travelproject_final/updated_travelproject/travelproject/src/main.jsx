import React, { useState } from 'react'
import axios from 'axios';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { BrowserRouter } from 'react-router-dom' // Import BrowserRouter
import { GoogleOAuthProvider } from "@react-oauth/google";

ReactDOM.createRoot(document.getElementById("root")).render(
  <GoogleOAuthProvider clientId="832199938987-0300p3i4girn7oubbs41c9e0ibbl91vl.apps.googleusercontent.com">
    <React.StrictMode>
      <BrowserRouter>
        {" "}
        {/* Wrap App with BrowserRouter */}
        <App />
      </BrowserRouter>
    </React.StrictMode>
    ,
  </GoogleOAuthProvider>
);