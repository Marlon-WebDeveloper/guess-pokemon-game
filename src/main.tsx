import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import PokemonGuess from './components/PokemonGuess.tsx'
import LoginScreen from './components/LoginScreen.tsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginScreen/>}/>
      <Route path='/game' element={<PokemonGuess/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
