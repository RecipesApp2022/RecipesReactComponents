import { useEffect } from "react";
import { useState } from "react";
import imgUrl from "../helpers/imgUrl";
import useAxios from "../hooks/useAxios";
import Modal from "./Modal/Modal";
import RatingComponent from "./RatingComponent";

const OrderItemRow = ({ item, orderStatus }) => {

    const [currentItem, setCurrentItem] = useState(null);

    const [showRatingModal, setShowRatingModal] = useState(false);

    const [ratingData, setRatingData] = useState({
        value: 1,
        comment: ''
    });

    const [showRatingMessage, setShowRatingMessage] = useState(false)

    const [{ data: rating, error: ratingError, loading: ratingLoading }, sendRating] = useAxios({ url: `/ratings`, method: 'POST' }, { manual: true, useCache: false });

    useEffect(() => {
        if (rating) {
            setCurrentItem((oldItem) => {
                return {
                    ...oldItem,
                    rating: rating
                }
            });
        }

        if (rating || ratingError) setShowRatingMessage(true);
    }, [rating, ratingError]);

    useEffect(() => {
        if (item) {
            setCurrentItem(item);
        }
    }, [item]);

    useEffect(() => {
        if (currentItem?.rating) {
            setRatingData((oldRatingData) => {
                return {
                    ...oldRatingData,
                    comment: currentItem?.rating?.comment,
                    value: currentItem?.rating?.value
                }
            })
        }
    }, [currentItem])

    useEffect(() => {
        if (showRatingMessage) {
            setTimeout(() => {
                setShowRatingMessage(false);
            }, 3000);
        }
    }, [showRatingMessage])

    const handleRating = (rating) => {
        setRatingData((oldRating) => {
            return {
                ...oldRating,
                value: rating
            }
        });
    }

    const handleSubmitRating = () => {
        if (ratingLoading) return;

        sendRating({
            data: {
                type: item?.type,
                "productId": item?.productId,
                "value": ratingData?.value,
                "comment": ratingData?.comment
            }
        });
    }
    return (
        <tr className="border-b">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <img src={imgUrl(item?.image)} style={{ width: 60, height: 60 }} className="rounded-xl" />
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                <h1>
                    <b>
                        <span className="capitalize">
                            {currentItem?.type}
                        </span>:
                        {` ${currentItem?.name}`}
                    </b>
                </h1>

                {
                    orderStatus?.code === 'ors-003' &&
                    <button onClick={() => setShowRatingModal(true)} className="text-main hover:text-gray-500 transform transition duration-500 hover:translate-x-2">
                        {
                            !currentItem?.rating ?
                                'Send Rating'
                                :
                                'Show Rating'
                        }
                    </button>
                }
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                Qty {currentItem?.quantity}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-right font-medium text-gray-900">
                {currentItem?.total ? `$${currentItem?.total}` : 'Free'}
            </td>
            <Modal onClose={() => setShowRatingModal(false)} show={showRatingModal}>
                <h1 className="text-xl text-gray-500 font-bold">
                    {
                        currentItem?.rating ?
                            'Your Rating'
                            :
                            'Add Rating:'
                    }
                </h1>
                <br />
                <RatingComponent
                    onClickStar={handleRating}
                    value={ratingData?.value}
                />

                <textarea
                    name="comment"
                    className="w-full"
                    placeholder="What's your experience?"
                    style={{
                        border: "1px solid #a9a9a9",
                        borderRadius: 5,
                        padding: 10,
                        margin: "20px 0",
                        minHeight: 100,
                    }}
                    onChange={(e) => {
                        setRatingData((oldRatingData) => {
                            return {
                                ...oldRatingData,
                                comment: e.target.value
                            }
                        })
                    }}
                    value={ratingData?.comment}
                >
                </textarea>
                {
                    showRatingMessage &&
                    <div className="text-center">
                        {
                            ratingError?.response?.data?.message || 'Your rating is send.'
                        }
                    </div>
                }
                <div className="text-center space-x-8">
                    <button onClick={() => setShowRatingModal(false)} type="button" className="bg-red-500 text-white mt-8 px-8 py-2 rounded-xl transition duration-500 hover:bg-white hover:text-main">
                        Cancel
                    </button>
                    <button disabled={ratingLoading} onClick={handleSubmitRating} type="submit" className="bg-main text-white mt-8 px-8 py-2 rounded-xl transition duration-500 hover:bg-white hover:text-main">
                        {
                            ratingLoading ?
                                'Loading'
                                :
                                'Send Rating'
                        }
                    </button>
                </div>
            </Modal>
        </tr>
    )
}

export default OrderItemRow;