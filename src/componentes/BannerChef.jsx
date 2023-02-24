import { BsStarFill } from "react-icons/bs";
import cheque from "../assets/cheque.png";
import { Link } from "react-router-dom";
import imgUrl from "../helpers/imgUrl";
import RatingComponent from "./RatingComponent";
import Modal from "./Modal/Modal";
import { useState } from "react";
import useSellersRatings from "../hooks/useSellersRatings";
import { useEffect } from "react";


const BannerChef = ({ seller }) => {

  const [showCustomersReviews, setShowCustomersReviews] = useState(false);

  const [currentReviews, setCurrentReviews] = useState([]);

  const [filters, setFilters] = useState({
    page: 1,
    orderBy: 'createdAt,DESC',
    sellerId: ''
  });

  const [{ sellersRatings, numberOfPages: ratingPages, total: totalReviews, loading: loadingRatings }, getRatings] = useSellersRatings({ params: { ...filters }, options: { manual: true, useCache: false } });

  useEffect(() => {
    if (filters?.sellerId) {
      getRatings({
        params: {
          ...filters
        }
      });
    }
  }, [filters])

  useEffect(() => {
    if (sellersRatings?.length > 0) {
      setCurrentReviews((oldReviews) => {
        return [...oldReviews, ...sellersRatings];
      });
    }
  }, [sellersRatings]);

  useEffect(() => {
    if (seller?.sellerId) {
      setFilters((oldFilters) => {
        return {
          ...oldFilters,
          sellerId: seller?.sellerId
        }
      })
    }
  }, [seller?.sellerId])

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
    <div
      className="md:h-96 flex justify-center items-center"
      style={{ backgroundImage: `url(${imgUrl(seller?.banner)})`, backgroundSize: "100% 100%" }}
    >
      <div className="h-full w-full" style={{ background: "rgba(0,0,0, .5)" }}>
        <Link to={`/sellers/${seller?.slug}/blog`}>
          <div className="flex justify-center items-center p-6">
            <img src={imgUrl(seller?.logo)}
              className="md:h-52 md:w-52 w-20 h-20 rounded-full items-center" alt="" />
          </div>
        </Link>
        <div className="text-center text-white font-sans">
          <div className="flex justify-center text-center">
            <p className="md:text-4xl text-center font-bold text-ellipsis">{(seller?.name)}</p>
            <img src={cheque} alt="" className="md:mt-4 md:ml-3 m-1 text-main w-5 h-5" />
          </div>

          <p className="md:text-2xl">{(seller?.shortDescription)}</p>
          <div onClick={() => setShowCustomersReviews(true)} className="flex items-center justify-center cursor-pointer">
            <RatingComponent
              disabled
              value={seller?.rating}
            />
            ({totalReviews} customers reviews)
          </div>
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

export default BannerChef;
