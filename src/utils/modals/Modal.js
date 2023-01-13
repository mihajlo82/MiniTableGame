import { ModalContainer } from '../../styled/modal_utils/ModalUtils'

const Modal = ({children}) => {
  return (
    <ModalContainer>
      {children}
    </ModalContainer>
  )
}

export default Modal