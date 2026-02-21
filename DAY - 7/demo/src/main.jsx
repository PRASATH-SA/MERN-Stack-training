import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavBar from './navBar.jsx'
import App from './App.jsx'
import Footer from './footer.jsx'
import Api from './Api.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavBar />
    <App />
    <Api />
    <Footer />
  </StrictMode>
)
