
import React from 'react'

function VideoPlayer({iframe}) {
  return (
    <div>
        <video controls>
            <source src={iframe} type="video/mp4" />
        </video>
    </div>
  )
}

export default VideoPlayer;