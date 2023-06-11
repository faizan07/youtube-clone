import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';

const Header = () => {
    const dispatch = useDispatch();

    const toggleMenuHandle = () => {
        dispatch(toggleMenu());
    }

  return (
    <div className='grid grid-flow-col shadow-lg p-2 m-2 sticky top-0 bg-white'>
        <div className='col-span-1 flex'>
            <img className='h-7 cursor-pointer' onClick={() => toggleMenuHandle()} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJD9Ks9HQlPD-Rpraa6krZtrX2yleg-hXwfQ&usqp=CAU'/>
            <a href='/'><img className='h-7 px-3' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&usqp=CAU"/></a>
        </div>
        <div className='col-span-10'>
            <input className='border border-gray-200 w-96 rounded-l-full px-2' type='text' placeholder='Search'/>
            <button className='bg-gray-300 w-16 rounded-r-full'>🔍</button>
        </div>
        <div className='col-span-1'>
            <img className='h-8 cursor-pointer' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybh-Lunn-i5vO33H0T0RurYVvk9153H6k_A&usqp=CAU'/>
        </div>
    </div>
  )
}

export default Header