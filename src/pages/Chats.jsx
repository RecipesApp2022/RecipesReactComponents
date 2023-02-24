import { format } from "date-fns";
import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../componentes/Pagination";
import RenderCommentable from "../componentes/RenderCommentable";
import { useAuth } from "../contexts/AuthContext";
import useChats from "../hooks/useChats";

const Chats = () => {

    const { user } = useAuth();

    const [filters, setFilters] = useState({
        page: 1,
        clientId: user?.id,
        comment: ''
    });

    const [{ chats, numberOfPages, loading }, getChats] = useChats({ params: { ...filters } }, { useCache: false });

    const handleChange = (e) => {
        setFilters((oldFilters) => {
            return {
                ...oldFilters,
                [e.target.name]: e.target.value,
                page: 1
            }
        })
    }

    return (
        <div className="container p-4 md:p-20 h-full w-full mb-20">
            <p className="text-4xl font-bold text-black ">My Chats</p>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block w-full">
                        <div>
                            <table className="w-full">
                                <thead className="border-b">
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                            #
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                            Seller
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                            Created At
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        loading ?
                                            <tr>
                                                <td colSpan={4} className="text-4xl text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    Loading...
                                                </td>
                                            </tr>
                                            :
                                            chats?.length > 0 ?
                                                chats?.map((chat, i) => {
                                                    return (
                                                        <tr className="border-b text-center" key={i}>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                {chat?.id}
                                                            </td>
                                                            <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                                                <Link className="font-bold text-main hover:text-gray-400" to={`/sellers/${chat?.seller?.slug}/recipes`}>
                                                                    {chat?.seller?.name}
                                                                </Link>
                                                            </td>
                                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                {format(new Date(chat?.createdAt), 'dd-MM-yyyy')}
                                                            </td>
                                                            <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                                                <Link className="font-bold text-main hover:text-gray-400" to={`/chats/${chat?.id}`}>
                                                                    View Messages
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                                :
                                                <tr className="border-b">
                                                    <td colSpan={4} className="text-center text-red-500 px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                        No results found. 😔
                                                    </td>
                                                </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="flex w-full justify-center">
                <Pagination
                    pages={numberOfPages}
                    onChange={(page) => setFilters((oldFilters) => { return { ...oldFilters, page: page } })}
                    activePage={filters?.page}
                />
            </div>
        </div>
    )
}

export default Chats;