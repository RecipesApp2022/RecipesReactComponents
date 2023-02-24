import { Link } from "react-router-dom";
import CardRecipes from "../componentes/CardRecipes";
import Tacos from "../assets/Tacos.jpg";
import { TabsProvider } from "../contexts/TabsContext";
import TabPanel from "../componentes/TabPanel";
import Tab from "../componentes/Tab";
import TabsContainer from "../componentes/TabsContainer";
import Collage from "../assets/ImgCombos.jpeg";
import useFavorites from "../hooks/useFavorites";
import { useAuth } from "../contexts/AuthContext";
import imgUrl from "../helpers/imgUrl";

const MyFavoritesUser = () => {
    const { user } = useAuth();
    
    const [{ favorites: favoriteRecipes }] = useFavorites({ params: { clientId: user?.id, types: 'recipe' } });
    const [{ favorites: favoritePlanAndCombos }] = useFavorites({ params: { clientId: user?.id, types: 'plan,combo' } });

    return (
        <div className="flex">
            <div className="container md:p-20 p-4 md:h-full md:w-full mb-20">
                <p className="md:text-4xl text-2xl text-center md:text-justify font-bold text-black mb-6 md:mb-12">My Favorites</p>
                <div className="bg-white p-2 md:p-10 rounded-lg md:h-full md:w-full shadow">
                    <TabsProvider>
                        {/* Tabs */}
                        <TabsContainer className="flex md:m-10 m-4 text-center items-center space-x-4 md:space-x-10">
                            <Tab value={0}>Recipes</Tab>
                            <Tab value={1}>Plans and Combos</Tab>
                        </TabsContainer>
                        {/* TAB PANELS */}
                        {/* Recipes */}
                        <div className="mt-4 p-4">
                            <TabPanel className="animate__animated animate__fadeInUp bg-white rounded-lg" value={0}>
                                <div className="md:grid md:grid-cols-3 md:gap-10 grid grid-cols-1 gap-5">
                                    {favoriteRecipes.map(({id, favoritable}) => <Link
                                        key={id}
                                        to={`/recipes/${favoritable.slug}`}
                                    >
                                        <CardRecipes
                                            texto={favoritable.name}
                                            price={favoritable.price}
                                            title={favoritable.mealPeriodName}
                                            foto={imgUrl(favoritable.imgPath)}
                                            sellerLogo={imgUrl(favoritable.sellerLogo)}
                                            sellerName={favoritable.sellerName}
                                            numberOfIngredients={favoritable.numberOfIngredients}
                                            preparationTime={favoritable.preparationTime}
                                            hideButtons
                                            hideCart
                                            hideBag
                                        />
                                    </Link>)}
                                </div>
                            </TabPanel>
                            {/* Plans and combos */}
                            <TabPanel className="animate__animated animate__fadeInUp bg-white rounded-lg" value={1}>
                                <div className="md:grid md:grid-cols-3 md:gap-10 grid grid-cols-1 gap-5">
                                    {favoritePlanAndCombos.map(({id, type, favoritable}) => <Link
                                        key={id}
                                        to={`/${type}s/${favoritable.slug}`}
                                    >
                                        <CardRecipes
                                            parrafo={favoritable.sellerName}
                                            price={favoritable.price}
                                            foto={imgUrl(favoritable.imgPath)}
                                            sellerLogo={imgUrl(favoritable.sellerLogo)}
                                            sellerName={favoritable.sellerName}
                                            numberOfIngredients={favoritable.numberOfIngredients}
                                            numberOfItems={favoritable.numberOfItems}
                                            hideButtons
                                            hideCart
                                            hideClock
                                        />
                                    </Link>)}
                                </div>
                            </TabPanel>
                        </div>
                    </TabsProvider>
                </div>
            </div>
        </div>
    );
}

export default MyFavoritesUser;