import React from 'react'
import {AiOutlineClose, AiOutlineCheck} from 'react-icons/ai'
import {BsFillEmojiLaughingFill} from "react-icons/bs"


const Matches = () => {
  return (
    <div className="container flex justify-center space-x-8">
        <button className="bg-white rounded-full py-2 px-2 shadow-2xl text-xl recipe-btn"><AiOutlineClose className="text-red-500" /></button>
        <button className="bg-white rounded-full py-2 px-2 shadow-2xl text-xl recipe-btn"><BsFillEmojiLaughingFill className="text-yellow-300" /></button>
        <button className="bg-white rounded-full py-2 px-2 shadow-2xl text-xl recipe-btn"><AiOutlineCheck className="text-green-700	" /></button>

    </div>
  )
}

export default Matches