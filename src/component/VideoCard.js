import React from 'react';
import Avatar from '@mui/material/Avatar';
import "./VideoCard.css";
import { Link } from 'react-router-dom';

function VideoCard({ image, title, channel, views, timestamp, channelImage, id}) {
  console.log(id)
  return (
    <div className='videoCard'>
        <Link to={`${id}`}>
          <img className='videoCard_thumbnail' src={image} alt=""/>
        </Link>
        <div className="video_info">
        <Avatar className="videoCard_avatar" alt={channel} src={channelImage}/>
        <div className="video_text">
            <h4>{title}</h4>
            <p>{channel}</p>
            <p>{views} . {timestamp}</p>
        </div>
        </div>
    </div>
  )
}

export default VideoCard;