import React, { Component } from 'react'
import './modal.css'

class Modal extends Component {
  constructor(props){
    super(props);
  }
  render(){
    const {header, text, closeButton, action, closeModal} = this.props;
    const closeBtn = <span className='modal-header-btn' onClick={closeModal}>X</span>
    console.log({closeButton});
    const closeModalListener = (e)=>{
      if (e.target.classList.contains('modal-wrapper')){
        closeModal();
      }
    }
    return (
      <div className="modal-wrapper" onClick={closeModalListener}>
        <div className='modal'>
        <div className='modal-header'>
          <p className='modal-header-text'>{header}</p>
      {closeButton ? (
        closeBtn
      ) : (
        null
      )}
          </div>
        <div className='modal-content'>
          <p className='modal-text'>{text}</p>
          <div className='modal-buttons'>
          {action}
          </div>
        </div>
      </div>
      </div>
      
    )
  }
}
export default Modal


