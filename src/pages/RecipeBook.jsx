import useFavorites from "../hooks/useFavorites";
import { useAuth } from "../contexts/AuthContext";
import useRecipesByHierarchy from "../hooks/useRecipesByHierarchy";
import CardRecipes from "../componentes/CardRecipes";
import { Link } from "react-router-dom";
import imgUrl from "../helpers/imgUrl";
import Pagination from "../componentes/Pagination";
import { useState } from "react";

const RecipeBook = () => {
    const [recipesFilters, setRecipesFilters] = useState({
        page: 1,
    });
    
    const [{recipes, numberOfPages}] = useRecipesByHierarchy({ params: recipesFilters });

    return (
        <div className="flex">
            <div className="container md:p-20 p-4 md:h-full md:w-full mb-20">
                <p className="md:text-4xl text-2xl text-center md:text-justify font-bold text-black mb-6 md:mb-12">My Recipe Book</p>
                <div className="bg-white p-2 md:p-10 rounded-lg md:h-full md:w-full shadow">
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
                        {recipes.map((recipe) => (
                            <Link to={`/recipes/${recipe.slug}`} key={recipe.id}>
                                <CardRecipes
                                    texto={recipe.name}
                                    price={recipe.price}
                                    title={recipe.mealPeriods.map(mp => mp.name).join(' - ')}
                                    foto={imgUrl(recipe.images?.[0].path)}
                                    sellerLogo={imgUrl(recipe.seller.logo)}
                                    sellerName={recipe.seller.name}
                                    numberOfIngredients={recipe.recipeIngredients.length}
                                    preparationTime={recipe.preparationTime}
                                    hideButtons
                                    hideCart
                                    hideBag
                                    rating={recipe?.rating}
                                />
                            </Link>
                        ))}
                    </div>

                    <br />
                    <Pagination
                        pages={numberOfPages}
                        onChange={(page) => setRecipesFilters((oldFilters) => ({ ...oldFilters, page: page }))}
                        activePage={recipesFilters.page}
                    />
                </div>
            </div>
        </div>
    );
}

export default RecipeBook;