import React, { useEffect, useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import { useParams } from "react-router-dom";
import axios from "axios";

const VideoPage = (props) => {
  const { videoId } = useParams();
  const [video, setVideo] = useState([]);

  useEffect(() => {
    // getSingleVideo();
  }, []);

  // async function getSingleVideo() {
  //   debugger;
  //   let response = await axios.get(
  //     `https://www.googleapis.com/youtube/v3/videos?id=${videoId}`
  //   );
  //   setVideo(response.data);
  //   console.log(response.data);
  // }

  return (
    <div>
      <SearchBar />
      <iframe
        id="ytplayer"
        type="text/html"
        width="640"
        height="360"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
      ></iframe>
      {/* <p>{video.snippet.description}</p> */}
    </div>
  );
};

export default VideoPage;
