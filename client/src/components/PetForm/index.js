import React, { Component } from 'react';
import { Button, Form, Select} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class PetForm extends Component {
  state = {
    pet: ""
  }

  // handleChange = (e, { value }) => this.setState({ value })

  handleSubmit = () => {
    alert(`You want a ${this.state.pet}`);
  }

  // getting the value from a semantic ui react form dropdown:  https://stackoverflow.com/questions/49248560/semantic-ui-react-setting-dropdown-value-to-state
  handleDropdown = (event, results) => {
    this.setState({pet: results.value});
  }

  render() {

    // this will be our pet options
    const options = [
      { key: 'ex1', text: 'Example 1', value: 'Example 1' },
      { key: 'ex2', text: 'Example 2', value: 'Example 2' },
    ];

    return (
      <Form>
        <Form.Group widths='equal'>
          
          <Form.Field
            placeholder='Select a Pet'
            name='Type of Pet'
            label='Type of Pet'
            control={Select}
            fluid
            selection
            options={options}
            onChange={this.handleDropdown}
          />
          <Form.Input fluid label='Zipcode' placeholder='Zipcode' />
        </Form.Group>
        
        <Form.Field control={Button} onClick={this.handleSubmit}>Submit</Form.Field>
      </Form>
    )
  }
}

export default PetForm;

// notes for the drop down
// for each pet (create a pet array), create an option that contains the value and an id