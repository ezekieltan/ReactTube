import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, InputGroup, FormControl } from 'react-bootstrap';

export default class SearchBox extends React.Component {
	state = {
		value:""
	}
	handleChange = (event) =>
	{
		this.setState({value: event.target.value});
	}
	handleSubmit = (event) =>
	{
		this.props.onSearch(this.state.value);
	}
	render() {
        return (
			<InputGroup>
            <FormControl 
				value={this.state.value}
				onChange={this.handleChange}
				/>
            <Button onClick={this.handleSubmit}>Search</Button>
            </InputGroup>
        );
    }
}