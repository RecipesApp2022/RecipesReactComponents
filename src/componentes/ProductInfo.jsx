import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import { BsFillEmojiLaughingFill } from "react-icons/bs";
import { IoHeartOutline, IoHeart } from "react-icons/io5";
import ShowMoreButton from "./ShowMoreButton";
import favoriteReactions from "../consts/favoriteReactions"
import useAxios from "../hooks/useAxios";
import { useEffect } from "react";
import usePaymentMethods from "../hooks/usePaymentMethods";
import imgUrl from "../helpers/imgUrl";
import { useFeedBack } from "../contexts/FeedBackContext";
import RatingComponent from "./RatingComponent";
import { useState } from "react";
import Modal from "./Modal/Modal";
import useRatings from "../hooks/useRatings";
import { Link } from "react-router-dom";

const ProductInfo = ({
  name,
  description,
  ingredients = [],
  maxIngredientsCount = 8,
  onFavoriteClicked,
  onSaveClicked,
  haveDiscount,
  price,
  detailsLabel,
  details,
  maxDetailsCount = 8,
  saved = false,
  isPremiun,
  type,
  sellerId,
  productId,
  productType,
  rating,
  alreadyAcquired
}) => {

  const { setLoading } = useFeedBack();

  const [filters, setFilters] = useState({
    page: 1,
    orderBy: 'createdAt,DESC',
    itemId: productId,
    itemType: productType
  });

  const [showCustomersReviews, setShowCustomersReviews] = useState(false);

  const [currentReviews, setCurrentReviews] = useState([]);

  const [{ data: createOrderData, loading: createOrderLoading }, createOrder] = useAxios({ method: 'POST', url: `/orders` }, { manual: true, useCache: false });

  const [{ paymentMethods, total, numberOfPages, size, error, loading }, getPaymentMethods] = usePaymentMethods();

  const [{ ratings, numberOfPages: ratingPages, total: totalReviews, loading: loadingRatings }, getRatings] = useRatings({ params: { ...filters }, options: { manual: true, useCache: false } });

  useEffect(() => {
    if (filters?.itemId && filters?.itemType) {
      getRatings({
        params: {
          ...filters
        }
      });
    }
  }, [filters])

  useEffect(() => {
    if (productId && productType) {
      setFilters((oldFilters) => {
        return {
          ...oldFilters,
          itemId: productId,
          itemType: productType
        }
      })
    }
  }, [productId, productType])

  useEffect(() => {
    if (ratings?.length > 0) {
      setCurrentReviews((oldReviews) => {
        return [...oldReviews, ...ratings];
      });
    }
  }, [ratings]);

  useEffect(() => {
    setLoading({
      show: createOrderLoading,
      message: 'Loading'
    })
  }, [createOrderLoading])

  useEffect(() => {
    if (createOrderData) {
      if (createOrderData?.url) {
        window.open(createOrderData?.url, "_blank");
      } else {
        console.log(createOrderData);
      }
    }
  }, [createOrderData])

  const handleFavoriteClicked = (reaction) => () => onFavoriteClicked?.({ type, reaction });

  const handleSaveClicked = () => onSaveClicked?.({ type });

  const handleBuy = (paymentMethodCode) => {
    if (!alreadyAcquired) {
      createOrder({
        data: {
          sellerId,
          productId,
          type: productType,
          paymentMethodCode: paymentMethodCode || null
        }
      });
    }
  }

  const handleMore = () => {
    if (ratingPages > filters?.page) {
      setFilters((oldFilters) => {
        return {
          ...oldFilters,
          page: oldFilters?.page + 1
        }
      });
    }
  }

  return (
    <div className="w-full md:w-1/2 md:px-8">
      <div className="md:flex items-center text-3xl md:justify-between">
        <h1 className="font-bold text-2xl md:ml-1 md:block w-full text-center md:text-left">{name}</h1>
        <div className="md:flex space-x-4 md:m-2 md:m-auto mt-4 flex justify-center ">
          <button
            className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn"
            onClick={handleFavoriteClicked(favoriteReactions.DISLIKE)}
            data-tip="I don't like this!"
          >
            <AiOutlineClose className="text-red-500" />
          </button>
          <button
            className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn"
            onClick={handleFavoriteClicked(favoriteReactions.LIKE)}
            data-tip="I like this!"
          >
            <AiOutlineCheck className="text-green-700" />
          </button>
          <button
            className="bg-white rounded-full py-1 px-1 shadow-2xl recipe-btn"
            onClick={handleFavoriteClicked(favoriteReactions.LOVE_IT)}
            data-tip="Great!"
          >
            <BsFillEmojiLaughingFill className="text-yellow-300" />
          </button>
        </div>
      </div>

      <div className="flex items-center">
        <RatingComponent
          disabled
          value={rating}
        />
        <p className="text-gray-300 text-lg m-2 underline cursor-pointer" onClick={() => { setShowCustomersReviews(true) }} >
          ({totalReviews} customer review)
        </p>
      </div>
      <div className="bg-white rounded-lg p-4">
        <div className="text-lg">
          {description
            ? <>
              <p>{description}</p>
            </>
            : <>
              <h4 className="font-semibold mb-3">{detailsLabel}</h4>
              {details?.slice(0, maxDetailsCount).map((detail, i) => (
                <a key={i} style={{ display: 'block' }} href={detail.uri}>{detail?.name}</a>
              ))}
              {ingredients?.slice(0, maxIngredientsCount).map((ingredient, i) => (
                <div key={i}>{ingredient.value} {ingredient.measurementUnit.name.toLowerCase()} of {ingredient.ingredient.name}</div>
              ))}
              {
                productType === 'plan' || productType === 'combo' ?
                  <ShowMoreButton
                    buttonText="Show more"
                    content={details?.slice(maxDetailsCount).map((detail, i) => (
                      <a key={i} href={detail.uri}>{detail?.name}</a>
                    ))}
                  />
                  :
                  null
              }
              {
                productType === 'recipe' ?
                  <ShowMoreButton
                    buttonText="Show more"
                    content={ingredients?.slice(maxIngredientsCount).map((ingredient, i) => (
                      <div key={i}>{ingredient.value} {ingredient.measurementUnit.name.toLowerCase()} of {ingredient.ingredient.name}</div>
                    ))}
                  />
                  :
                  null
              }
            </>
          }
        </div>
      </div>
      <div>
        <div className="text-main text-3xl font-semibold">
          {
            alreadyAcquired ?
              <div className="text-center mt-8">
                You already have this product.
                <br />
                <br />
                <div className="flex items-center justify-center">
                  <Link to={`/purchases-products`} className="bg-main text-white px-8 py-2 rounded-xl">
                    Go to my Inventory
                  </Link>
                </div>
              </div>
              :
              <div className="mt-8 flex items-center justify-between">

                <p className="text-main">{price}</p>
                {
                  isPremiun ?
                    <div className="w-1/2">
                      <h1 className="text-xl text-gray-500 mb-4">
                        Pay with:
                      </h1>
                      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2 justify-center">
                        {
                          paymentMethods?.map((payment, i) => {
                            return (
                              <button key={i} className="py-2 rounded-xl text-center text-white capitalize" onClick={() => handleBuy(payment?.code)}>
                                <img src={imgUrl(payment?.image)} alt="" style={{ maxWidth: '100%' }} />
                              </button>
                            )
                          })
                        }
                      </div>
                    </div>
                    :
                    <button className="bg-main px-8 py-2 rounded-xl text-white" onClick={() => {
                      if (!createOrderData) {
                        handleBuy(null)
                      } else {
                        window.open(`/orders/${createOrderData?.order?.id}`);
                      }
                    }}>
                      {
                        createOrderLoading ?
                          'Loading'
                          :
                          createOrderData ?
                            'View Details'
                            :
                            'Add free'
                      }
                    </button>
                }

                {
                  haveDiscount &&
                  <p className="text-gray-400 text-sm">$48.56</p>
                }
              </div>
          }
        </div>
      </div>
      <Modal show={showCustomersReviews} onClose={() => setShowCustomersReviews(false)}>
        <div style={{ maxHeight: '70vh', overflowY: 'auto' }} className="custom-scrollbar custom-scrollbar-main">
          <h1 className="text-center text-xl font-bold">
            Customers Reviews ({totalReviews})
          </h1>
          {
            currentReviews?.length > 0 ?
              currentReviews?.map((review, i) => {
                return (
                  <div key={i} className="py-4 border-b border-main">
                    <div className="flex items-center space-x-4">
                      <img src={imgUrl(review?.client?.imgPath)} style={{ height: 50, width: 50 }} className="rounded-full" />
                      <p className="text-gray-500 font-bold">
                        {review?.client?.name}
                        <RatingComponent
                          disabled
                          value={review?.value}
                          size="sm"
                        />
                      </p>
                    </div>
                    <br />
                    <p className="text-gray-500">
                      {review?.comment}
                    </p>
                  </div>
                )
              })
              :
              <div className="text-center text-red-500 text-xl">
                No results found.
              </div>
          }
          {
            loadingRatings ?
              <div className="text-center my-4">
                Loading more reviews...
              </div>
              :
              ratingPages > filters?.page ?
                <div className="text-center">
                  <button onClick={handleMore} className="bg-white px-8 py-2 rounded-full shadow mt-4 mb-4">
                    Load More
                  </button>
                </div>
                :
                <div className="text-center my-4">
                  No more reviews.
                </div>
          }
        </div>
      </Modal>
    </div>
  );
};

export default ProductInfo;
