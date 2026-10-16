import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// import './assets/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/styles.css'


import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
