export default class Invidious 
{
    constructor() 
    {
        if (Invidious._instance) 
        {
            return Invidious._instance
        }
		this.topUrl = 'https://y.com.cm/api/v1';
        Invidious._instance = this;
    }
	static getInstance()
	{
		new Invidious();
		return Invidious._instance;
	}
	selectVideo = (id, setVideoForPlayback) => 
	{
		fetch(this.topUrl+'/videos/'+id)
		.then(res => res.json())
		.then(
			(result) => {
				console.log(result);
				var formatStreams = result.formatStreams;
				var firstElement = formatStreams[formatStreams.length-1];
				var url = firstElement.url;
				setVideoForPlayback(url);
			},
			
			(error) => {
				setVideoForPlayback('');
			}
		)
	}
	search = (query, updateSearchResults) =>
	{
		fetch(this.topUrl+'/search?q='+query)
		.then(res => res.json())
		.then(
			(result) => {
				console.log(result);
				updateSearchResults(result);
			},
			(error) => {
				updateSearchResults([]);
			}
		)
	}
	
}