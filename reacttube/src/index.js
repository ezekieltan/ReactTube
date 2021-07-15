import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import VideoContainer from './components/VideoContainer';
//https://www.npmjs.com/package/youtube-stream-url

  
const element = <VideoContainer title="ReactTube"/>;

ReactDOM.render(element, document.getElementById("root"));
console.log(element);