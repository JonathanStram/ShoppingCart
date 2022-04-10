import * as React from 'react';
import '../../App.css'
import { GrClose } from 'react-icons/gr';
import Box from '@mui/material/Box';
import Products from '../Products/Products'
import '../Products/Products.css'

const ModalInner = ({handleClose, handleOpen}) => {

  const styleBox = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    boxShadow: 24,
    pt: 5,
    px: 5,
    pb: 5,
    backgroundColor: '#fff',
    height: '35rem'
  };

  const box = {
    blue: {
      backgroundColor: '#e5f1fc'
    }
  }
  
  return(
    <Box className='border-radius-1' sx={styleBox}>
        <div className='relative h-full'>
          <div className='close-button'>
            <GrClose onClick={handleClose}/>
          </div>
          <Box className='p-4 text-center border-radius-1' sx={box.blue}>
            <p className='uppercase font-size-small my-1 spacing'>Too good to pass up, right?</p>
            <div className='my-1'>
              <strong>Order now and receive <span className='white-box'>€5,00</span> in your Wallet. 
                <svg 
                  stroke="currentColor" 
                  fill="none" 
                  stroke="#167ee5"
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  height="1em" 
                  width="1em" 
                  xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="16" x2="12" y2="12"></line>
                    <line x1="12" y1="8" x2="12.01" y2="8"></line>
                </svg>
              </strong>
            </div>
          </Box>
          <div className='text-center my-2'>
            <h2 className='my-1'>Your shopping cart</h2>
            <p className='font-size-small o-7 my-1'>Order now and your order will be shipped for free.</p>
          </div>
          <div className='border-bottom'>
            <Products/>
          </div>
          <div className='cart-info my-1'>
            <svg 
              stroke="currentColor" 
              fill="none" 
              stroke="#167ee5"
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              height="1em" 
              width="1em" 
              xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="16" x2="12" y2="12"></line>
                <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <p className='font-size-small text-blue'>The items in your shopping cart are not reserved for you</p>
          </div>
          <button className='button w-full absolute bottom' onClick={handleOpen}>Order</button>
        </div>
      </Box>
  )
}

export default ModalInner;