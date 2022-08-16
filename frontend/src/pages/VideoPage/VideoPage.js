import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link } from "react-router-dom";

const VideoPage = (props) => {
  const [video, setVideo] = useState();

  useEffect(() => {
    displayVideo();
  }, []);

  async function displayVideo() {
    debugger;
    let response = await axios.get(
      `https://www.youtube.com/embed/${props.state.id}`
    );
    setVideo(response.data.items);
  }
  return (
    <div>
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${video.id.videoId}`}
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default VideoPage;
