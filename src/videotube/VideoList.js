
import React from 'react'

const VideoList = ({fetchedVideos,passSelectedVideo}) => {

  const handleClick=(videoId,videoInfo)=>{
    passSelectedVideo(videoId,videoInfo)
  }

  const videosDescription= fetchedVideos.map(({id,snippet})=>{
    return(
      <div onClick={()=>{handleClick(id.videoId,{description:snippet.description,title:snippet.title})}} key={id.videoId} className='d-flex my-3' style={{cursor:'pointer'}}>

          <img src={snippet.thumbnails
.medium.url} alt={snippet.description} style={{width:'40%'}}/>
          <p className='align-self-center ms-2' style={{fontWeight:'bold'}}>{snippet.title}</p>
          
      </div>
    )
  })

  return (
    <div>
      {videosDescription}
    </div>
  )
}

export default VideoList;