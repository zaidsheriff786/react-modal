import React, { useEffect, useState } from 'react'
import ReactDom from 'react-dom'

function Portal({ id, children }) {
  const [wrapperElement, setWrapperElement] = useState(null)
  const wrapperId = `portal-wrapper-${id}`
  function createWrapperAndAppendToBody(wrapperId) {
    const wrapperElement = document.createElement('div')
    wrapperElement.setAttribute('id', wrapperId)
    document.body.appendChild(wrapperElement)
    return wrapperElement
  }
  useEffect(() => {
    let element = createWrapperAndAppendToBody(wrapperId)
    if (element) {
      setWrapperElement(element)
    }
    return () => {
      if (element?.parentNode) {
        element.parentNode.removeChild(element)
      }
    }
  }, [])

  return wrapperElement ? ReactDom.createPortal(children, wrapperElement) : null
}
export default Portal
