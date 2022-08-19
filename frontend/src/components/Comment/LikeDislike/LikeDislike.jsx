import { useEffect, useState } from "react";
import "./LikeDislike.css";
import axios from "axios";

const LikeDislike = (props) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);

  useEffect(() => {
    getLikesDislikes();
  }, []);

  async function getLikesDislikes() {
    let response = await axios.get(
      `http://127.0.0.1:8000/api/comments/likes_dislikes/${props.commentId}/`
    );
    setLikes(response.data.likes);
    setDislikes(response.data.dislikes);
    console.log(response.data.likes, response.data.dislikes);
  }

  async function addLike() {
    let likes = await axios.patch(
      `http://127.0.0.1:8000/api/comments/add_like/${props.commentId}/`
    );
    console.log(likes.data);
    setLikes(likes.data);
    getLikesDislikes();
  }

  async function addDislike() {
    let dislikes = await axios.patch(
      `http://127.0.0.1:8000/api/comments/add_dislike/${props.commentId}/`
    );
    console.log(dislikes.data);
    setDislikes(dislikes.data);
    getLikesDislikes();
  }

  return (
    <div>
      <div className="like-dislike-container">
        <button onClick={addLike}>
          <img src={require("../LikeDislike/assets/thumb-up.png")} />
          {likes}
        </button>
        <button onClick={addDislike}>
          <img src={require("../LikeDislike/assets/thumb-down.png")} />
          {dislikes}
        </button>
      </div>
      <div></div>
    </div>
  );
};
export default LikeDislike;
