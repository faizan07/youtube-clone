import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/registerSlice';

const Registration = () => {

    const firstNameRef = useRef('');
    const lasttNameRef = useRef('');
    const emailRef = useRef('');
    const formRef = useRef();

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser({
            firstName: firstNameRef.current.value,
            lastName: lasttNameRef.current.value,
            email: emailRef.current.value
        }))
        formRef.current.reset();
    }

    console.log("Rendering.......")

  return (
    <>
    <div className='w-full max-w-xs'>
        <form ref={formRef} onSubmit={(e)=>handleSubmit(e)} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <label>First name</label>
            <input ref={firstNameRef} className=' w-full border border-gray-400 ml-2 rounded-md' type='text'/>
            <label>Last name</label>
            <input ref={lasttNameRef} className='w-full border border-gray-400 ml-2 rounded-md' type='text'/>
            <label>Email</label>
            <input ref={emailRef} className=' w-full border border-gray-400 ml-2 rounded-md' type='email'/>
                <button className='p-1 mt-4 bg-green-500 rounded-md'>Register</button> 
        </form>
    </div>
    <div className='px-8 pt-6 pb-8 mb-4'>
        {firstNameRef.current.value}
    </div>
    </>
  )
}

export default Registration