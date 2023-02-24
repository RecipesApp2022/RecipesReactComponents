import { useRef } from "react";
import ReactDom from "react-dom";
import ButtonRank from "./ButtonRank";
import CategoriesRecipes from "./CategoriesRecipes";
import SelectCategory from "./SelectCategory";
import SelectRank from "./SelectRank";


const ModalFiltre = ({ show, onClose }) => {

    const modalRef = useRef();

    if (!show) {
        return null;
    }

    const handleClose = (e, forceClose) => {
        if (forceClose) {
            onClose();
            return;
        }


        if (modalRef.current === e.target) {
            onClose();
        }
    }

    return ReactDom.createPortal(
        <div ref={modalRef} onClick={handleClose} className="flex h-screen w-screen bg-black bg-opacity-50 fixed z-10 p-2" style={{ top: 0, left: 0, overflowY: 'auto' }}>
            <div className="m-auto ">
                <div className="bg-white p-6 rounded-lg shadow " style={{ width: "80vw" }}>
                    <CategoriesRecipes />
                    <div className="mb-6">
                        <p className="title-medium ">Types</p>
                        <SelectCategory className="mt-6" title="Breakfast" />
                        <SelectCategory title="Lunch" />
                        <SelectCategory title="Dinner" />
                        <SelectCategory title="Snacks" />

                        <h1 className="title-medium mt-4 mb-6">Rating</h1>
                        <SelectRank num="2" />
                        <SelectRank num="3" />
                        <SelectRank num="4" />
                        <SelectRank num="5" />
                        <SelectRank num="6" />
                        <div className="p-3">
                            <ButtonRank />
                        </div>
                    </div>
                </div>
            </div>
        </div >
        ,
        document.getElementById("portal")
    );

}
export default ModalFiltre;