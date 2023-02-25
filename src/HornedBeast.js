import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeast extends React.Component{
  render() {
    return(
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={this.props.image_url} alt={this.props.description} title={this.props.keyword} width='300' height='200' />
      <Card.Body>
        <Card.Title>{this.props.title}</Card.Title>
        <Card.Text>
        {this.props.description}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
      // <>
      // <h2>{this.props.title}</h2>
      // <img src={this.props.image_url} alt={this.props.description} title={this.props.keyword}></img>
      // <p>{this.props.description}</p>
      // </>
    )
  }
}

export default HornedBeast; 