import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
export default class VideoPlaybackRateDropdown extends React.Component {

    state = 
    {
        speed:1
    }
	changeSpeed = (s) =>
	{
		this.setState({speed:s});
		this.props.onChangeSpeed(s);
	}
    render() 
    {
        return(
			<DropdownButton title={this.state.speed} onSelect = {this.changeSpeed}>
				{
					this.props.speeds.map(
						s => <Dropdown.Item eventKey={s}>{s}</Dropdown.Item>
					)
				}
			</DropdownButton>
        );
    }
}