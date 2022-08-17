import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const VideoPlayer = (props) => {
  const { videoId } = useParams();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getSingleVideo();
  }, []);

  async function getSingleVideo() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=AIzaSyAxjxWiZBA74SwI9dhRUEDPhMvbBmx1P5k
      `
    );
    setVideos(response.data.items);
    console.log(response.data.items);
  }

  return (
    <div>
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
      ></iframe>
      {videos.map(function (video, index) {
        return (
          <div key={index}>
            <strong>{video.snippet.title}</strong>
            <p>{video.snippet.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default VideoPlayer;
