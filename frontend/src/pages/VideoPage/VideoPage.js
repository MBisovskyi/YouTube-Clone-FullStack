import React from "react";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";
import Comment from "../../components/Comment/Comment";

const VideoPage = (props) => {
  return (
    <div>
      <VideoPlayer />
      <RelatedVideos />
      <Comment />
    </div>
  );
};

export default VideoPage;
