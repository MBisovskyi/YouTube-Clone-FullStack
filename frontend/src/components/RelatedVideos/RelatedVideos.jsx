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
      `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=AIzaSyAry76oSZiXa8xlzDNvABmRxNFReBReodk&part=snippet`
    );
    console.log(response.data.items);
    setRelatedVideos(response.data.items);
  }

  async function clickHandle() {
    getRelatedVideos(videoId);
  }

  return (
    <div>
      <div>
        {relatedVideos.map(function (vid, index) {
          {
            if (vid.snippet && vid.id.videoId) {
              return (
                <div key={index}>
                  <p>{vid.snippet.title}</p>
                  <Link onClick={clickHandle} to={`/video=${vid.id.videoId}`}>
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
