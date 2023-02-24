import ReactDom from "react-dom";
import { useEffect, useState } from "react";

const LoadingComponent = ({ message, show }) => {

    const [dots, setDots] = useState("");

    useEffect(() => {
        let id;

        if (show) {
            id = setInterval(() => {
                setDots((oldDots) => oldDots.length < 3 ? oldDots + "." : "");
            }, 500);
        }

        return () => {
            if (id) clearInterval(id);
        }
    }, [show]);

    return ReactDom.createPortal(
        show ?
            <div className="w-screen h-screen flex fixed top-0 left-0" style={{ zIndex: 99, background: 'rgba(255,255,255, .8)' }}>
                <div className="m-auto">
                    <div className="spinner">
                        <div className="double-bounce1 bg-main"></div>
                        <div className="double-bounce2 bg-main"></div>
                    </div>
                    <h1 className="text-muted text-2xl">{message}{dots}</h1>
                </div>
            </div>
            :
            null
        ,
        document.getElementById('feedback')
    )
}

export default LoadingComponent;