import CommentForm from "./CommentForm/CommentForm";
import CommentList from "./CommentList/CommentList";
import "./Comment.css";

const Comment = (props) => {
  return (
    <div>
      <CommentForm />
      <CommentList />
    </div>
  );
};

export default Comment;
