import { useState, createContext, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import Home from './pages/home'
import { Route, Routes } from 'react-router-dom';
import BrunonetProvider from './context/brunonetProvider';
import Plans from './pages/plans';


function App() {

  return (
    <BrunonetProvider>
      <Routes>
          <Route path='/plans' element={ <Plans />} />
          <Route  path='/' element={ <Home /> } />
      </Routes>
        
    </BrunonetProvider>
  )
}

export default App
