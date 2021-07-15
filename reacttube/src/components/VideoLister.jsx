import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { ListGroup } from 'react-bootstrap';

export default class VideoLister extends React.Component {
	state = {
		
	}
	
	onSelectVideo = (id) =>
	{
		this.props.clickEvent(id);
	}
	render() {
        return (
			<ListGroup onSelect = {this.onSelectVideo}>
				{
					this.props.videos.map
					(
						video => <ListGroup.Item action eventKey={video.videoId}>{video.title}</ListGroup.Item>
					)
				}
			</ListGroup>
        );
    }
}