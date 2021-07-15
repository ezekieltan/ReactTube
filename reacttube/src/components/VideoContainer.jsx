import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import ReactPlayer from 'react-player'
import VideoLister from './VideoLister'
import SearchBox from './SearchBox'
import Invidious from './Invidious';
import VideoPlaybackRateDropdown from './VideoPlaybackRateDropdown';
import 'react-dropdown/style.css';
import { Container, Row, Col } from 'react-bootstrap';
export default class VideoContainer extends React.Component {
	player = {}
	state = {
		currentSearchResults:[],
		videoPlayerControls:
		{
			muted:false,
			playing:false,
			controls:true,
			playbackRate: 1,
			width:'100%',
			height:'100%',
			url:''
		},
		playbackSpeeds:[0.25,0.5,0.75,1,1.25,1.5,1.75,2,2.25,2.5,2.75,3]
		
	}
	
    componentDidMount() {
        document.title = this.props.title
    }
	handlePlay = () => 
	{
		var temp = this.state.videoPlayerControls;
		temp.playing = !temp.playing;
		this.setState({videoPlayerControls:temp});
	}
	setUrl = (url) =>
	{
		var temp = this.state.videoPlayerControls;
		temp.url = url;
		this.setState({videoPlayerControls:temp});
	}
	setPlaybackSpeed = (speed) =>
	{
		console.log('playback speed set to '+speed);
		var temp = this.state.videoPlayerControls;
		temp.playbackRate = speed;
		this.setState({videoPlayerControls:temp});
	}
	setVideoForPlayback = (url) =>
	{
		this.setUrl(url);
	}
	onSelectVideo = (id) =>
	{
		Invidious.getInstance().selectVideo(id, this.setVideoForPlayback);
	}
	updateSearchResults = (result) =>
	{
		this.setState({currentSearchResults: result});
	}
	onSearch = (query) =>
	{
		Invidious.getInstance().search(query, this.updateSearchResults);
	}
	render() {
        return (
			<Container>
				<Row>
					<Col lg='4' xl='3'>
						<SearchBox onSearch={this.onSearch} />
						<VideoLister videos ={this.state.currentSearchResults} clickEvent={this.onSelectVideo}/>
					</Col>
					<Col lg='8' xl='9'>
						<div>
							<ReactPlayer {...this.state.videoPlayerControls}/>
						</div>
						<VideoPlaybackRateDropdown speeds={this.state.playbackSpeeds} onChangeSpeed={this.setPlaybackSpeed} />
					</Col>
				</Row>
			</Container>
        );
    }
}