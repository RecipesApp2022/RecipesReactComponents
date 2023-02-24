import React, { useState } from "react";
import { Link } from "react-router-dom";
import ButtonSellers from "./ButtonSellers";

const ButtonItems = ({ defaultCategory = 'recipes', seller }) => {

  const [category, setCategory] = useState(defaultCategory);

  return (
    <div className="text-base m-0 rounded-tl-lg h-12 rounded-t-lg flex">
      <Link to={`/sellers/${seller?.slug}/recipes`}>
        <ButtonSellers
          onClick={() => { setCategory('recipes') }}
          name="Recipes"
          isActive={category === 'recipes'}
        />
      </Link>

      <Link to={`/sellers/${seller?.slug}/plans`}>
        <ButtonSellers
          onClick={() => { setCategory('plans') }}
          name="Plans"
          isActive={category === 'plans'}
        />
      </Link>

      <Link to={`/sellers/${seller?.slug}/combos`}>
        <ButtonSellers
          onClick={() => { setCategory('combos') }}
          name="Combos"
          isActive={category === 'combos'}
        />
      </Link >
    </div >
  );
};

export default ButtonItems;
