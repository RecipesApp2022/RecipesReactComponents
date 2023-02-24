import { useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";

const OrdersCapture = () => {

    const [searchParams] = useSearchParams();

    const [{ data, loading, error }, sendOrderToken] = useAxios({ method: 'GET' }, { manual: true, useCache: false });

    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data])

    useEffect(() => {
        const token = searchParams?.get('token');

        const PayerID = searchParams?.get('PayerID');

        if (token && PayerID) {
            sendOrderToken({ url: `/orders/capture-order?token=${token}&PayerID=${PayerID}` });
        }
    }, [searchParams]);

    return (
        <div>
            {
                loading ?
                    <h1 className="text-center font-bold text-4xl mt-40">
                        we are confirming the payment of the order please be patient
                    </h1>
                    :
                    data ?
                        <div className="mt-40 text-center">
                            <p className="text-center">
                                We have confirmed the information successfully. 😊
                            </p>
                            <br />
                            <Link className="bg-main px-8 py-4 rounded-xl text-white" to={`/orders/${data?.id}`}>
                                View Order Details
                            </Link>
                        </div>
                        :
                        null
            }
            {
                error &&
                <div className="mt-40 text-center">
                    <p className="text-center">
                        The order has already been captured or the payment service is down.
                    </p>
                    <br />
                    <Link className="bg-main px-8 py-4 rounded-xl text-white" to={`/orders`}>
                        Go to orders
                    </Link>
                </div>
            }
        </div>
    )
}

export default OrdersCapture;