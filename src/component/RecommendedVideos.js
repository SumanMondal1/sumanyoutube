import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
import VideoPlayer from "./VideoPlayer";
import ReactPlayer from 'react-player'

function RecommendedVideos() {
  return (
    <div className="recommendedVideos">
      <h2>Recommended</h2>
      <div className="recommendedVideos_videos">
        <VideoCard
          title="My dream to be a good web developer"
          views="899K Views"
          timestamp="2days ago"
          channelImage="https://media.licdn.com/dms/image/C5603AQEeYoBDS3pjXw/profile-displayphoto-shrink_200_200/0/1637690792670?e=1678924800&v=beta&t=1VGfymKGipHkhyTCX8_NsvNGBxoqLnG3wuUhLYMJHEM"
          channel="Suman Mondal"
          image="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
        />
        <VideoCard
          title="I am suman mondal"
          views="899K Views"
          timestamp="2days ago"
          channelImage="https://media.licdn.com/dms/image/C5603AQEeYoBDS3pjXw/profile-displayphoto-shrink_200_200/0/1637690792670?e=1678924800&v=beta&t=1VGfymKGipHkhyTCX8_NsvNGBxoqLnG3wuUhLYMJHEM"
          channel="Suman Mondal"
          image="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg"
        />
        <VideoCard
          title="I am suman mondal"
          views="899K Views"
          timestamp="2days ago"
          channelImage="https://media.licdn.com/dms/image/C5603AQEeYoBDS3pjXw/profile-displayphoto-shrink_200_200/0/1637690792670?e=1678924800&v=beta&t=1VGfymKGipHkhyTCX8_NsvNGBxoqLnG3wuUhLYMJHEM"
          channel="Suman Mondal"
          image="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055__340.jpg"
        />
        <VideoCard
          title="I am suman mondal"
          views="899K Views"
          timestamp="2days ago"
          channelImage="https://media.licdn.com/dms/image/C5603AQEeYoBDS3pjXw/profile-displayphoto-shrink_200_200/0/1637690792670?e=1678924800&v=beta&t=1VGfymKGipHkhyTCX8_NsvNGBxoqLnG3wuUhLYMJHEM"
          channel="Suman Mondal"
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
        />
        <VideoCard
          title="I am suman mondal"
          views="899K Views"
          timestamp="2days ago"
          channelImage="https://media.licdn.com/dms/image/C5603AQEeYoBDS3pjXw/profile-displayphoto-shrink_200_200/0/1637690792670?e=1678924800&v=beta&t=1VGfymKGipHkhyTCX8_NsvNGBxoqLnG3wuUhLYMJHEM"
          channel="Suman Mondal"
          image="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg"
        />
        <VideoCard
          title="I am suman mondal"
          views="899K Views"
          timestamp="2days ago"
          channelImage="https://media.licdn.com/dms/image/C5603AQEeYoBDS3pjXw/profile-displayphoto-shrink_200_200/0/1637690792670?e=1678924800&v=beta&t=1VGfymKGipHkhyTCX8_NsvNGBxoqLnG3wuUhLYMJHEM"
          channel="Suman Mondal"
          image="https://cdn.pixabay.com/photo/2013/04/04/12/34/mountains-100367__340.jpg"
        />
        <VideoCard
          title="Soumik is working in Geogo Techsolution"
          views="899K views"
          timestamp="2days ago"
          channelImage="https://media.licdn.com/dms/image/C5603AQEeYoBDS3pjXw/profile-displayphoto-shrink_200_200/0/1637690792670?e=1678924800&v=beta&t=1VGfymKGipHkhyTCX8_NsvNGBxoqLnG3wuUhLYMJHEM"
          channel="Suman Mondal"
          image="https://cdn.pixabay.com/photo/2012/03/01/00/55/flowers-19830_960_720.jpg"
        />
        <VideoCard
          title="I am suman mondal"
          views="899K Views"
          timestamp="2days ago"
          channelImage="https://media.licdn.com/dms/image/C5603AQEeYoBDS3pjXw/profile-displayphoto-shrink_200_200/0/1637690792670?e=1678924800&v=beta&t=1VGfymKGipHkhyTCX8_NsvNGBxoqLnG3wuUhLYMJHEM"
          channel="Suman Mondal"
          image="'https://youtu.be/u2NAuswnTKs?list=RDu2NAuswnTKs' "
        />
      </div>
      <div>
      <div>
    {/* <VideoPlayer 
     iframe ="https://www.youtube.com/u2NAuswnTKs.mp4"
    /> */}
    <ReactPlayer url='https://youtu.be/u2NAuswnTKs?list=RDu2NAuswnTKs' />
    </div>
      </div>
    </div>
  );
}

export default RecommendedVideos;
