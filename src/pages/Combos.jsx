import React, { useEffect, useState } from "react";
import BannerPage from "../componentes/BannerPage";
import CardRecipes from "../componentes/CardRecipes";
import img1 from "../assets/img1.jpg";
import { Link, useSearchParams } from "react-router-dom";
import MenuLeft from "../componentes/MenuLeft";
import ButtonOverview from "../componentes/ButtonOverview";
import ModalFiltre from "../componentes/ModalFiltre";
import SystemInfo from "../util/SystemInfo";
import useCombos from "../hooks/useCombos";
import Pagination from "../componentes/Pagination";
import imgUrl from "../helpers/imgUrl";
import { useAuth } from "../contexts/AuthContext";
import Modal from "../componentes/Modal/Modal";
import CategoriesRecipes from "../componentes/CategoriesRecipes";
import RatingComponent from "../componentes/RatingComponent";
import ButtonRank from "../componentes/ButtonRank";
import ModalContainer from "../componentes/Modal/ModalContainer";
import ModalOverlay from "../componentes/Modal/ModalOverlay";

const Combos = () => {

  const { user } = useAuth();

  const [showModalMenu, setShowModalMenu] = useState(false);

  const [searchParams] = useSearchParams();

  const [combosFilters, setCombosFilters] = useState({
    page: 1,
    perPage: 12,
    name: '',
    categoryIds: [],
    hideFavoritedForClientId: user?.id,
    rating: '',
    orderByMostPurchased: ''
  });

  const [{ combos, total, numberOfPages, size, error, loading }, getCombos] = useCombos({ params: { ...combosFilters }, options: { useCache: false } });

  useEffect(() => {
    const categoryId = searchParams?.get('categoryId');

    const name = searchParams?.get('name');

    const orderByMostPurchased = searchParams?.get('orderByMostPurchased');

    if (categoryId) {
      setCombosFilters((oldFilters) => {
        return {
          ...oldFilters,
          categoryIds: [categoryId],
          page: 1
        }
      });
    }

    if (name) {
      setCombosFilters((oldFilters) => {
        return {
          ...oldFilters,
          name: name,
          page: 1
        }
      });
    }

    if (orderByMostPurchased) {
      setCombosFilters((oldFilters) => {
        return {
          ...oldFilters,
          orderByMostPurchased: true,
          page: 1
        }
      });
    }

  }, [searchParams]);

  const handleCategory = (category) => {
    setCombosFilters((oldCombosFilters) => {
      return {
        ...oldCombosFilters,
        page: 1,
        categoryIds: category?.id ? [category?.id] : []
      }
    });
  }

  return (
    <div className="">
      <BannerPage image={img1} title="Combos" />
      <div className="container md:p-8">
        {/* <ButtonSupr /> */}
      </div>
      <div className="p-6">
        <ButtonOverview name="Filter" onClick={() => setShowModalMenu(true)} />
        <p className="my-4"></p>
        <ButtonOverview name="Clear Filters" onClick={() => setCombosFilters({
          page: 1,
          perPage: 12,
          name: '',
          categoryIds: [],
          hideFavoritedForClientId: user?.id,
          rating: ''
        })} />
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-2">
          <MenuLeft
            filters={combosFilters}
            onClickCategory={handleCategory}
            onChangeRating={(rating) => {
              setCombosFilters((oldCombosFilters) => {
                return {
                  ...oldCombosFilters,
                  rating: rating,
                  page: 1
                }
              })
            }}
          />
          <div className="mt-10 md:mt-0 md:col-span-3">
            {
              combosFilters?.orderByMostPurchased &&
              <div className="text-center text-4xl mb-16">
                ⭐ Most Popular Combos ⭐
              </div>
            }
            {
              combosFilters?.name &&
              <div className="text-center text-4xl mb-16">
                Results for "{combosFilters?.name}..."
              </div>
            }
            {
              loading &&
              <h1 className="text-4xl text-center">
                loading...
              </h1>
            }
            {
              combos?.length === 0 && !loading ?
                <h1 className="text-4xl text-center text-red-500">
                  No results found.
                </h1>
                :
                null
            }
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:grid-cols-3 md:mr-5">
              {
                combos?.map((combo, i) => {
                  return (
                    <Link to={`/combos/${combo.slug}`} key={combos.id}>
                      <CardRecipes
                        key={combo.id}
                        texto={combo.name}
                        price={combo.price}
                        numberOfIngredients={combo.numberOfIngredients}
                        numberOfItems={combo.numberOfItems}
                        sellerName={combo.seller.name}
                        sellerLogo={imgUrl(combo.seller.logo)}
                        foto={`${SystemInfo?.api}${combo?.images?.[0]?.path}`}
                        title={combo.name}
                        hideCart
                        hideClock
                        rating={combo?.rating}
                        // hideBag
                        hideButtons
                      />
                    </Link>
                  );
                })}
            </div>
            <br />
            <Pagination
              pages={numberOfPages}
              onChange={(page) => setCombosFilters((oldFilters) => { return { ...oldFilters, page: page } })}
              activePage={combosFilters?.page}
            />
          </div>
        </div>
      </div>
      <ModalOverlay onClose={() => setShowModalMenu(false)} show={showModalMenu}  >
        <ModalContainer onClose={() => setShowModalMenu(false)}>
          <div className="rounded-lg shadow">
            <CategoriesRecipes onClickCategory={handleCategory} values={combosFilters?.categoryIds} />
          </div>
          <div className="p-4 mt-6 bg-white m-auto md:w-40 rounded-lg shadow">
            <h1 className="title-medium mt-2 mb-6">Rating</h1>
            <div className="flex items-center space-between flex-wrap">
              <RatingComponent
                onClickStar={(rating) => {
                  setCombosFilters((oldCombosFilters) => {
                    return {
                      ...oldCombosFilters,
                      rating: rating,
                      page: 1
                    }
                  })
                }}
                value={combosFilters?.rating}
              />
              {
                combosFilters?.rating &&
                <button className="bg-main rounded-xl text-white px-4 py-1"
                  onClick={() => {
                    setCombosFilters((oldCombosFilters) => {
                      return {
                        ...oldCombosFilters,
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
export default Combos;
