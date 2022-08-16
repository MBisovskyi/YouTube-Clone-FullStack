import React, { useState, useEffect } from "react";
import axios from "axios";

const SearchBar = (props) => {
  const [entry, setEntry] = useState("");

  async function handleSubmit() {
    let response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?q=${entry}&key=AIzaSyAry76oSZiXa8xlzDNvABmRxNFReBReodk
      &part=snippet`
    );
    props.searchedVideos(response.data.items);
    setEntry("");
  }

  return (
    <div>
      <label>
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
