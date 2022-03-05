import React, { useContext } from 'react'
import MuiButton from '@material-ui/core/Button'
import { ModalContext } from '../../context/modalContext'

function Button() {
  const [modalStack, dispatch] = useContext(ModalContext)
  return (
    <MuiButton
      color="primary"
      variant="contained"
      onClick={() => dispatch({ type: 'OPEN_MODAL', payload: { id: 1 } })}
    >
      Open Modal
    </MuiButton>
  )
}
export default Button
