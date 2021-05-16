import React from "react";
import "./RecommendedVideos.css"
import VideoCard from "./VideoCard.js"

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos_videos">
        <VideoCard 
            title="Become a Web Developer is 10 minutes"
            views="2.3M Views"
            timestamp="3 days ago"
            channel="Dushyanth"
            channelImage="https://yt3.ggpht.com/yti/ANoDKi5DAX-f3nFjAW4AcjwX_APkv7-qaHoenKo1BVUIyA=s88-c-k-c0x00ffffff-no-rj-mo"
            image="https://images.unsplash.com/photo-1611223426643-fa293cb2efbc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
        />
      </div>
    </div>
  );
}

export default RecommendedVideos;
