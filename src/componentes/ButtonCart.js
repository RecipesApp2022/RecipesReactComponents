import React from 'react'
import {BsFillCartPlusFill} from 'react-icons/bs'

const ButtonCart = () => {
  return (
    <button
className="bg-main  p-2 mb-2 mt-2 flex items-center rounded-xl text-white font-semibold hover:bg-main-light">
 <BsFillCartPlusFill/> 
     <p className='text-base ml-2 mr-2'>Add to Cart</p>
</button>
  )
}

export default ButtonCart