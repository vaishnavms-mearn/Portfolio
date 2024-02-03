import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import './Assets/bootstrap/bootstrap.min.css'
import './Assets/bootstrap/bootstrap.css'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

