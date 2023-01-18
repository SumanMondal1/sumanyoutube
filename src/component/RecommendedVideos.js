import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
import VideoPlayer from "./VideoPlayer";
import ReactPlayer from 'react-player'

function RecommendedVideos() {
  const videos = [{id: 1, title: "ewdewefwed", url: "https://www.youtube.com/watch?v=eAz4MDzwg5A"}, {id: 2, title: "efewf e wdewefwed", url: "https://www.youtube.com/watch?v=RRJDaX0Dutk"}, {id: 3, title: "ewdewef ewd wed", url: "https://www.youtube.com/watch?v=lLeZ8Cr2YVM"}]
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos_videos">
        {videos.map(v => (
          <VideoCard
            key={v.id}
            title={v.title}
            views="899K Views"
            timestamp="2days ago"
            channelImage="https://media.licdn.com/dms/image/C5603AQEeYoBDS3pjXw/profile-displayphoto-shrink_200_200/0/1637690792670?e=1678924800&v=beta&t=1VGfymKGipHkhyTCX8_NsvNGBxoqLnG3wuUhLYMJHEM"
            channel="Suman Mondal"
            image="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
            id={v.id}
          />
        ))}



      </div>
      <div>
        <div>


        </div>
      </div>
    </div>
  );
}

export default RecommendedVideos;
