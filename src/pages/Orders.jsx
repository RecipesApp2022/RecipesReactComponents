import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../componentes/Pagination";
import { useAuth } from "../contexts/AuthContext";
import { useFeedBack } from "../contexts/FeedBackContext";
import useAxios from "../hooks/useAxios";
import useOrders from "../hooks/useOrders"

const Orders = () => {

    const { user } = useAuth();

    const { setLoading } = useFeedBack();

    const [filters, setFilters] = useState({
        page: 1,
        clientId: user?.id,
        perPage: 10
    });

    const [orderId, setOrderId] = useState(null);

    const [{ orders, numberOfPages, loading }, getOrders] = useOrders({ params: { ...filters } }, { useCache: false, manual: true });

    const [{ data: payData, loading: payLoading }, payOrder] = useAxios({ method: 'POST' }, { manual: true, useCache: false });

    const [{ loading: printLoading }, printOrder] = useAxios({ responseType: 'blob' }, { manual: true, useCache: false });

    useEffect(() => {
        setLoading({
            show: payLoading,
            message: 'Loading...'
        })
    }, [payLoading])

    useEffect(() => {
        if (payData) {
            window.open(payData?.url, "_blank");
        }
    }, [payData])

    useEffect(() => {
        getOrders({
            params: {
                ...filters
            }
        })
    }, [filters])

    const handleChange = (e) => {
        setFilters((oldFilters) => {
            return {
                ...oldFilters,
                [e.target.name]: e.target.value,
                page: 1
            }
        })
    }

    const handlePay = (orderId) => {
        payOrder({ url: `/orders/${orderId}/pay` });
    }

    const handleBlobResponse = (blobResponse) => {
        const fileBlobUrl = URL.createObjectURL(blobResponse);
        const aToDownload = document.getElementById('downloadLink');
        aToDownload.href = fileBlobUrl;
        aToDownload?.click();
        window.URL.revokeObjectURL(fileBlobUrl);
    }

    const handlePrint = (orderId) => {
        setOrderId(orderId);
        printOrder({ url: `/orders/${orderId}/pdf` }).then((response) => {
            handleBlobResponse(response?.data);
            setOrderId(null);
        });
    }

    return (
        <div className="container p-4 md:p-20 h-full w-full mb-20">
            <a id="downloadLink" style={{ display: 'none' }} download={`order-${orderId}`}></a>
            <p className="text-4xl font-bold text-black ">My Orders</p>
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
                                            Total
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                            Status
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
                                                <td colSpan={6} className="text-4xl text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    Loading...
                                                </td>
                                            </tr>
                                            :
                                            orders?.length > 0 ?
                                                orders?.map((order, i) => {
                                                    return (
                                                        <tr className="border-b text-center" key={i}>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                {order?.id}
                                                            </td>
                                                            <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                                                <Link className="font-bold text-main hover:text-gray-400" to={`/sellers/${order?.seller?.slug}/recipes`}>
                                                                    {order?.seller?.name}
                                                                </Link>
                                                            </td>
                                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                {order?.total ? `$${order?.total}` : 'Free'}
                                                            </td>
                                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                <p style={{ color: order?.orderStatus?.color }} className="capitalize font-bold">
                                                                    {order?.orderStatus?.name}
                                                                </p>
                                                            </td>
                                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                {order?.createdAt && format(new Date(order?.createdAt), 'dd-MM-yyyy')}
                                                            </td>
                                                            <td className=" space-x-4 text-sm font-light px-6 py-4 whitespace-nowrap">
                                                                {
                                                                    order?.orderStatus?.code === 'ors-001' &&
                                                                    <button onClick={() => handlePay(order?.id)} className="font-bold text-main hover:text-gray-400">
                                                                        Pay
                                                                    </button>
                                                                }
                                                                <button disabled={printLoading && orderId === order?.id} onClick={() => handlePrint(order?.id)} className="font-bold rounded text-white text-red-500">
                                                                    {
                                                                        printLoading && orderId === order?.id ?
                                                                            'Loading...'
                                                                            :
                                                                            'Print'
                                                                    }
                                                                </button>
                                                                <Link className="font-bold text-yellow-500 hover:text-gray-400" to={`/orders/${order?.id}`}>
                                                                    View Details
                                                                </Link>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                                :
                                                <tr className="border-b">
                                                    <td colSpan={6} className="text-center text-red-500 px-6 py-4 whitespace-nowrap text-sm font-medium">
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

export default Orders;