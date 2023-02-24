import { format } from "date-fns";
import { useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../componentes/Pagination";
import RenderCommentable from "../componentes/RenderCommentable";
import { useAuth } from "../contexts/AuthContext";
import useComments from "../hooks/useComments";

const Comments = () => {

    const { user } = useAuth();

    const [filters, setFilters] = useState({
        page: 1,
        clientId: user?.id,
        comment: ''
    });

    const [{ comments, numberOfPages, loading }, getComments] = useComments({ params: { ...filters } }, { useCache: false });

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
        <div className="container p-20 h-full w-full mb-20">
            <p className="text-4xl font-bold text-black ">My Comments</p>
            <div>
                <input type="text"
                    style={{ width: '30%' }}
                    placeholder="Search comments"
                    onChange={handleChange}
                    value={filters?.comment}
                    name="comment"
                    className='
                    text-black 
                    rounded
                    text-xs 
                    border-gray-300 
                    focus:border-gray-300 
                    focus:ring 
                    focus:ring-gray-200
                    focus:ring-opacity-50 
                    leading-4
                    border-0
                    mt-4
                    top-0
                    right-0'
                />
                <br />
                <br />
                {
                    loading ?
                        <div className="text-4xl text-center text-gray-400">
                            Loading...
                        </div>
                        :
                        <div>
                            {
                                comments?.length > 0 ?
                                    comments?.map?.((comment, i) => {
                                        return (
                                            <div key={i} className="bg-white shadow p-4 my-2">
                                                <div className="flex">
                                                    <div className="w-1/2">
                                                        <h3>Your Comment:</h3>
                                                        <p className="text-sm text-gray-400">{comment?.comment} - {format(new Date(comment?.createdAt), 'dd/MM/yyyy hh:mm:ss')}</p>

                                                        <div className="mt-4">
                                                            <h3>Seller Response:</h3>
                                                            <p className="text-sm text-gray-400">{comment?.answer || '--'}{comment?.answeredAt && `- ${format(new Date(comment?.answeredAt), 'dd/MM/yyyy hh:mm:ss')}`}</p>
                                                        </div>
                                                    </div>
                                                    <div className="w-1/2">
                                                        <h3 style={{ textTransform: 'capitalize' }}>
                                                            {comment?.commentableType}:
                                                        </h3>
                                                        <RenderCommentable value={comment} />
                                                        <br />
                                                        <h3 style={{ textTransform: 'capitalize' }}>
                                                            Seller:
                                                        </h3>
                                                        <Link className="text-main hover:text-gray-400" to={`/sellers/${comment?.commentable?.seller?.slug}/recipes`}>
                                                            {comment?.commentable?.seller?.name}
                                                        </Link>
                                                    </div>
                                                </div>

                                            </div>
                                        )
                                    })
                                    :
                                    <div className="text-center text-red-500 text-4xl">
                                        No results found.
                                    </div>
                            }
                        </div>
                }
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

export default Comments;