import React from "react";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Comment from "../../components/Comment/Comment";
import useAuth from "../../hooks/useAuth";



const VideoPage = (props) => {
  const [user, token] = useAuth()
  return (
    <div>
      <VideoPlayer />
      <RelatedVideos />
      <Comment username={user.username} />
    </div>
  );
};

export default VideoPage;
