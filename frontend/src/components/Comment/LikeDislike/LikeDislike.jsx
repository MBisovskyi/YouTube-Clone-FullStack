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
    let likes = await axios.get(
      `http://127.0.0.1:8000/api/comments/${props.commentId}/add_like/`
    );
    console.log(likes);
    setLikes(likes);

    let dislikes = await axios.get(
      `http://127.0.0.1:8000/api/comments/${props.commentId}/add_dislike/`
    );
    console.log(dislikes);
    setDislikes(dislikes);
  }

  return (
    <div>
      <div className="like-dislike-container">
        <button onClick={getLikesDislikes}>
          <img src={require("../LikeDislike/assets/thumb-up.png")} />
          <span>{likes}</span>
        </button>
        <button onClick={getLikesDislikes}>
          <img src={require("../LikeDislike/assets/thumb-down.png")} />
          <span>{dislikes}</span>
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default LikeDislike;
