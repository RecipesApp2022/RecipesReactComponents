import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <Fragment>
      <div className="relative flex justify-center text-center md:h-14 cursor-pointer rounded md:text-2xl md:px-2 py-2 mx-8 md:my-8 font-semibold shadow bg-main 	text-white">
        {props.saludo}
        {props.link && <Link to={props.link} className="absolute right-10 hidden md:block mt-2 text-base cursor-pointer hover:text-black">{props.title}</Link>}
      </div>
    </Fragment>
  );
};

export default Card;
