import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Button, IconButton, makeStyles, Typography } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import ReactDom from 'react-dom'

const useStyles = makeStyles((theme) => ({
  modalOverlay: {
    position: 'fixed',
    zIndex: 1000,
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.7)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  modalContainer: {
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column'
  },
  modalHeader: {
    padding: theme.spacing(1, 2),
    borderBottom: '2px solid lightgrey',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  title: {
    fontWeight: 700
  },
  closeButton: {
    color: '#000'
  },
  modalContent: {
    height: '100%',
    padding: theme.spacing(2),
    overflow: 'auto'
  },
  modalAction: {
    padding: theme.spacing(3)
  }
}))
function Modal(props) {
  const { handleClose, callback, title, children, width, height, handleCount } =
    props
  const classes = useStyles()

  useEffect(() => {
    const closeOnEscapeKey = (e) => (e.key === 'Escape' ? handleClose() : null)
    document.body.addEventListener('keydown', closeOnEscapeKey)
    return () => {
      document.body.removeEventListener('keydown', closeOnEscapeKey)
    }
  }, [handleClose])

  const modal = (
    <div className={classes.modalOverlay}>
      <div
        className={classes.modalContainer}
        style={{ width: width, height: height }}
      >
        <div className={classes.modalHeader}>
          <Typography variant="h6" className={classes.title}>
            {title}
          </Typography>
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        </div>

        <div className={classes.modalContent}>{children}</div>
        <div className={classes.modalAction}>
          <Button color="primary" variant="contained" onClick={handleCount}>
            Open Modal
          </Button>
          <Button
            color="primary"
            variant="contained"
            style={{ marginLeft: '8px' }}
            onClick={handleClose}
          >
            Close Modal
          </Button>
        </div>
      </div>
    </div>
  )

  return ReactDom.createPortal(modal, document.getElementById('portal'))
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default Modal
