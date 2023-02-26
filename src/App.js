// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import data from './data.json';
import Modal from 'react-bootstrap/Modal'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends React.Component{
  constructor(props) {
    super(props)
    this.state ={
    showModal: false,
    beastName: '',
    beastURL: '',
    beastInfo: ''
    }
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false,
    })
  }

  selectedBeast =  (name, img, description) => {
    this.setState({
      showModal: true,
      beastName: name,
      beastURL: img,
      beastInfo: description
    })
  }

  render() {
    return (
      <>
      <Header/>
      <Main data={data} selectedBeast={this.selectedBeast}/>
      <Footer/>
      <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
      <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            {this.state.beastName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src ={this.state.beastURL} alt={this.state.beastInfo} width='100%' height='100%' ></img>
          <p>{this.state.beastInfo}</p>
        </Modal.Body>
      </Modal>
      </>
      )
      
  }

}


export default App;