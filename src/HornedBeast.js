import React from 'react';
import {Button, Card} from 'react-bootstrap';

class HornedBeast extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      favorite: 0 
    };
  }

  addFavorites = () => {
    this.setState({
      favorite: this.state.favorite + 1,
    });
  }

  passBeastName = () =>{
    this.addFavorites();
    this.props.selectedBeast(this.props.title, this.props.image_url, this.props.description)
  }

  render() { 
    return(
      <Card style={{ width: '18rem' }}>
      <Card.Img onClick={this.passBeastName} variant="top" src={this.props.image_url} alt={this.props.description} title={this.props.keyword} width='300' height='200' />
      <Card.Body >
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        {this.props.description}
        </Card.Text>
        <p>{this.state.favorite}😻 Favorites</p>
        <Button onClick={this.addFavorites} variant="primary">Favorite</Button>
      </Card.Body>
    </Card>
    )
  }
}

export default HornedBeast; 