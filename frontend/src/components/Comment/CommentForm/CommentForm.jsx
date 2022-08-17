import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";

const CommentForm = (props) => {
  const [user, token] = useAuth();
  const { videoId } = useParams();
  const [text, setText] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    let addNew = {
      video_id: videoId,
      text: text,
    };
    await axios.post("http://127.0.0.1:8000/api/comments/", addNew, {
      headers: {
        Authorization: "Bearer " + token,
      },
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h3>Name: {props.username}</h3>
      </div>
      <div>
        <label>
          Comment: <br />
          <textarea
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          ></textarea>
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default CommentForm;
