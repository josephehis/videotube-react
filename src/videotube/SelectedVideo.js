
import React from 'react'

const SelectedVideo = ({videoId, videoInfo}) => {

 const videoSrc= `https://www.youtube.com/embed/${videoId}?autoplay=1`

  return (
    <div style={{background:'black'}}>

      <iframe   title={videoInfo.description} src={videoSrc} loading='lazy' style={{width:'100%',height:"320px", marginBottom:'0',}}></iframe>

      <div className='mb-2 p-1 bg-secondary text-light' style={{border:'solid thin grey'}}>

        <h4>{videoInfo.title}</h4>
        <p>{videoInfo.description}</p>

      </div>

    </div>
  )
}

export default SelectedVideo;
