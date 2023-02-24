import React, { useState } from "react";
import paypal from "../assets/paypaltransp.png";
import PaypalModal from "./PaypalModal";

const CardResum = ({ title, total, price }) => {
  const [showPaypalModal, setShowPaypalModal] = useState(false);

  return (
    <div className="bg-white shadow p-3 rounded-lg ">
      <div>
        <p className="mb-8 ml-4 md:text-2xl text-base lg:text-2xl font-bold border-b pb-1 text-gray-600">{title}</p>
      </div>
      <div className="flex justify-between ml-5 mr-5">
        <p>{total}</p>
        <p>{price}</p>
      </div>
      <div className="flex justify-center mt-10 mb-8">
        <img
          src={paypal}
          alt=""
          className="w-40 bg-main rounded-lg p-3 cursor-pointer"
          onClick={() => setShowPaypalModal(true)}
        />
      </div>

      <PaypalModal show={showPaypalModal} onClose={() => setShowPaypalModal(false)} />
    </div>
  );
};

export default CardResum;
