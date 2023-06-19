import React from 'react'

const LiveChatComment = ({name, text}) => {
  return (
    <div className='flex rounded-md bg-slate-100 p-2 my-1'>
        <img className='h-8 cursor-pointer' alt='profileIcon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybh-Lunn-i5vO33H0T0RurYVvk9153H6k_A&usqp=CAU'/>
        <span className='px-2 font-bold'>{name}</span>
        <span>{text}</span>
    </div>
  )
}

export default LiveChatComment