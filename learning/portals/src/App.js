import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Modal from './components/Modal';
function App() {
  const [isOpen, setIsOpen] = useState(false);

  const onClickHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Modal open={isOpen} onClose={onClickHandler}>
          Fancy Modal
        </Modal>
        <button onClick={onClickHandler}>Open Modal</button>
      </div>

      <div
        style={{
          position: 'relative',
          backgroundColor: 'salmon',
          padding: '10px',
          zIndex: 2,
          width: '100%',
          height: '100vh',
        }}
      >
        other content
      </div>
    </>
  );
}

export default App;
