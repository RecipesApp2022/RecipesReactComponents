import React from "react";
import { CardWithTitle } from "../componentes/CardWithTitle";
import CardPaypal from "../componentes/CardPaypal";
import CardOrder from "../componentes/CardOrder";
import Details from "../componentes/Details";
import CardProduct from "../componentes/CardProduct";
import CardResum from "../componentes/CardResum";

const PaymentMethod = () => {
  return (
    <div className="md:p-8 p-4 md:flex md:mt-14 md:ml-8 mb-12 lg:w-full w-full">
      <div className="w-full lg:w-1/2">
        <CardPaypal title="Add Paypal" text="Modificar" />

        <div className="mt-6 flex md:max-w-full ">
          <CardWithTitle title="Order Sellers">
            <CardOrder title="Sellers" chef="Anya Taylor" />
            <div className="flex md:grid md:grid-cols-2 p-2 space-x-12">
              <CardProduct title="Products" food="Lasagna" />
              <Details
                level="Level"
                categories="Categoria"
                fitness="Lunch"
                time="Time"
                days="60-90 days"
                ingredients="Ingredients"
                number="6"
                price="$36.66"
              />
            </div>
          </CardWithTitle>
        </div>
      </div>

      <div className=" md:ml-8 md:w-4/12 w-full lg: mr-10 mt-6 md:mt-0">
        <CardResum title="Orden Resum" total="Total a Pagar" price="$35.23" />
      </div>
    </div>
  );
};

export default PaymentMethod;
