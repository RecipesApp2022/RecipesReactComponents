import clsx from "clsx";
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import imgUrl from "../helpers/imgUrl";

const ProductImagesCarousel = ({ images = [], productName }) => {
  const [swiper, setSwiper] = useState(null);

  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  return <div className="hidden md:block">
    <div className="relative">
      <Swiper
        onSwiper={setSwiper}
        onSlideChange={(swiper) => setActiveSlideIndex(swiper.activeIndex)}
        autoHeight={true}
      >
        {
          images?.length > 0 && images?.map(image => <SwiperSlide key={image.id} zoom={{ maxRatio: 2 }}>
            <div className="swiper-zoom-container">
              <img
                src={imgUrl(image.path)}
                alt={productName}
                className="rounded-xl w-full h-96"
              />
            </div>
          </SwiperSlide>)}
      </Swiper>
    </div>
    <div className="flex justify-center mt-6 space-x-3">
      {images?.length > 0 &&
        images?.map((image, i) => <img
          key={image.id}
          src={imgUrl(image.path)}
          alt={productName}
          className={clsx(
            'h-20 w-20 rounded-xl border border-gray-100 rounded shadow hover:shadow-md cursor-pointer',
            activeSlideIndex === i && 'ring-2 ring-blue-300 ring-opacity-75'
          )}
          onClick={() => swiper.slideTo(i)}
        />)}
    </div>
  </div>;
};

export default ProductImagesCarousel;