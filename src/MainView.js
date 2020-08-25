import React, { Component } from 'react';
import Modal from './Modal';
import './style.css';



class MainView extends Component{
 state = { count:0 , show: false };

  showModal = () => {
    this.setState({ count: this.state.count + 1, show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  resetCount = () => {
    this.setState({ count: 0 });
  }

render(){
    return(
        <main>
        <h1>Task 1 : React Modal with count </h1>
        <Modal show={this.state.show} count={this.state.count} handleClose={this.hideModal}>
          
        </Modal>
        <button type="button" onClick={this.showModal} style={{cursor:"pointer",marginRight:"10px"}}> Open </button>
        <button type="button" onClick={this.resetCount} style={{cursor:"pointer"}}> Reset </button>
      </main>
    )
}

}

export default MainView;