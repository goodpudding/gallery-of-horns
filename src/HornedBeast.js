import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

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
    this.props.selectedBeast(this.props.title)
  }

  render() { 
    return(
      <Card style={{ width: '18rem' }}>
      <Card.Img  variant="top" src={this.props.image_url} alt={this.props.description} title={this.props.keyword} width='300' height='200' />
      <Card.Body onClick={this.passBeastName}>
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