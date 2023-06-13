import React, { useEffect, useState } from 'react'
import {YOUTUBE_VIDEO_API} from '../utils/constants'
import VideoCard, { VideoCardRedBorder } from './VideoCard';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addVideos } from '../utils/videoSlice';


const VideoContainer = () => {

  //const [videos, setVideos] = useState([]);
  const videos = useSelector(store=>store.video.videoList);

   const dispatch = useDispatch();

  useEffect(() => {
    getVideos();
  }, [])

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    //setVideos(json.items);
    dispatch(addVideos(json.items));
  }

  return (
    <div className='flex flex-wrap'>
      {videos[0] && <VideoCardRedBorder item={videos[0]} />}
      {videos[0] && videos.map((video, index) => {
        return <Link key={index} to={"/watch?v="+video.id}><VideoCard item={video} /></Link>
      })}
    </div>
  )
}

export default VideoContainer