import { BsFillCalendar2MinusFill, BsFillGearFill, BsFillHeartFill, BsBookFill } from "react-icons/bs";
import { FaListAlt } from "react-icons/fa";
import { IoHelpCircleOutline, IoChatbubbleEllipsesOutline, IoBookmarksSharp, IoPersonCircleSharp, IoDocument } from "react-icons/io5";
import { RiMessage2Fill } from "react-icons/ri";

const MenuList = [
    {
        name: 'My Profile',
        url: '/accountinfo',
        Icon: ({ className }) => <IoPersonCircleSharp className={className} />
    },
    {
        name: 'Settings',
        url: '/configuration',
        Icon: ({ className }) => <BsFillGearFill className={className} />
    },
    {
        name: 'Overview',
        url: '/overview',
        Icon: ({ className }) => <BsFillCalendar2MinusFill className={className} />
    },
    {
        name: 'My Favorites',
        url: '/favorites',
        Icon: ({ className }) => <BsFillHeartFill className={className} />
    },
    {
        name: 'My recipe book',
        url: '/recipe-book',
        Icon: ({ className }) => <BsBookFill className={className} />
    },
    {
        name: 'My purchases',
        url: '/purchases-products',
        Icon: ({ className }) => <FaListAlt className={className} />
    },
    {
        name: 'My Orders',
        url: '/orders',
        Icon: ({ className }) => <IoDocument className={className} />
    },
    {
        name: 'Chats',
        url: '/chats',
        Icon: ({ className }) => <IoChatbubbleEllipsesOutline className={className} />
    },
    {
        name: 'Comments',
        url: '/comments',
        Icon: ({ className }) => <RiMessage2Fill className={className} />
    },
    {
        name: 'My Plans',
        url: '/my-plans',
        Icon: ({ className }) => <IoBookmarksSharp className={className} />
    },
    {
        name: 'Help',
        url: '/contactus',
        Icon: ({ className }) => <IoHelpCircleOutline className={className} />
    }
];

export default MenuList;