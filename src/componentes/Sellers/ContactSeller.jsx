import { useState } from "react";
import ContactSellerModal from "./ContactSellerModal";

const ContactSeller = ({ seller }) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <div className="text-center mt-4">
            <button onClick={() => setShowModal(true)} className="bg-main w-full rounded px-4 py-2 tran hover:text-white" type="button">
                Contact
            </button>
            <ContactSellerModal seller={seller} show={showModal} onClose={() => { setShowModal(false) }} />
        </div>
    )
}

export default ContactSeller;