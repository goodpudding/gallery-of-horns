
import React from 'react';
import {ListGroup, Button, Form} from 'react-bootstrap';
class BeastForm extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      howToSort: '',
      filteredData: this.props.data,
      selectedValue: '',
    }
  }

  handleChange =(e)=>{
    this.setState({
      selectedValue: parseInt(e.target.value),
    })
    console.log(typeof e.target.value);
  }

  handleSubmit = (e) => {
   e.preventDefault();
   this.props.handleFilter(this.state.selectedValue);
  }

  render() {
    return(
      <>
      <Form onSubmit={this.handleSubmit}>
           
            <Form.Label>Select Number of Horns
              <Form.Select name="selected" onChange={this.handleChange} value={this.state.selected}>
                <option value="1">1 Horn</option>
                <option value="2">2 Horns</option>
                <option value="3">3 Horns</option>
                <option value="100">4 or more Horns</option>
              </Form.Select>
            </Form.Label>
            <Button type="submit">Submit</Button>
          </Form>
         </>
    )
  }


}

export default BeastForm;