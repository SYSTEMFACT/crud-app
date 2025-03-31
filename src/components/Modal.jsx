import './Modal.css'

function Modal ({ openModal, closeModal, title = null, children }) {

  return (
    <div className={`modal ${openModal ? 'show-modal' : ''}`} onClick={closeModal}>
      <div className='modal-content' onClick={(e) => e.stopPropagation()}>
        {title && (
        <div className='modal-header'>
          <h2 className='modal-title'>{title}</h2>
       </div>
        )}
        <div className='modal-body'>
          {children}
        </div>
      </div>

    </div>
  )
}
export default Modal