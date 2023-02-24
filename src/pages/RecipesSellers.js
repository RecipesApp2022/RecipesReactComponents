import BannerChef from "../componentes/BannerChef";
import CardRecipes from "../componentes/CardRecipes";
import InformationChef from "../componentes/InformationChef";
import CertificationChef from "../componentes/CertificationChef";
import DescriptionChef from "../componentes/DescriptionChef";
import Post from "../componentes/Post";
import ButtonItems from "../componentes/ButtonItems";
import SelectOrder from "../componentes/SelectOrder";
import { Link, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";
import { useFeedBack } from "../contexts/FeedBackContext";
import useRecipes from "../hooks/useRecipes";
import SystemInfo from "../util/SystemInfo";
import Pagination from "../componentes/Pagination";
import imgUrl from "../helpers/imgUrl";
import ContactSeller from "../componentes/Sellers/ContactSeller";

const RecipesChef = () => {
  const { slug } = useParams();
  const { setLoading } = useFeedBack();
  const [plansFilters, setPlansFilters] = useState({
    page: 1,
    perPage: 9,
  });

  const [{ data: seller, loading: sellerLoading }] = useAxios({ url: `/sellers/${slug}` });

  const [{ recipes, numberOfPages, loading }] = useRecipes({ params: { sellerId: seller?.sellerId } });

  useEffect(() => {
    setLoading({ message: "Cargando...", show: sellerLoading });
  }, [sellerLoading, setLoading]);

  return (
    <div className="md:min-w-0">
      <BannerChef seller={seller} title="New Recipes" />
      <div className="px-16 py-10">
        <div className="flex justify-center">
          <ButtonItems defaultCategory="recipes" seller={seller} />
        </div>
        <div className="md:flex md:justify-end m-2 ">
          <SelectOrder />
        </div>
      </div>

      <div className="md:flex p-4 flex-wrap md:flex-nowrap">
        <div className="w-full md:w-[300px] md:shrink-0 bg-white mb-10 md:mb-20 md:ml-8 rounded-lg">
          <div className="p-4">
            <InformationChef seller={seller} />
            <CertificationChef seller={seller} />
            <DescriptionChef seller={seller} />
            <Post />
            <ContactSeller seller={seller} />
          </div>
        </div>
        <div className="md:w-full">
          {loading && <h1 className="text-4xl text-center">Cargando...</h1>}
          {recipes?.length === 0 && !loading ? (
            <h1 className="text-4xl text-center text-red-500">
              No results found.
            </h1>
          ) : null}
          <div className="grid md:grid-cols-3 md:gap-4 md:mb-20 md:ml-20 md:mt-2">
            {recipes.map((recipe) => {
              return (
                <Link to={`/recipes/${recipe.slug}`} key={recipe.id}>
                  <CardRecipes
                    key={recipe.id}
                    texto={recipe.name}
                    price={recipe?.price}
                    sellerLogo={imgUrl(recipe.seller.logo)}
                    sellerName={recipe.seller.name}
                    title={recipe.mealPeriods.map(mp => mp.name).join(' - ')}
                    foto={`${SystemInfo?.api}${recipe?.images?.[0]?.path}`}
                    numberOfIngredients={recipe.recipeIngredients.length}
                    preparationTime={recipe.preparationTime}
                    hideButtons
                    hideBag
                    hideCart
                  />
                </Link>
              );
            })}
          </div>
          <Pagination
            pages={numberOfPages}
            onChange={(page) => setPlansFilters((oldFilters) => { return { ...oldFilters, page: page } })}
            activePage={plansFilters?.page}
          />

        </div>
        <Pagination
          pages={numberOfPages}
          onChange={(page) =>
            setPlansFilters((oldFilters) => {
              return { ...oldFilters, page: page };
            })
          }
          activePage={plansFilters?.page}
        />
      </div>
    </div>
  );
};
export default RecipesChef;
