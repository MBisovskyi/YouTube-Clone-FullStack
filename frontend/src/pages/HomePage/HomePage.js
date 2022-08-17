import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Link } from "react-router-dom";

const HomePage = () => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function getVideos() {
      let response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search?q=devcodecamp&key=AIzaSyAxjxWiZBA74SwI9dhRUEDPhMvbBmx1P5k

        &part=snippet`
      );
      setVideos(response.data.items);
      console.log(response.data.items);
    }
    getVideos();
  }, [token]);

  return (
    <div>
      <SearchBar setVideos={setVideos} />
      <p>Welcome {user.username}!</p>
      <div>
        {videos.map(function (vid, index) {
          {
            if (vid.snippet && vid.id.videoId) {
              return (
                <div key={index}>
                  <div>{vid.snippet.title}</div>
                  <Link to={`/video=${vid.id.videoId}`}>
                    <img src={vid.snippet.thumbnails.high.url}></img>
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

export default HomePage;
