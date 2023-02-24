import React from 'react'
import Chefs from '../assets/chef-hat.png'
const Details = ({ level, categories, fitness, time, days, ingredients, number, price, hideprice = false }) => {
    return (
        <div>
            <div className='md:flex py-2 '>
                <p className="w-1/2">{level}</p>
                <div className='flex mt-1'>
                    <img className="w-6 h-6" src={Chefs} alt="chefs" />
                    <img className="ml-2 w-6 h-6" src={Chefs} alt="chefs" />
                    <img className="ml-2 w-6 h-6" src={Chefs} alt="chefs" />
                    <img className="ml-2 w-6 h-6" src={Chefs} alt="chefs" />
                </div>
            </div>
            <div className='md:flex py-2 '>
                <p className="md:w-1/2">{categories}</p>
                <p className="md:-1/2 mt-1 text-black">{fitness}</p>
                {!hideprice &&
                    <div><p className='text-main ml-4 font-semibold'>{price}</p></div>}
            </div>
            <div className='md:flex py-2 '>
                <p className="md:w-1/2">{time}</p>
                <p className="md:w-1/2 text-main underline">{days}</p>
            </div>
            <div className='md:flex py-2 '>
                <p className="w-1/2">{ingredients}</p>
                <p className="w-1/2 text-black">{number}</p>
            </div>

        </div>
    )
}

export default Details