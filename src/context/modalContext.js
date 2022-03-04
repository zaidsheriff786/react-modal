import React, { useReducer, createContext } from 'react'

export const ModalContext = createContext({})
const initialState = {
  modals: []
}
function ModalReducer(state, action) {
  switch (action.type) {
    case 'OPEN_MODAL': {
      return { ...state, modals: [...state.modals, action.payload] }
    }

    case 'CLOSE_MODAL': {
      return {
        ...state,
        modals: state.modals.filter((modal) => modal.id !== action.payload.id)
      }
    }
    default:
      return state
  }
}
export const ModalProvider = (props) => {
  const [modalStack, dispatch] = useReducer(ModalReducer, initialState)
  return (
    <ModalContext.Provider value={[modalStack, dispatch]}>
      {props.children}
    </ModalContext.Provider>
  )
}
