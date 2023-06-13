import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { YOUTUBE_SEARCH_QUERY, YOUTUBE_SEARCH_SUGGESTION_API } from '../utils/constants';
import { cacheSlice } from '../utils/searchSlice';
import { addVideos } from '../utils/videoSlice';

const Header = () => {

    const [searchText, setSearchtext] = useState("");
    const [searchSuggestion, setSearchSuggestion] = useState([])
    const [showSuggestion, setShowSuggestion] = useState(false);

    const dispatch = useDispatch();
    const searchCache = useSelector(store => store.search);

    const toggleMenuHandle = () => {
        dispatch(toggleMenu());
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            if(searchCache[searchText]){
                setSearchSuggestion(searchCache[searchText])
            }
            else{
                getSearchSuggestion();
            }
        }, 200);
        /**
         * to decline all the API calls we will use unmount so that if any keystroke is pressed before
         * the timer expires(and the api call is made via the getSearchSuggestion()) that timer itself is cleared.
         */
        return () => {
            clearTimeout(timer);
        }

    }, [searchText]);

    const getSearchSuggestion = async () => {
        const data = await fetch(YOUTUBE_SEARCH_SUGGESTION_API+searchText);
        const json = await data.json();
        setSearchSuggestion(json[1])
        dispatch(cacheSlice({
            [searchText]: json[1],
        }));
    }

    const handleSuggestionClick = async (val) => {

        setSearchtext(val);
        setShowSuggestion(false);
        //API call
        const data = await fetch(YOUTUBE_SEARCH_QUERY + val);
        const json = await data.json();
        dispatch(addVideos(json.items));
    }

    const searchButtonClicked = () => {
        console.log("btn btn")
    }

  return (
    <div className='grid grid-flow-col shadow-lg p-2 m-2 sticky top-0 bg-white'>
        <div className='col-span-1 flex'>
            <img className='h-7 cursor-pointer' alt='hamburger' onClick={() => toggleMenuHandle()} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJD9Ks9HQlPD-Rpraa6krZtrX2yleg-hXwfQ&usqp=CAU'/>
            <a href='/'><img className='h-7 px-3' alt='logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHMUb8U4VeW2y-RflH7U7Yp0tsx1hJv0PwQ&usqp=CAU"/></a>
        </div>
        <div className='col-span-10 px-10'>
            <div>
                <input value={searchText} onFocus={()=>setShowSuggestion(true)}
                
                onChange={(e)=>setSearchtext(e.target.value)} 
                className='border border-gray-200 w-96 rounded-l-full px-2' type='text' placeholder='Search'/>
                <button onClick={()=>searchButtonClicked()} className='bg-gray-300 w-16 rounded-r-full'>🔍</button>
            </div>
            {showSuggestion && searchSuggestion.length>0 && <div className='fixed bg-white py-2 px-2 w-[24rem] shadow-lg rounded-lg border border-gray-100'>
                <ul>
                    {searchSuggestion.map((suggestionText)=>{
                        return <li onClick={()=>handleSuggestionClick(suggestionText)} className='hover:bg-gray-300' key={suggestionText} >{suggestionText}</li>
                    })}
                </ul>
            </div> }
        </div>
        <div className='col-span-1'>
            <img className='h-8 cursor-pointer' alt='profileIcon' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTybh-Lunn-i5vO33H0T0RurYVvk9153H6k_A&usqp=CAU'/>
        </div>
    </div>
  )
}

export default Header