import React from 'react'

const VideoCard = ({item}) => {

    const {snippet, statistics} = item

    const {channelTitle, thumbnails, title} = snippet;

  return (
    <div className='shadow-lg rounded-lg p-2 m-4 w-72'>
        <img className='rounded-md h-42 w-66' alt='thumbnail' src={thumbnails.medium.url}/>
        <ul>
            <li className='font-bold'>{title.slice(0, 35)}...</li>
            <li className='font-light font-sans'>{channelTitle}</li>
            <li className='font-extralight font-sans'>{statistics.viewCount} views</li>
        </ul>
    </div>
  )
}

export default VideoCard