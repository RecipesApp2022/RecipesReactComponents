import { useState } from 'react';
import DateFormatter from './DateFormatter';

const Comment = ({ imgPath, name, comment, createdAt, answer, answeredAt }) => {

    const [showResponse, setShowResponse] = useState(false);

    return <>
        <div className="flex items-center space-x-2 font-semibold">
            <img src={imgPath} alt="" className="inline-block w-12 h-12 rounded-full" />
            <span>{name ?? 'Guest'}</span>
        </div>
        <p className="mb-1">{comment} -
            <span className="ml-2 text-xs font-semibold italic">
                <DateFormatter value={createdAt} dateFormat="hh:mm:ss yyyy-MM-dd" />
            </span>
        </p>
        {
            answer &&
            <div className='text-right'>
                <button type='button' className='text-main' onClick={() => setShowResponse(oldShow => !oldShow)}>
                    {showResponse ? 'Hide' : 'Show'} Response
                </button>
            </div>
        }
        {
            answer && showResponse ?
                <div className=''>
                    {answer}
                </div>
                :
                null
        }
    </>
}

export default Comment;