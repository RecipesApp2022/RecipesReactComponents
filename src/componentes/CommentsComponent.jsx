import { useEffect, useState } from "react";
import imgUrl from "../helpers/imgUrl";
import useAxios from "../hooks/useAxios";
import Button from "./Button";
import Comment from "./Comment";
import profile from "../assets/profile.png";
import useComments from "../hooks/useComments";

const CommentsComponent = ({ type, productId }) => {

    const [comment, setComment] = useState('');

    const [currentComments, setCurrentComments] = useState([]);

    const [filters, setFilters] = useState({
        recipeId: '',
        planId: '',
        comboId: '',
        page: 1,
        orderBy: 'createdAt,DESC',
        perPage: 2
    })

    const [{ comments, numberOfPages: pages, loading }, getComments] = useComments({ options: { manual: true, useCache: false } });

    const [{ data: commentData, loading: commentLoading }, addComment] = useAxios({ url: '/comments', method: 'POST' }, { manual: true });

    useEffect(() => {
        if (comments?.length > 0) {
            setCurrentComments((oldComments) => {
                return [...oldComments, ...comments]
            })
        }
    }, [comments]);

    useEffect(() => {
        if (type && productId) {
            setFilters((oldFilters) => {
                return {
                    ...oldFilters,
                    [`${type}Id`]: productId,
                    page: 1
                }
            });
        }
    }, [type, productId]);

    useEffect(() => {
        if (filters?.comboId || filters?.recipeId || filters?.planId) {
            getComments({
                params: {
                    ...filters
                }
            });
        }
    }, [filters]);

    useEffect(() => {
        if (commentData) {
            setCurrentComments((prevData) => {
                return [commentData, ...prevData];
            });

            setComment('');
        }
    }, [commentData]);

    const handleCommentSubmit = (e) => {
        e.preventDefault();

        if (commentLoading) {
            return;
        }

        addComment({
            data: {
                [`${type}Id`]: productId,
                comment
            }
        });
    }

    const handleMore = () => {
        if (pages > filters?.page) {
            setFilters((oldFilters) => {
                return {
                    ...oldFilters,
                    page: oldFilters?.page + 1
                }
            });
        }
    }


    return (
        <>
            <form onSubmit={handleCommentSubmit}>
                <textarea
                    className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  "
                    rows="4"
                    placeholder="Leave a comment..."
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                ></textarea>
                <div className="text-right mt-2">
                    <Button type="submit">Send</Button>
                </div>
            </form>

            <ul>
                {currentComments?.map(comment => <li key={comment.id} className="bg-white rounded p-3 mt-2">
                    <Comment
                        comment={comment.comment}
                        name={comment.name}
                        createdAt={comment.createdAt}
                        answer={comment?.answer}
                        answeredAt={comment?.answeredAt}
                        imgPath={imgUrl(comment.imgPath, profile)}
                    />
                </li>)}
                {
                    loading ?
                        <li className="text-center my-4">
                            Loading more comments...
                        </li>
                        :
                        pages > filters?.page ?
                            <li className="text-center">
                                <button onClick={handleMore} className="bg-white px-8 py-2 rounded-full shadow mt-4">
                                    Load More
                                </button>
                            </li>
                            :
                            <li className="text-center my-4">
                                No more comments.
                            </li>
                }
            </ul>
        </>
    )
}

export default CommentsComponent