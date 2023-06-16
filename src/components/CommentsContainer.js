import React from 'react'

const Comments = ({commentObj}) => {
    return(<div className=' py-2  bg-slate-100 shadow-sm rounded-lg'>
        <div className='flex'>
        <img className='w-7 h-7 mx-1' alt='commentProfilePic' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybh-Lunn-i5vO33H0T0RurYVvk9153H6k_A&usqp=CAU'/>
        <p className='px-2 font-bold'>{commentObj.name}</p>
        </div>
        <p>{commentObj.text}</p>
    </div>)
}

const CommentList = ({comments}) => {
    return(<div>
        {comments.map((val)=>{
            return (<div>
                    <Comments commentObj={val}/>
                    <div className='pl-2 ml-2 border border-l-black'><CommentList comments={val.replies}/></div>
                </div>)
        })}
    </div>)
}

const CommentsContainer = ({data}) => {
  return (<div className='py-2 w-[56rem]'>
    <h3>Comments</h3>
    <div className='p-1 m-1'><CommentList comments={data}/></div>
  </div>
    
  )
}

export default CommentsContainer