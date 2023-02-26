import React from "react";
import HornedBeast from "./HornedBeast";
import './Main.css'
class Main extends React.Component {
  render() {
    let beasts = [];
    this.props.data.forEach((beast, idx) => {
      beasts.push(
        <HornedBeast
          _id={beast._id}
          title={beast.title}
          image_url={beast.image_url}
          description={beast.description}
          keyword={beast.keyword}
          horns={beast.horns}
          selectedBeast={this.props.selectedBeast}
          key={idx}
        />
      );
    });
    return <main>{beasts}</main>;
  }
}

export default Main;
