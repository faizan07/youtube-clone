import React, { useEffect, useState } from "react";
import LiveChatComment from "./LiveChatComment";
import { useDispatch, useSelector } from "react-redux";
import { addChat } from "../utils/chatSlice";

function generateRandomText(length) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
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
  const chatMessages = useSelector((store) => store.chat.message);
   const [chatText, setChatText] = useState("")

  useEffect(() => {
    const interval = setInterval(() => {
      //API call, then have the response from api and dispatch the data, for e.g below
      dispatch(
        addChat({
          name: generateRandomText(4),
          text: generateRandomText(20) + "😎",
        })
      );
    }, 500);

    return () => {
      console.log("end");
      clearInterval(interval);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addChat({
        name: 'Faizan',
        text: chatText
    }))
    setChatText("");
  }

  const handleChange = (e) => {
    setChatText(e.target.value)
  }

  return (
    <>
      <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
        {chatMessages.map((chat, i) => {
          return <LiveChatComment key={i} name={chat.name} text={chat.text} />;
        })}
      </div>
      <form className="w-full p-2 ml-2 border border-black" onSubmit={(e)=>handleSubmit(e)}>
        <input className="px-2 w-96" value={chatText} onChange={(e)=>handleChange(e)} type="text"/>
        <button className="px-2 mx-2 bg-green-100" >Go</button>
      </form>
    </>
  );
};

export default LiveChat;
