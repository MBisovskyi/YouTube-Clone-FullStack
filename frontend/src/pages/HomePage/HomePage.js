import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function getVideos() {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=manunited&key=AIzaSyAry76oSZiXa8xlzDNvABmRxNFReBReodk
        &part=snippet`
      );
      setVideos(response.data.items);
    }
    getVideos();
  }, [token]);

  return (
    <div>
      <SearchBar searchedVideos={setVideos} />
      <p>Welcome {user.username}!</p>
      <div>
        {videos.map(function (vid) {
          return (
            <div key={vid.id.videoId}>
              <div>{vid.snippet.title}</div>
              <iframe
                id="ytplayer"
                type="text/html"
                width="640"
                height="360"
                src={`https://www.youtube.com/embed/${vid.id.videoId}`}
                frameBorder="0"
              ></iframe>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
