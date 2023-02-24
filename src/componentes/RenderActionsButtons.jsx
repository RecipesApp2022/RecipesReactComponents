import { useEffect } from "react";
import { useState } from "react"
import { Link } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import Modal from "./Modal/Modal";
import RatingComponent from "./RatingComponent";

const RenderActionsButtons = ({ product }) => {

    const [currentProduct, setCurrentProduct] = useState(null);

    const [productType, setProductType] = useState('');

    const [showRatingModal, setShowRatingModal] = useState(false);

    const [ratingData, setRatingData] = useState({
        value: 1,
        comment: ''
    });

    const [showRatingMessage, setShowRatingMessage] = useState(false);

    const [{ data: rating, error: ratingError, loading: ratingLoading }, sendRating] = useAxios({ url: `/ratings`, method: 'POST' }, { manual: true, useCache: false });

    useEffect(() => {
        if (currentProduct?.clientRating) {
            setRatingData((oldData) => {
                return {
                    ...oldData,
                    value: currentProduct?.clientRating?.value,
                    comment: currentProduct?.clientRating?.comment
                }
            })
        }
    }, [currentProduct?.clientRating])

    useEffect(() => {
        if (rating) {
            setCurrentProduct((oldItem) => {
                return {
                    ...oldItem,
                    clientRating: rating
                }
            });
        }

        if (rating || ratingError) setShowRatingMessage(true);
    }, [rating, ratingError]);

    useEffect(() => {
        if (product) {
            if (product?.recipe) {
                setCurrentProduct(product?.recipe);
                setProductType('recipe');
            }
            if (product?.combo) {
                setCurrentProduct(product?.combo);
                setProductType('combo');
            }

            if (product?.plan) {
                setCurrentProduct(product?.plan);
                setProductType('plan');
            }
        }
    }, [product])

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
                type: productType,
                "productId": currentProduct?.id,
                "value": ratingData?.value,
                "comment": ratingData?.comment
            }
        });
    }

    return (
        <>
            <button className="font-bold text-main hover:text-gray-400" onClick={() => setShowRatingModal(true)}>
                {
                    currentProduct?.clientRating ?
                        'Show Rating'
                        :
                        'Send Rating'
                }
            </button>
            <Link className="font-bold text-yellow-500 hover:text-gray-400" to={`#`}>
                View Details
            </Link>

            <Modal onClose={() => setShowRatingModal(false)} show={showRatingModal}>
                <h1 className="text-xl text-gray-500 font-bold">
                    {
                        currentProduct?.clientRating ?
                            `Your Rating ${currentProduct?.clientRating?.isEdited ? '(Edited)' : ''}`
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
        </>
    )
}

export default RenderActionsButtons