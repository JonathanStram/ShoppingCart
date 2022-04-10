import './App.css';
import * as React from 'react';
import Modal from '@mui/material/Modal';
import ModalInner from './components/ModalInner/ModalInner'

const App = () => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="App">
       <div>
      <button className='button' onClick={handleOpen}>Open Modal</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <ModalInner handleClose={handleClose} handleOpen={handleOpen}/>
      </Modal>
    </div>
      
    </div>
  );
}

export default App;
