import React from "react";
import HornedBeast from "./HornedBeast";
import "./Main.css";
import { ListGroup } from "react-bootstrap";
class Main extends React.Component {
 
  render() {
    let beasts = this.props.data.map((beast, idx) => {

      
      return (
        <div key={idx}>
          <ListGroup>
            <HornedBeast
              _id={beast._id}
              title={beast.title}
              image_url={beast.image_url}
              description={beast.description}
              keyword={beast.keyword}
              horns={beast.horns}
              selectedBeast={this.props.selectedBeast}
            />
          </ListGroup>
        </div>
      );
    });
    return <main>{beasts}</main>;
  }
}

export default Main;
