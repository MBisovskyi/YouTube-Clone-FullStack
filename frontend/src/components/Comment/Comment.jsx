import CommentForm from "./CommentForm/CommentForm";
import CommentList from "./CommentList/CommentList";

const Comment = (props) => {
    return ( 
        <div>
            <CommentForm username={props.username}/>
            <CommentList />
        </div>
     );
}
 
export default Comment;