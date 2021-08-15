import React, { Component } from 'react'
import Modal from "./components/Modal"
import {Button} from './components/Button'

class App extends Component {
  state = {
    firstModal : {
      header: "Do you want to delete this file",
      text: "Once you delete this file? it won't be possible to undo this action. Are you sure, you want to delete this file",
      closeButton: true,
      isOpen: false,
      /* actions: (
        <div>
          <Button onClick={this.closeModal.bind(this)} text={'OK'}></Button>
          <Button onClick={this.closeModal.bind(this)} text={'Cancel'}></Button>
        </div>
        ) */
    },
    secondModal : {
      header: "Do you want to delete this folder",
      text: "Once you delete this folder? it won't be possible to undo this action. Are you sure, you want to delete this folder",
      closeButton: true,
      isOpen: false,
    }
  }
  
  openFirstModal = ()=> {
    console.log('click');
    this.setState({
      firstModal: {
        ...this.state.firstModal,
        isOpen: true
      }
    })
  }
  openSecondModal = ()=> {
    console.log('click');
    this.setState({
      secondModal: {
        ...this.state.secondModal,
        isOpen: true
      }
    })
  }

  closeModal1 = ()=>{
    this.setState({
      firstModal: {
        ...this.state.firstModal,
        isOpen: false
      }
    })
  }
  closeModal2 = ()=>{
    this.setState({
      secondModal: {
        ...this.state.secondModal,
        isOpen: false
      }
    })
  }
  
  render(){
    const buttonsFirstModal = <div className="modal-btn-container">
      <button className="modal-btn" onClick={this.closeModal1.bind(this)}>Ok</button>
      <button className="modal-btn" onClick={this.closeModal1.bind(this)}>Cancel</button>
    </div>
    const buttonsSecondModal = <div className="modal-btn-container">
      <button className="modal-btn" onClick={this.closeModal2.bind(this)}>Ok</button>
      <button className="modal-btn" onClick={this.closeModal2.bind(this)}>Cancel</button>
    </div>
    const modal1 = this.state.firstModal.isOpen && <Modal header={this.state.firstModal.header} text={this.state.firstModal.text} closeButton={this.state.firstModal.closeButton} action={buttonsFirstModal} closeModal={this.closeModal1.bind(this)}></Modal>
    const modal2 = this.state.secondModal.isOpen && <Modal header={this.state.secondModal.header} text={this.state.secondModal.text} closeButton={this.state.secondModal.closeButton} action={buttonsSecondModal} closeModal={this.closeModal2.bind(this)}></Modal>
    return (
      <div className="containerBtns">
        <Button onClick={this.openFirstModal.bind(this)} backgroundColor={'silver'} text={'Open first modal'}></Button>
        <Button onClick={this.openSecondModal.bind(this)} backgroundColor={'light-grey'} text={'Open second modal'}></Button>
        {modal1}
        {modal2}
      </div>
    );
  }
}

export default App;
