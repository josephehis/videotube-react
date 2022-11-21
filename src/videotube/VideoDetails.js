

import React from 'react'

const VideoDetails = ({videoInfo,videoId}) => {
  return (
    <div className='d-flex'>
          <img src={videoInfo.thumbnails
.medium.url} alt={videoInfo.description}/>
          <p className='align-self-center'>{videoInfo.description}</p>
      </div>
  )
}

export default VideoDetails;
