import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    if(!isMenuOpen) return null;

  return (
    <div className='p-5 w-48 shadow-lg'>
        <div className='sticky top-16'>
        <ul>
            <li className='font-bold'><Link to='/'>Home</Link></li>
            <li>Shorts</li>
            <li>Subscription</li>
            <li>Originals</li>
            <li>YouTube Music</li>
        </ul>
        <ul className='pt-5'>
            <li className='font-bold'>Library</li>
            <li>History</li>
            <li>Watch Later</li>
        </ul>
        <ul className='pt-5'>
            <li className='font-bold'>Trending</li>
            <li>Shopping</li>
            <li>Live</li>
        </ul>
        </div>
    </div>
  )
}

export default Sidebar