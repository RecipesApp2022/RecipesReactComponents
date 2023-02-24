import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Modal from "../componentes/Modal/Modal";
import OrderItemRow from "../componentes/OrderItemRow";
import RatingComponent from "../componentes/RatingComponent";
import { useAuth } from "../contexts/AuthContext";
import { useFeedBack } from "../contexts/FeedBackContext";
import imgUrl from "../helpers/imgUrl";
import useAxios from "../hooks/useAxios";
import usePaymentMethods from "../hooks/usePaymentMethods";

const OrdersDetails = () => {

    const { user } = useAuth()

    const { id } = useParams()

    const { setLoading } = useFeedBack();

    const [currentOrder, setCurrentOrder] = useState(null);

    const [showRatingMessage, setShowRatingMessage] = useState(false)

    const [showSellerRatingModal, setShowSellerRatingModal] = useState(false);

    const [ratingData, setRatingData] = useState({
        value: 1,
        comment: ''
    });

    const [{ data, loading, error }, getOrder] = useAxios({ url: `/orders/${id}` }, { useCache: false });

    const [{ paymentMethods, total, numberOfPages, size, loading: loadingPayments }, getPaymentMethods] = usePaymentMethods();

    const [{ data: payData, loading: payLoading }, payOrder] = useAxios({ method: 'POST' }, { manual: true, useCache: false });

    const [{ data: rating, error: ratingError, loading: ratingLoading }, sendRating] = useAxios({ url: `/seller-ratings`, method: 'POST' }, { manual: true, useCache: false });

    const [{ error: printError, loading: printLoading }, printOrder] = useAxios({ url: `/orders/${id}/pdf`, responseType: 'blob' }, { manual: true, useCache: false });

    useEffect(() => {
        if (currentOrder?.seller?.clientRating) {
            setRatingData((oldRatingData) => {
                return {
                    ...oldRatingData,
                    value: currentOrder?.seller?.clientRating?.value || 1,
                    comment: currentOrder?.seller?.clientRating?.comment || '',
                }
            })
        }
    }, [currentOrder?.seller?.clientRating])

    useEffect(() => {
        if (showRatingMessage) {
            setTimeout(() => {
                setShowRatingMessage(false);
            }, 3000);
        }
    }, [showRatingMessage])

    useEffect(() => {
        if (rating) {
            setCurrentOrder((oldOrder) => {
                return {
                    ...oldOrder,
                    seller: {
                        ...oldOrder?.seller,
                        clientRating: rating
                    }
                }
            });
        }
        if (rating || ratingError) setShowRatingMessage(true);
    }, [rating, ratingError]);

    useEffect(() => {
        setLoading({
            show: payLoading,
            message: 'Loading...'
        })
    }, [payLoading])

    useEffect(() => {
        if (data) {
            setCurrentOrder(data);
        }
    }, [data])


    const handlePay = (paymentMethod) => {
        payOrder({ url: `/orders/${currentOrder?.id}/pay` });
    }

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
                "sellerId": currentOrder?.seller?.sellerId,
                "orderId": currentOrder?.id,
                "value": ratingData?.value,
                "comment": ratingData?.comment
            }
        });
    }

    const handleBlobResponse = (blobResponse) => {
        const fileBlobUrl = URL.createObjectURL(blobResponse);
        const aToDownload = document.getElementById('downloadLink');
        aToDownload.href = fileBlobUrl;
        aToDownload?.click();
        window.URL.revokeObjectURL(fileBlobUrl);
    }

    const handlePrint = () => {
        printOrder().then((response) => {
            console.log(response)
            handleBlobResponse(response?.data);
        });
    }

    return (
        <div className="container p-4 md:p-20 h-full w-full mb-20">
            <a id="downloadLink" style={{ display: 'none' }} download={`order-${currentOrder?.id}`}></a>
            <div className="flex items-center justify-between w-full">
                <div className="w-8/12">
                    <p className="text-4xl font-bold text-black ">Orders Details</p>
                    <br />
                    <p>
                        Hi, <b>{user?.name}</b>. Your order has been <b className="capitalize" style={{ color: currentOrder?.orderStatus?.color }}>{currentOrder?.orderStatus?.name}</b>.
                    </p>
                </div>
                <div className="w-4/12">
                    <div className="text-right">
                        <button disabled={printLoading} onClick={handlePrint} className="px-12 py-2 rounded text-white bg-red-500">
                            {
                                printLoading ?
                                    'Loading...'
                                    :
                                    'Print'
                            }
                        </button>
                    </div>
                    {
                        currentOrder?.orderStatus?.code === 'ors-001' &&
                        <div>
                            <h1 className="text-xl text-gray-500 mb-4">
                                Pay with:
                            </h1>
                            <div className="flex items-center flex-wrap space-x-4 justify-center">
                                {
                                    paymentMethods?.map((payment, i) => {
                                        return (
                                            <button key={i} className="w-1/4 py-2 rounded-xl text-center text-white capitalize" onClick={() => handlePay(payment?.code)}>
                                                <img src={imgUrl(payment?.image)} alt="" style={{ maxWidth: '100%' }} />
                                            </button>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
            <br />
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block w-full">
                        <div>
                            <table className="w-full">
                                <tbody>
                                    <tr className="border-b">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <h1>
                                                <b>Order Date</b>
                                            </h1>
                                            {currentOrder?.createdAt && format(new Date(currentOrder?.createdAt), 'dd-MM-yyyy')}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <h1>
                                                <b>Order Number</b>
                                            </h1>
                                            {currentOrder?.id}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <h1>
                                                <b>Payment Method</b>
                                            </h1>
                                            {
                                                currentOrder?.payment?.paymentMethod?.name || '--'
                                            }
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <div className="flex items-center space-x-4">
                                                <div>
                                                    <h1>
                                                        <b>Order Seller</b>
                                                    </h1>
                                                    <Link className="font-bold text-main hover:text-gray-400" to={`/sellers/${currentOrder?.seller?.slug}/recipes`}>
                                                        {currentOrder?.seller?.name}
                                                    </Link>
                                                </div>
                                                <div>
                                                    <button onClick={() => setShowSellerRatingModal(true)} className="bg-yellow-500 text-white rounded-xl px-4 py-2">
                                                        {
                                                            currentOrder?.seller?.clientRating ?
                                                                'Show Rating'
                                                                :
                                                                'Send Rating to the seller'
                                                        }
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    {
                                        currentOrder?.orderItems?.map((item, i) => {
                                            return (
                                                <OrderItemRow orderStatus={currentOrder?.orderStatus} item={item} key={i} />
                                            )
                                        })
                                    }
                                    <tr>
                                        <td colSpan={2} className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <h1>
                                                <b>Subtotal</b>
                                            </h1>
                                        </td>
                                        <td colSpan={2} className="px-6 py-2 whitespace-nowrap text-sm text-right font-medium text-gray-900">
                                            <h1>
                                                {currentOrder?.total ? `$${currentOrder?.total}` : 'Free'}
                                            </h1>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <h1>
                                                <b>Taxes</b>
                                            </h1>
                                        </td>
                                        <td colSpan={2} className="px-6 py-2 whitespace-nowrap text-sm text-right font-medium text-gray-900">
                                            <h1>
                                                {currentOrder?.taxes ? `$${currentOrder?.taxes}` : '$0'}
                                            </h1>
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td colSpan={2} className="px-6 py-2 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <h1>
                                                <b>Discount</b>
                                            </h1>
                                        </td>
                                        <td colSpan={2} className="px-6 py-2 whitespace-nowrap text-sm text-right font-medium text-gray-900">
                                            <h1>
                                                {currentOrder?.discount ? `$${currentOrder?.discount}` : '$0'}
                                            </h1>
                                        </td>
                                    </tr>
                                    <tr className="border-b">
                                        <td colSpan={2} className="px-6 py-6 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <h1>
                                                <b>Total</b>
                                            </h1>
                                        </td>
                                        <td colSpan={2} className="px-6 py-6 whitespace-nowrap text-sm text-right font-medium text-gray-900">
                                            <h1>
                                                {currentOrder?.total ? `$${currentOrder?.total}` : '$0'}
                                            </h1>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Modal show={showSellerRatingModal} onClose={() => setShowSellerRatingModal(false)}>
                <h1 className="text-xl text-gray-500 font-bold">
                    {
                        currentOrder?.seller?.clientRating ?
                            `Your Rating ${currentOrder?.seller?.clientRating?.isEdited ? '(Updated)' : ''}`
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
                    <button onClick={() => setShowSellerRatingModal(false)} type="button" className="bg-red-500 text-white mt-8 px-8 py-2 rounded-xl transition duration-500 hover:bg-white hover:text-main">
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
        </div>
    )
}

export default OrdersDetails;