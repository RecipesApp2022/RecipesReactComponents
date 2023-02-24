import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import PopularSearch from '../componentes/PopularSearch';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Popular1 from '../assets/popular1.jpg';
import Popular2 from '../assets/popular2.jpg';
import { Navigation } from "swiper";

const SwiperPopular = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const resizeHandler = () => {
            setInnerWidth(window.innerWidth);
        };

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    return (
        <div className="container px-8">
            <Swiper
                slidesPerView={innerWidth > 768 ? 2 : 1}
                spaceBetween={20}
                navigation={true}
                loop={true}
                modules={[Navigation]}
                style={{ padding: innerWidth > 768 ? '0' : 10 }}
                className="mySwiper "
            >
                <SwiperSlide>
                    <PopularSearch
                        url={`/recipes?orderByMostPurchased=true`}
                        title="Popular Recipes"
                        img={Popular1}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <PopularSearch
                        url={`/plans?orderByMostPurchased=true`}
                        title="Popular Meal Planners"
                        img={Popular2}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
export default SwiperPopular;
