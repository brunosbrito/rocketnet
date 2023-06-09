import { useState, createContext, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom';
import BrunonetProvider from './context/brunonetProvider';
import Car from './pages/car';


function App() {

  return (
    <BrunonetProvider>
      <Routes>
          <Route  path='/' element={ <Home /> } />
          <Route path='/car' element={ <Car />} />
      </Routes>   
    </BrunonetProvider>
  )
}

export default App
