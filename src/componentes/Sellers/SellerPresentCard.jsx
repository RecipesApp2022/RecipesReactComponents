import { Link } from "react-router-dom";
import imgUrl from "../../helpers/imgUrl";
import { BsFacebook, BsTelephone, BsInstagram } from "react-icons/bs";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";

const SellerPresentCard = ({ seller }) => {
    return (
        <Link to={`/sellers/${seller?.slug}/recipes`}>
            <ul className="space-y-4">
                <li>
                    <img
                        className="w-full h-48 object-cover"
                        src={imgUrl(seller?.banner)}
                        alt=""
                    />
                </li>
                <li className="flex justify-between items-center p-4">
                    <div className="flex items-center space-x-2">
                        <div>
                            <div className="flex items-center space-x-2">
                                <img
                                    className="w-12 h-12 rounded-full"
                                    src={imgUrl(seller?.logo)}
                                    alt=""
                                />
                                <b>{seller?.name}</b>
                            </div>
                            <div className="flex">
                                <AiFillStar className="mt-2 text-yellow-300 h-6 w-6" />
                                <AiFillStar className="mt-2 text-yellow-300 h-6 w-6" />
                                <AiFillStar className="mt-2 text-yellow-300 h-6 w-6" />
                                <AiFillStar className="mt-2 text-yellow-300 h-6 w-6" />
                                <AiOutlineStar className="mt-2 text-gray-300 h-6 w-6" />
                            </div>
                        </div>
                    </div>
                    <div>
                        {
                            seller?.phoneNumber &&
                            <p className="flex items-center space-x-1"><BsTelephone /> <span>{seller?.phoneNumber}</span></p>
                        }
                        {
                            seller?.instagram &&
                            <p className="flex items-center space-x-1 text-black"><BsInstagram /> <span>{seller?.instagram}</span></p>
                        }
                        {
                            seller?.facebook &&
                            <p className="flex items-center space-x-1"><BsFacebook /> <span>{seller?.facebook}</span></p>
                        }
                    </div>
                </li>
            </ul>
        </Link>
    )
}

export default SellerPresentCard;