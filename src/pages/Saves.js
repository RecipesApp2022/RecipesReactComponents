import CardRecipes from "../componentes/CardRecipes";
import { Link } from "react-router-dom";
import useSaves from "../hooks/useSaves";
import { useFeedBack } from "../contexts/FeedBackContext";
import { useEffect, useState } from "react";
import saveTypes from "../consts/favoriteTypes";
import imgUrl from "../helpers/imgUrl";
import Pagination from "../componentes/Pagination";
import WeightPlan from "../componentes/WeightPlan";

const Saves = () => {
    const { setLoading } = useFeedBack();

    const [filters, setFilters] = useState({
        page: 1,
        perPage: 12,
    });

    const [{ saves, loading: loadingSaves, numberOfPages }] = useSaves({ params: { ...filters } });

    useEffect(() => {
        setLoading({ message: 'Cargando', show: loadingSaves });
    }, [loadingSaves]);

    return (
        <div className="flex">
            <div className="container p-4 md:p-20 h-full w-full mb-20">
                <p className="md:text-4xl text-2xl text-center md:text-justify font-bold text-black mb-6 md:mb-12">My Saves</p>
                <div className="bg-white p-8 md:p-10 rounded-lg h-full w-full shadow">
                    <div className="md:grid md:grid-cols-3 md:gap-10 grid grid-cols-1 gap-5">
                        {saves.map(({ id, type, saveable }) => {
                            if (type === saveTypes.RECIPE) {
                                return <Link key={id} to={`/recipes/${saveable.slug}`}>
                                    <CardRecipes
                                        texto={saveable.name}
                                        price={saveable.price}
                                        title={saveable.mealPeriodName}
                                        foto={imgUrl(saveable.imgPath)}
                                        sellerLogo={imgUrl(saveable.sellerLogo)}
                                        sellerName={saveable.sellerName}
                                        numberOfIngredients={saveable.numberOfIngredients}
                                        preparationTime={saveable.preparationTime}
                                        hideButtons
                                        hideCart
                                        hideBag
                                    />
                                </Link>
                            }

                            if (type === saveTypes.COMBO) {
                                return <Link key={id} to={`/combos/${saveable.slug}`}>
                                    <CardRecipes
                                        texto={saveable.name}
                                        price={saveable.price}
                                        foto={imgUrl(saveable.imgPath)}
                                        sellerLogo={imgUrl(saveable.sellerLogo)}
                                        sellerName={saveable.sellerName}
                                        numberOfIngredients={saveable.numberOfIngredients}
                                        numberOfItems={saveable.numberOfItems}
                                        hideButtons
                                        hideCart
                                        hideClock
                                    />
                                </Link>
                            }

                            if (type === saveTypes.PLAN) {
                                return <Link key={id} to={`/plan/${saveable.slug}`}>
                                    <CardRecipes
                                        title={saveable.name}
                                        texto={saveable.sellerName}
                                        price={saveable.price}
                                        foto={imgUrl(saveable.imgPath)}
                                        sellerLogo={imgUrl(saveable.sellerLogo)}
                                        sellerName={saveable.sellerName}
                                        numberOfIngredients={saveable.numberOfIngredients}
                                        numberOfItems={saveable.numberOfItems}
                                        hideButtons
                                        hideCart
                                        hideClock
                                    />
                                </Link>;
                            }
                        })}
                    </div>

                    <Pagination
                        activePage={filters.page}
                        onChange={(page) => setFilters(prevFilters => ({ ...prevFilters, page }))}
                        pages={numberOfPages}
                    />
                </div>
            </div>
        </div>
    );
}

export default Saves;