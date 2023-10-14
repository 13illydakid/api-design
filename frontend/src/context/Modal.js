// frontend/src/context/Modal.js

import React, { useRef, useState, useContext } from 'react';
import ReactDOM from 'react-dom';
import './Modal.css';

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [modalContent, setModalContent] = useState(null);
  // callback function that will be called when modal is closing
  const [onModalClose, setOnModalClose] = useState(null);

  const closeModal = () => {
    setModalContent(null); // clear the modal contents
    // If callback function is truthy, call the callback function and reset it
    // to null:
    if (typeof onModalClose === 'function') {
      setOnModalClose(null);
      onModalClose();
    }
  };

  const contextValue = {
    modalRef, // reference to modal div
    modalContent, // React component to render inside modal
    setModalContent, // function to set the React component to render inside modal
    setOnModalClose, // function to set the callback function called when modal is closing
    closeModal // function to close the modal
  };

  return (
    <>
      <ModalContext.Provider value={contextValue}>
        {children}
      </ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal() {
  const { modalRef, modalContent, closeModal } = useContext(ModalContext);
  // If there is no div referenced by the modalRef or modalContent is not a
  // truthy value, render nothing:
  if (!modalRef || !modalRef.current || !modalContent) return null;

  // Render the following component to the div referenced by the modalRef
  return ReactDOM.createPortal(
    <div id="modal">
      <div id="modal-background" onClick={closeModal} />
      <div id="modal-content">
        {modalContent}
      </div>
    </div>,
    modalRef.current
  );
}

export const useModal = () => useContext(ModalContext);
/*
<div className='big-box-div'>
<div className="all-spots-container">
    {spots.map(({ id, city, state, avgRating, price, previewImage }) => (
        <div key={id} className='spot-container' onClick={() => history.push(`/spots/${id}`)}>
            <div>
                <div className='spot-image-container'>
                    <img className='all-spots-image' src={previewImage} alt='preview-img'></img>
                </div>
                <div className='city-state-star-container'>
                    <div className='flex-column'>
                        <div className='spot-info'> {`${city},${state}`}</div>
                        <div className='spot-info'>{`$${price} night`}</div>
                    </div>
                    <div className='flex-column'>
                        <div className='all-spots-rating'>
                            <i className="fas fa-star">{avgRating}</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ))}
</div>
</div>
*/
