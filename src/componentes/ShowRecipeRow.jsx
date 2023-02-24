import { useState } from "react";
import { Link } from "react-router-dom";
import imgUrl from "../helpers/imgUrl";
import { IoArrowDownCircleSharp, IoArrowUpCircleSharp } from "react-icons/io5";

const ShowRecipeRow = ({ recipe }) => {
    const [showIngredients, setShowIngredients] = useState(false);
    console.log(recipe);
    return (
        <div className="my-4">
            <div className="flex items-center justify-between">
                <Link className="flex items-center space-x-4" to={`/recipes/${recipe?.slug}`} title={recipe?.name}>
                    <img className="rounded-full" style={{ height: '40px', width: '40px' }} src={imgUrl(recipe?.images?.[0]?.path)} />
                    <small className="text-center">{recipe?.name}</small>
                </Link>
                <button type="button" onClick={() => setShowIngredients((old) => !old)} className="text-main text-4xl">
                    {
                        !showIngredients ?
                            <IoArrowDownCircleSharp />
                            :
                            <IoArrowUpCircleSharp />
                    }
                </button>
            </div>
            {
                showIngredients &&
                <div className="animate__animated animate__fadeInLeft bg-gray-100 rounded-xl p-4 mt-4">
                    <div className="text-main">
                        Ingredients
                    </div>
                    <table className="ml-12 w-full">
                        <tbody>
                            {
                                recipe?.recipeIngredients?.map((ingredient, i) => {
                                    return (
                                        <tr key={i} className="ml-10">
                                            <td colSpan={2}>
                                                {ingredient?.ingredient?.name}:
                                            </td>
                                            <td>
                                                {ingredient?.value} {ingredient?.measurementUnit?.name}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <ul>
                    </ul>
                </div>
            }
        </div>
    )
}

export default ShowRecipeRow;