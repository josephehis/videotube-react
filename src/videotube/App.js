
import React,{useEffect, useState} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';

import InputComponent from './InputComponent';
import VideoList from './VideoList';
import SelectedVideo from './SelectedVideo';

// AIzaSyC_mBtFQS5k9TwG2QOzUUpzhxRJNEE4dx8
// https://www.googleapis.com/youtube/v3/search

const App = () => {

  const [videos, setVideos]= useState([]);

  const [selectedVideoId, setselectedVideoId]= useState('')

  const [selectedVideoInfo,setSelectedVideoTitle]= useState({});

  const handleSelectedVideo=(videoId,videoInfo)=>{

    setselectedVideoId(videoId)
    setSelectedVideoTitle(videoInfo)
  }

  const fetchVideos= async (searchTerm)=>{

      try{
        const videosDetails= await  axios.get('https://www.googleapis.com/youtube/v3/search',{
          params:{
            part:'snippet',
            q:searchTerm,
            maxResults:5,
            key:'AIzaSyC_mBtFQS5k9TwG2QOzUUpzhxRJNEE4dx8'
          }
        })

        setVideos(videosDetails.data.items);
      }
      catch(error){
          console.log(error,'error')
      }
  }

  return (
    <div className='d-flex flex-column align-items-center '>
        <InputComponent getUserInput={fetchVideos}/>
       <div className='my-4 position-relative pe-2'
       style={{height:'700px',overflowY:'scroll',width:'50%'}}>
          <div className='position-sticky' style={{top:"0px"}} >
            <SelectedVideo videoId={selectedVideoId} videoInfo={selectedVideoInfo}/>
          </div>
          <div>
            <VideoList fetchedVideos={videos} passSelectedVideo={handleSelectedVideo}/>
          </div>
       </div>
    </div>
  )
}

export default App; 
