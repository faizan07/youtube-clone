import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEO_API} from '../utils/constants'
import VideoCard, { VideoCardRedBorder } from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addVideos } from '../utils/videoSlice';
import Error from './Error';


const VideoContainer = () => {

  //const [videos, setVideos] = useState([]);
  const videos = useSelector(store=>store.video.videoList);
  const [err, setErr] = useState(null);

   const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
  }, [])

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_VIDEO_API);
      if(!data.ok){
        throw new Error(data.status)
      }
      const json = await data.json();
      setErr(null);
      dispatch(addVideos(json.items));
    } catch (error) {
      console.log(error);
      setErr(error.message)
    }
  }

  return (
    <div className='flex flex-wrap'>
      {err && <Error message={err}/>}
      {videos[0] && <VideoCardRedBorder item={videos[0]} />}
      {videos[0] && videos.map((video, index) => {
        return <Link key={index} to={"/watch?v="+video.id}><VideoCard item={video} /></Link>
      })}
    </div>
  )
}

export default VideoContainer