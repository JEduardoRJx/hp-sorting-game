import React from 'react';
import './Modal.scss'

const Modal = ({closeModal}) => {
  return (
    <div className='modal'>
      <div className='modal-contents'>
        <h1 className='modal-title'>Harry Potter and the Sorting Game</h1>
        <h2 className='click-me'>Click Below to Begin</h2>
        <img className ='modal-img' 
          src={require('../../images/marauders_map.png')} 
          alt='marauders map logo' 
          onClick={closeModal}/>
      </div>
      <img className ='modal-gif' 
        src={require('../../images/issiautng.gif')} 
        alt='I solemnly swear I am up to no good gif'/>
    </div>
  )
}

export default Modal;