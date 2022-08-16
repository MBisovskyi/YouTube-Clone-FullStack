import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import SearchBar from "../../components/SearchBar/SearchBar";

const HomePage = (props) => {
  // The "user" value from this Hook contains the decoded logged in user information (username, first name, id)
  // The "token" value is the JWT token that you will send in the header of any request requiring authentication
  //TODO: Add an AddCars Page to add a car for a logged in user's garage
  const [user, token] = useAuth();
  const [videos, setVideos] = useState([]);
  // const [entry,setEntry] = useState('')

  useEffect(() => {
    async function getVideos () {
      let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=manunited&key=AIzaSyBZj6DOul-OAlEnTEeaL-ivV1zt5o2Ta90&part=snippet`);
      setVideos(response.data.items)
    }; getVideos()}, 
  [token]);
return (
  <div>
    <SearchBar parentEntries={props.entry}/>
    <p>Welcome {user.username}!</p> 
    <div>
      {videos.map(function(vid){
        return (
          <div>
            <div key={vid.id.videoId}>{vid.snippet.title}</div>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
            src={`https://www.youtube.com/embed/${vid.id.videoId}`}

            frameborder="0"></iframe>
          </div>
        );
      })}
    </div>
  </div>
)
}

export default HomePage;
