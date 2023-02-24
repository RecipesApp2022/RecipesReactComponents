import React from 'react'
import { TiContacts } from "react-icons/ti"

const InformationChef = ({ seller }) => {
  return (
    <div className='p-2'>
      <button className="flex items-center space-x-2 text-black text-xl font-semibold">
        <TiContacts className="text-main" />
        <span>Information</span>
      </button>
      <div className="mt-6 space-y-2">
        {
          seller?.phoneNumber &&
          <p>Phone: {seller?.phoneNumber}</p>
        }
        {
          seller?.instagram &&
          <p>Instagram: {seller?.instagram}</p>
        }
        {
          seller?.facebook &&
          <p>Facebook: {seller?.facebook}</p>
        }
        {
          seller?.whatsapp &&
          <p>Whatsapp: {seller?.whatsapp}</p>
        }
      </div>
    </div>
  )
}

export default InformationChef