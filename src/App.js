import React from "react";
import Header from "./Header.js";
import BeastForm from "./BeastForm";
import Main from "./Main.js";
import Footer from "./Footer.js";
import data from "./data.json";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      beastName: "",
      beastURL: "",
      beastInfo: "",
      amountOfHorns: 0,
      filteredHornedBeasts: [],
      filteredData: data,
    };
  }
  componentDidMount() {
    this.setState({
      filteredHornedBeasts: data,
    });
  }
  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  selectedBeast = (name, img, description) => {
    this.setState({
      showModal: true,
      beastName: name,
      beastURL: img,
      beastInfo: description,
    });
  };

  handleFilter = (horns) => {
    console.log(horns);
    if (horns === 1) {
      const filter = data.filter((hornedBeast) => hornedBeast.horns === 1);
      this.setState({
        filteredHornedBeasts: filter,
      });
    } else if (horns === 2) {
      const filter = data.filter((hornedBeast) => hornedBeast.horns === 2);
      this.setState({
        filteredHornedBeasts: filter,
      });
    } else if (horns === 3) {
      const filter = data.filter((hornedBeast) => hornedBeast.horns === 3);
      this.setState({
        filteredHornedBeasts: filter,
      });
    } else if (horns === 100) {
      const filter = data.filter((hornedBeast) => hornedBeast.horns === 100);
      this.setState({
        filteredHornedBeasts: filter,
      });
    } else {
      this.setState({
        filteredHornedBeasts: data,
      });
    }
 
  };

  render() {
    return (
      <>
        <Header />
        <BeastForm handleFilter={this.handleFilter} />
        <Main
          data={this.state.filteredHornedBeasts}
          selectedBeast={this.selectedBeast}
          horns={this.props.amountOfHorns}
        />
        <Footer />
        <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title id={this.state._id}>
              {this.state.beastName}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img
              src={this.state.beastURL}
              alt={this.state.beastInfo}
              width="100%"
              height="100%"
            ></img>
            <p>{this.state.beastInfo}</p>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default App;
