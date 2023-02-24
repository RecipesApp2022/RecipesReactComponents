import { IoCloseCircle } from "react-icons/io5";

const ModalContainer = ({ children, onClose, style, widthClass, animation = 'animate__zoomIn', className }) => {

    return (
        <div className={`bg-white p-8 m-auto ${widthClass} rounded animate__animated ${animation} relative ${className}`} style={{ maxHeight: '80vh', overflowY: 'auto', ...style }
        }>
            <button onClick={() => onClose?.()} type="button" className="bg-white rounded-full text-red-400 text-4xl"
                style={{ position: 'absolute', top: 0, right: 0 }}
            >
                <IoCloseCircle />
            </button>
            {children}
        </div >
    )
}

export default ModalContainer;