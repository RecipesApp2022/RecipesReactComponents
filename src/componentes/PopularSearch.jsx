import React from 'react';
import { Link } from 'react-router-dom';

const PopularSearch = ({ title, img, url }) => {
    return (
        <div className="flex bg-white w-full rounded-md overflow-hidden shadow-md">
            <div className='justify-around items-center py-3 px-4 w-full'>
                <div className='text-3xl px-4 py-3 font-bold'>
                    {title}
                </div>
                <br />
                <Link to={url} className="bg-main text-white py-2 px-3 rounded my-4 mx-4">
                    See more
                </Link>
            </div>
            <div className="w-full">
                <img className='w-full h-full' src={img} alt="PopularSearch" />
            </div>
        </div>
    );
}

export default PopularSearch;
