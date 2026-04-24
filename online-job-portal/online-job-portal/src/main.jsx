import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import './styles/custom.css';
import App from './App';
import { JobProvider } from './context/JobContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <JobProvider>
      <App />
    </JobProvider>
  </React.StrictMode>
);