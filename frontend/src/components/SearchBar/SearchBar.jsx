import React, { useState } from "react";
import axios from "axios";

const SearchBar = (props) => {
  const [entry, setEntry] = useState("");

  async function handleSubmit() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${entry}&key=AIzaSyAxjxWiZBA74SwI9dhRUEDPhMvbBmx1P5k
      &part=snippet`
    );
    props.setVideos(response.data.items);
    setEntry("");
  }

  return (
    <div>
      <label>
        Search Video
        <input
          type="text"
          value={entry}
          onChange={(event) => setEntry(event.target.value)}
        />
      </label>
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default SearchBar;
