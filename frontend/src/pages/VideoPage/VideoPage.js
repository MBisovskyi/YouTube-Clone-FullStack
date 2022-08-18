import React from "react";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Comment from "../../components/Comment/Comment";
import useAuth from "../../hooks/useAuth";
import './VideoPage.css'


const VideoPage = (props) => {
  const [user, token] = useAuth()
  return (
    <div className="videopage">
      <div className="videoplayer-container">
        <VideoPlayer />
        <Comment username={user.username} />
      </div>
      <div className="relatedvids-container">
        <RelatedVideos />
      </div>
    </div>
  );
};

export default VideoPage;
