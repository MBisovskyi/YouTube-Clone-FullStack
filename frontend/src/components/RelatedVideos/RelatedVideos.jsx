import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const RelatedVideos = (props) => {
  const { videoId } = useParams();
  const [relatedVideos, setRelatedVideos] = useState([]);

  useEffect(() => {
    async function getRelatedVideos() {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?relatedToVideoId=${videoId}&type=video&key=AIzaSyAxjxWiZBA74SwI9dhRUEDPhMvbBmx1P5k
        &part=snippet`
      );
      console.log(response.data.items);
      setRelatedVideos(response.data.items);
    }
    getRelatedVideos();
  }, []);

  return (
    <div>
      <div>
        {relatedVideos.map(function (vid, index) {
          {
            if (vid.snippet) {
              return (
                <div key={index}>
                  <strong>{vid.snippet.title}</strong>
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
