import { Link } from 'react-router-dom';
import LogoDrafts from '../assets/drafts.png';

const PageLogo = ({ centered = false }) => {
    return (
        <Link to={"/"}>
            <div className={`flex items-center text-white md:space-x-4 ${centered ? 'justify-center' : ''}`}>
                <img className="inline-block md:h-9 w-9 rounded-lg"
                    src={LogoDrafts} alt="recipes" />
            </div>
        </Link>
    );
}

export default PageLogo;