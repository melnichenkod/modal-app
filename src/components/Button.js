import React, { Component } from 'react'


export class Button extends Component {
  constructor(props){
    super(props);
  }
  
    render(){
    const {onClick, backgroundColor, text} = this.props;
    return (
      <button className="open-modal-btn" onClick={onClick}  style={{
        backgroundColor: backgroundColor,
      }}>{text}</button>
    )
  }
}

