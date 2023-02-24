import React from 'react'
import profile from "../assets/profile.png"
import ButtonChange from "../componentes/ButtonChange";


const FormAccount = ({ sourseimg, textname, textphone, textaccount, textbutton }) => {
  return (
    <form>
      <div className="p-2 md:grid md:grid-cols-2 gap-4 mt-6">
        <div className="flex items-center space-x-4">
          <img src={profile} alt="" className="w-20" />
          <label
            htmlFor="inputfile"
            className="bg-main md:flex justify-center items-center hover:bg-main-light text-white font-semibold text-center px-3 py-2 rounded-lg cursor-pointer"
          >
            {sourseimg}
          </label>
          <input type="file" className="hidden" id="inputfile" />
        </div>
        <div>
          <label
            className="mt-4 block text-gray-600 font-bold md:text-xl"
            htmlFor="text"
          >
            {textname}
          </label>
          <input
            type="text"
            className="md:mt-6 md:text-xl text-base border rounded-lg md:w-80 w-full h-10 block"
            id="text"
            placeholder='Name'
          />


        </div>
        <div>
          <label
            className="mt-4 block text-gray-600 font-bold md:text-xl"
            htmlFor="number"
          >
            {textphone}
          </label>
          <input
            type="number"
            className="md:mt-6 md:text-xl text-base border rounded-lg  md:w-80 w-full h-10 block"
            id="number"
            placeholder='00000000'
          />
        </div>
        <div>
          <label
            htmlFor="user"
            className="mt-4 block text-gray-600 font-bold md:text-xl">
            {textaccount}
          </label>
          <input
            type="text"
            className="md:mt-6 md:text-xl text-base border rounded-lg md:w-80 w-full h-10 block"
            id="user"
            placeholder='@xxxxxxxxxx'
          />
        </div>
      </div>
      <div className="flex justify-center md:justify-end mt-4">
        <ButtonChange />
      </div>
    </form>
  )
}

export default FormAccount