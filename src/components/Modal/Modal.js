import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import {
  Button,
  IconButton,
  makeStyles,
  Typography,
  useTheme,
  useMediaQuery
} from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import { ModalContext } from '../../context/modalContext'

const useStyles = makeStyles((theme) => ({
  modalOverlay: {
    position: 'fixed',
    zIndex: 1000,
    inset: 0,
    backgroundColor: 'rgba(0,0,0,0.7)'
  },

  wrappers: (props) =>
    props.id && {
      top: `${props.id * 50}px`,
      left: `${props.id * 50}px`,
      position: 'fixed',
      [theme.breakpoints.down('sm')]: {
        top: `${props.id * 10}px`,
        left: 0
      }
    },

  modalWrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%'
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
  const { id, title, children, width, height } = props
  const classes = useStyles({ id })
  const theme = useTheme()
  const [modalStack, dispatch] = useContext(ModalContext)
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'), { noSsr: true })

  return (
    <div className={classes.modalOverlay}>
      <div className={id == 1 ? classes.modalWrapper : classes.wrappers}>
        <div
          className={classes.modalContainer}
          style={{
            ...(isMobile
              ? { width: 'auto', height: height }
              : { width: width, height: height })
          }}
        >
          <div className={classes.modalHeader}>
            <Typography variant="h6" className={classes.title}>
              {title}
            </Typography>
            <IconButton
              aria-label="close"
              className={classes.closeButton}
              onClick={() =>
                dispatch({
                  type: 'CLOSE_MODAL',
                  payload: { id }
                })
              }
            >
              <CloseIcon />
            </IconButton>
          </div>

          <div className={classes.modalContent}>{children}</div>
          <div className={classes.modalAction}>
            <Button
              color="primary"
              variant="contained"
              onClick={() =>
                dispatch({
                  type: 'OPEN_MODAL',
                  payload: { id: modalStack.modals.length + 1 }
                })
              }
            >
              Open Modal
            </Button>
            <Button
              color="primary"
              variant="contained"
              style={{ marginLeft: '8px' }}
              onClick={() =>
                dispatch({
                  type: 'CLOSE_MODAL',
                  payload: { id }
                })
              }
            >
              Close Modal
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired
}

export default Modal
