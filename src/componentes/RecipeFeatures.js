import clsx from "clsx";
import { SiCodechef } from "react-icons/si";
import generateArray from "../helpers/generateArray";
import FeatureRow from "./FeatureRow";

const numberOfDifficultyLevels = 3;

const RecipeFeatures = ({ recipe, className }) => {
    const recipeLevel = recipe?.recipeDifficulty?.value ?? 0;
    
    return <div className={className}>
        <FeatureRow
            title="Level"
            content={<>
                {generateArray(recipeLevel).map(n => <SiCodechef key={n} className='text-gray-700' />)}
                {generateArray(numberOfDifficultyLevels - recipeLevel).map(n => <SiCodechef key={n} className='text-gray-300' />)}
            </>}
            contentClassName="flex space-x-1"
        />

        <FeatureRow
            title="Categories"
            content={recipe?.mealPeriods.map(mp => mp.name).join(' - ')}
            contentClassName="text-black"
        />

        <FeatureRow
            title="Time"
            content={`${recipe?.preparationTime} minutes`}
        />

        <FeatureRow
            title="Ingredients"
            content={recipe?.recipeIngredients.length}
        />
    </div>;
}

export default RecipeFeatures;