import ReactPlayer from 'react-player';
import chefsSw from '../assets/chefsSw.jpg';

const Video = ({ name, subname }) => {
    return (
        <div className="text-white">
            <div className="h-36 bg-black rounded-lg overflow-hidden">
                <ReactPlayer
                    url='https://www.youtube.com/watch?v=WmLNXXlo3rQ'
                    height={'100%'}
                    width={'100%'}
                    className="rounded-lg"
                />
            </div>
            <div className="flex">
                <img className="rounded-full h-10 w-10" src={chefsSw} alt="" />
                <div className="grid grid-rows-2 m-0.5">
                    <p className="text-black font-semibold ">{name}</p>
                    <p className="text-gray-500 text-xs font-semibold ">{subname}</p>
                </div>
            </div>
        </div>
    );
}

export default Video;