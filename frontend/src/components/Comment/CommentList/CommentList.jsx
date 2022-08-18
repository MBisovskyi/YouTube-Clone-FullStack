import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import "./CommentList.css";

const CommentList = (props) => {
  const { videoId } = useParams();
  const [comments, setComments] = useState([]);

  useEffect(() => {
    displayComment();
  });

  async function displayComment() {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/comments/all/${videoId}/`
    );
    setComments(response.data);
  }

  return (
    <div>
      <div>
        {comments.map(function (comment, index) {
          return (
            <div key={index}>
              <p>Name: {comment.user.username}</p>
              <div>
                Comment:
                <br />
                <p>{comment.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CommentList;
