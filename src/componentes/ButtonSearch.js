import { useState } from "react";
import ButtonSearchSelector from "./ButtonSearchSelector";

const ButtonSearch = ({ category, onClickCategory }) => {



    return (
        <div className="text-base m-0 rounded-tl-lg h-12 rounded-t-lg flex overflow-x-auto">
            <ButtonSearchSelector
                onClick={() => onClickCategory?.('sellers')}
                name="Sellers"
                isActive={category === 'sellers'}
            />

            <ButtonSearchSelector
                onClick={() => onClickCategory?.('recipes')}
                name="Recipes"
                isActive={category === 'recipes'}
            />
            <ButtonSearchSelector
                onClick={() => onClickCategory?.('plans')}
                name="Plans"
                isActive={category === 'plans'}
            />
            <ButtonSearchSelector
                onClick={() => onClickCategory?.('combos')}
                name="Combos"
                isActive={category === 'combos'}
            />

        </div>
    );
}

export default ButtonSearch;