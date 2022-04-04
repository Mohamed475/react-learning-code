import React from 'react';
import ReactDOM from 'react-dom';

const Modal = (props) => {
  const onClickHandler = () => {
    props.onClose();
  };

  if (!props.open) {
    return null;
  }

  const overlayStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,.6)',
    zIndex: 1000,
  };

  const modalStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
  };

  return ReactDOM.createPortal(
    <>
      <div style={overlayStyle}></div>
      <div style={modalStyle}>
        {props.children}
        <button onClick={onClickHandler}>Close Modal</button>
      </div>
    </>,
    document.getElementById('portal')
  );
};

export default Modal;
