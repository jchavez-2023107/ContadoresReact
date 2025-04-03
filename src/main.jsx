import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render( //Creando El virtual DOM -> etiqueta div
  <StrictMode>{/* Validador en modo de desarrollo */}
    <App /> {/* COMPONENTE... por Defecto  */}
  </StrictMode>,
)
