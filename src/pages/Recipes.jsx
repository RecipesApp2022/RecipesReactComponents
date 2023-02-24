import BannerPage from "../componentes/BannerPage";
import CardRecipes from "../componentes/CardRecipes";
import img1 from "../assets/img1.jpg";
import { Link, useSearchParams } from "react-router-dom";
import MenuLeft from "../componentes/MenuLeft";
import useRecipes from "../hooks/useRecipes";
import { useEffect, useState } from "react";
import Pagination from "../componentes/Pagination";
import ButtonOverview from "../componentes/ButtonOverview";
import imgUrl from "../helpers/imgUrl";
import { useAuth } from "../contexts/AuthContext";
import ModalOverlay from "../componentes/Modal/ModalOverlay";
import ModalContainer from "../componentes/Modal/ModalContainer";
import CategoriesRecipes from "../componentes/CategoriesRecipes";
import RatingComponent from "../componentes/RatingComponent";


const Recipes = () => {

  const { user } = useAuth();

  const [showModalMenu, setShowModalMenu] = useState(false);

  const [recipesFilters, setRecipesFilters] = useState({
    page: 1,
    perPage: 12,
    name: '',
    categoryIds: [],
    hideFavoritedForClientId: user?.id,
    rating: '',
    orderByMostPurchased: ''
  });

  const [searchParams] = useSearchParams();


  const [{ recipes, numberOfPages, loading }] = useRecipes({ params: { ...recipesFilters }, options: { useCache: false } });


  useEffect(() => {
    const categoryId = searchParams?.get('categoryId');

    const name = searchParams?.get('name');

    const orderByMostPurchased = searchParams?.get('orderByMostPurchased');

    if (categoryId) {
      setRecipesFilters((oldFilters) => {
        return {
          ...oldFilters,
          categoryIds: [categoryId],
          page: 1
        }
      });
    }

    if (name) {
      setRecipesFilters((oldFilters) => {
        return {
          ...oldFilters,
          name: name,
          page: 1
        }
      });
    }

    if (orderByMostPurchased) {
      setRecipesFilters((oldFilters) => {
        return {
          ...oldFilters,
          orderByMostPurchased: true,
          page: 1
        }
      });
    }

  }, [searchParams]);

  const handleCategory = (category) => {
    setRecipesFilters((oldRecipesFilters) => {
      return {
        ...oldRecipesFilters,
        page: 1,
        categoryIds: category?.id ? [category?.id] : []
      }
    });
  }

  return (
    <div className="">
      <BannerPage image={img1} title="New Recipes" />
      <div className="container md:p-8">
        {/* <ButtonSupr /> */}
      </div>
      <div className="p-6">
        <ButtonOverview name="Filter" onClick={() => setShowModalMenu(true)} />
        <p className="my-4"></p>
        <ButtonOverview name="Clear Filters" onClick={() => setRecipesFilters({
          page: 1,
          perPage: 12,
          name: '',
          categoryIds: [],
          hideFavoritedForClientId: user?.id,
          rating: ''
        })} />
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-2">
          <MenuLeft
            filters={recipesFilters}
            onClickCategory={handleCategory}
            onChangeRating={(rating) => {
              setRecipesFilters((oldRecipesFilters) => {
                return {
                  ...oldRecipesFilters,
                  rating: rating,
                  page: 1
                }
              })
            }}
          />
          <div className="mt-10 md:mt-0 md:col-span-3">
            {
              recipesFilters?.orderByMostPurchased &&
              <div className="text-center text-4xl mb-16">
                ⭐ Most Popular Recipes ⭐
              </div>
            }
            {
              recipesFilters?.name &&
              <div className="text-center text-4xl mb-16">
                Results for "{recipesFilters?.name}..."
              </div>
            }
            {
              loading &&
              <h1 className="text-4xl text-center">Cargando...</h1>
            }

            {
              recipes?.length === 0 && !loading ?
                <h1 className="text-4xl text-center text-red-500">
                  No results found.
                </h1>
                :
                null
            }
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:grid-cols-3 md:mr-5">
              {
                recipes?.map((recipe) => {
                  return (
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
                  );
                })}
            </div>
            <br />
            <Pagination
              pages={numberOfPages}
              onChange={(page) => setRecipesFilters((oldFilters) => { return { ...oldFilters, page: page } })}
              activePage={recipesFilters?.page}
            />
          </div>
        </div>
      </div>
      <ModalOverlay onClose={() => setShowModalMenu(false)} show={showModalMenu}  >
        <ModalContainer onClose={() => setShowModalMenu(false)}>
          <div className="rounded-lg shadow">
            <CategoriesRecipes onClickCategory={handleCategory} values={recipesFilters?.categoryIds} />
          </div>
          <div className="p-4 mt-6 bg-white m-auto md:w-40 rounded-lg shadow">
            <h1 className="title-medium mt-2 mb-6">Rating</h1>
            <div className="flex items-center space-between flex-wrap">
              <RatingComponent
                onClickStar={(rating) => {
                  setRecipesFilters((oldRecipesFilters) => {
                    return {
                      ...oldRecipesFilters,
                      rating: rating,
                      page: 1
                    }
                  })
                }}
                value={recipesFilters?.rating}
              />
              {
                recipesFilters?.rating &&
                <button className="bg-main rounded-xl text-white px-4 py-1"
                  onClick={() => {
                    setRecipesFilters((oldRecipesFilters) => {
                      return {
                        ...oldRecipesFilters,
                        rating: '',
                        page: 1
                      }
                    })
                  }}
                >
                  Clear
                </button>
              }
            </div>
          </div>
        </ModalContainer>
      </ModalOverlay>
    </div >
  );
};
export default Recipes;
