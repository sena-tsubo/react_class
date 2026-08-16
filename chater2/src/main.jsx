import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Kadai from './kadai.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Kadai />
  </StrictMode>
)
