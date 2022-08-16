import React, { useState, useEffect } from 'react';

const SearchBar = (props) => {
    const [entry,setEntry] = useState('')

    return (
        <div>
            <label>
                <input type="text" value={entry} onChange={(event) => setEntry(event.target.value)}/>
            </label>
            <button onClick={setEntry}>Search</button>
        </div>
      );
}
 
export default SearchBar;