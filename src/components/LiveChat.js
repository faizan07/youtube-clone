import React, { useEffect } from 'react'
import LiveChatComment from './LiveChatComment'
import { useDispatch, useSelector } from 'react-redux'
import { addChat } from '../utils/chatSlice';

function generateRandomText(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

const LiveChat = () => {

    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.message);

    useEffect(() => {
        const interval = setInterval(() => {
            //API call, then have the response from api and dispatch the data, for e.g below
            dispatch(addChat({
                name: generateRandomText(4),
                text: generateRandomText(20) + "😎"
            }))
        }, 500)

        return () => {
            console.log("end");
            clearInterval(interval);
        }
    }, [])

  return (
    <div className='p-2 ml-3 bg-slate-50 h-[500px] w-[450px] rounded-lg overflow-y-scroll flex flex-col-reverse'>
        {chatMessages.map((chat, i) => {
            return <LiveChatComment key={i} name={chat.name} text={chat.text}/>
        })}
    </div>
  )
}

export default LiveChat