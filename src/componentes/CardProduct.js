import React from 'react'
import lasagna from '../assets/pasticho.png'
const CardProduct = ({title,food}) => {
  return (
    <div>
      <p className='text-main ml-2'>{title}</p>
    <div className='md:flex grid mt-2 mb-20'>
        <img src={lasagna} alt="" className='rounded-lg shadow' />
        <p className='md:mt-12 mt-2 ml-10 md:ml-6 flex'>{food}</p>
    </div>
    </div>
  )
}

export default CardProduct