import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "./RelatedVideos.css";

const RelatedVideos = (props) => {
  const { videoId } = useParams();
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    getRelatedVideos(videoId);
  }, []);

  async function getRelatedVideos(videoId) {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=AIzaSyAxjxWiZBA74SwI9dhRUEDPhMvbBmx1P5k&part=snippet`
    );
    console.log(response.data.items);
    setRelatedVideos(response.data.items);
  }

  async function clickHandle() {
    getRelatedVideos(videoId);
  }

  return (
    <div>
      <div className="relatedvideo-item">
        {relatedVideos.map(function (vid, index) {
          {
            if (vid.snippet && vid.id.videoId) {
              return (
                <div key={index} className='eachrelatedvid'>
                  <Link onClick={clickHandle} to={`/video=${vid.id.videoId}`}>
                    <p className="title">{vid.snippet.title}</p>
                    <img src={vid.snippet.thumbnails.medium.url}></img>
                  </Link>
                </div>
              );
            }
          }
        })}
      </div>
    </div>
  );
};

export default RelatedVideos;
