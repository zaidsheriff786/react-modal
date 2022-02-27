import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import Modal from './components/Modal/Modal'

import './App.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="App">
      <Button
        color="primary"
        variant="contained"
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </Button>

      {isOpen && (
        <Modal
          title="Treebo Hotels"
          width={500}
          height={500}
          handleClose={() => setIsOpen(false)}
        >
          <div>
            <p>
              Treebo Hotels is an Indian budget hotel chain that operates on
              franchising. As of January 2020, Treebo Hotel has over 600 hotels
              in 113 cities in India.
            </p>
            <p>
              Treebo derives its name from "Bo Tree", the fig tree under which
              Gautam Buddha attained enlightenment. The fig tree family -
              banyan, peepal among others - has inspired not just our name but
              also what we do.
            </p>
            <p>
              In many ways these trees were the earliest form of budget hotels,
              offering shelter to travelers without discriminating between the
              rich and the poor. We too are obsessed about offering quality
              accommodation at affordable prices. The soothing shade of these
              trees allowed several interesting conversations among fellow
              travelers. While serving our guests dutifully, we too love to
              strike up a conversation or two with them.
            </p>
          </div>
        </Modal>
      )}
    </div>
  )
}

export default App
