import { useEffect } from "react";
import LoadingComponent from "./LoadingComponent";
import { ToastContainer, toast } from "react-toastify";
import { useFeedBack } from "../../contexts/FeedBackContext";
import ReactTooltip from "react-tooltip";

const FeedbackComponents = () => {

    const { customLoading, customToast, setCustomToast } = useFeedBack();

    useEffect(() => {
        if (customToast.show) {
            showToast(customToast);
        }
    }, [customToast]);

    const showToast = (toastData) => {
        const defaultOpts = {
            onClose: setCustomToast({ message: '', severity: '', show: false, position: '' }),
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        }

        switch (toastData.severity) {
            case 'success':
                toast.success(toastData.message, {
                    ...defaultOpts,
                    position: toastData?.position
                });
                break;
            case 'warning':
                toast.warn(toastData.message, {
                    ...defaultOpts,
                    position: toastData?.position
                });
                break;
            case 'primary':
                toast(toastData.message, {
                    ...defaultOpts,
                    position: toastData?.position
                });
                break;
            case 'danger':
                toast.error(toastData.message, {
                    ...defaultOpts,
                    position: toastData?.position
                });
                break;
        }
    };

    return (
        <>
            <LoadingComponent message={customLoading?.message} show={customLoading?.show} />
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ReactTooltip effect="solid" />
        </>
    )
}

export default FeedbackComponents;