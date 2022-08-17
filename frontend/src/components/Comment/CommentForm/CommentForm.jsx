import axios from 'axios';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const CommentForm = (props) => {
    const { videoId } = useParams();
    const [text, setText] = useState('');

    async function handleSubmit(event){
        event.preventDefault();
        let addNew = {
            video_id: videoId,
            text: text,
        }
        props.addNew(addNew)
    await axios.post("http://127.0.0.1:8000/api/comments/", addNew)       
};

    return ( 
        <div>
            <div>
                <h3>Name: {props.username}</h3>
            </div>
            <div>
                <label>Comment: <br/>
                    <textarea rows="5" value={text} onChange={(event) => setText(event.target.value)}></textarea>
                </label>
            </div>
            <button type='submit' onClick={handleSubmit}>Submit</button>
        </div>
     );
}
 
export default CommentForm;