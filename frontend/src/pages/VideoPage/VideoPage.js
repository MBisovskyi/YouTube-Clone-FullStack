import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RelatedVideos from "../../components/RelatedVideos/RelatedVideos";
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const VideoPage = (props) => {
  return (
    <div>
      <VideoPlayer />
      <RelatedVideos />
    </div>
  );
};

export default VideoPage;
