import React from 'react'
import Button from './components/Buttons/Button'
import Modals from './components/Modal/Modals'
import { ModalProvider } from './context/modalContext'
import './App.css'

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <Button />
        <Modals />
      </div>
    </ModalProvider>
  )
}

export default App
