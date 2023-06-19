import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';
import CommentsContainer from './CommentsContainer';
import commentsData from '../utils/mockData_comments';
import LiveChat from './LiveChat';

const Video = () => {

    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();

    console.log(searchParams.get("v"));

    useEffect(() => {
        dispatch(closeMenu());
    }, [])

  return (
    <div className='px-5'>
        <div className='flex'>
        <iframe width="1000" height="500" src={`https://www.youtube.com/embed/${searchParams.get("v")}`}
        title="YouTube video player" 
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
        <LiveChat/>
        </div>
        <CommentsContainer data={commentsData}/>
    </div>
  )
}

export default Video