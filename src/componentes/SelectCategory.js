import React from 'react'
import Checkbox from './Checkbox'

const SelectCategory = ({ title }) => {
  return (
    <div className="flex ">
      <div className="justify-end form-check ml-2">
        <Checkbox className="mb-2 mt-2" />
      </div>
      <div className="flex ml-2 ">
        <p className='text-black'>{title}</p>
      </div>

    </div >
  )
}

export default SelectCategory