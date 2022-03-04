import React, { useContext } from 'react'
import { ModalContext } from '../../context/modalContext'
import Modal from './Modal'
function Modals() {
  const [modalStack, dispatch] = useContext(ModalContext)
  return (
    <React.Fragment>
      {modalStack?.modals?.length > 0 &&
        modalStack.modals.map((modal, index) => (
          <Modal
            key={`modal_${index}`}
            id={modal.id}
            title="Treebo Hotels"
            width={500}
            height={500}
          >
            <div>
              <p>
                Treebo Hotels is an Indian budget hotel chain that operates on
                franchising. As of January 2020, Treebo Hotel has over 600
                hotels in 113 cities in India.
              </p>
              <p>
                Treebo derives its name from "Bo Tree", the fig tree under which
                Gautam Buddha attained enlightenment. The fig tree family -
                banyan, peepal among others - has inspired not just our name but
                also what we do.
              </p>
              <p>
                In many ways these trees were the earliest form of budget
                hotels, offering shelter to travelers without discriminating
                between the rich and the poor. We too are obsessed about
                offering quality accommodation at affordable prices. The
                soothing shade of these trees allowed several interesting
                conversations among fellow travelers. While serving our guests
                dutifully, we too love to strike up a conversation or two with
                them.
              </p>
            </div>
          </Modal>
        ))}
    </React.Fragment>
  )
}
export default Modals
