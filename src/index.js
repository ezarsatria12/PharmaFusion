import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import { BrowserRouter } from "react-router-dom";
import App from "./App";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

