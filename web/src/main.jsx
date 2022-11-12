import React from 'react'
import ReactDOM from 'react-dom/client'
/*modificou router para index, na hora de chamar não tem problema, pois o JS
interpreta o pages*/

//Carregar o Router direto do pages
import { Router } from './pages' 
import './assets/global.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <Router />
  </React.StrictMode>
)



