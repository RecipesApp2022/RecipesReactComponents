import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";

const SwiperOverview = () => {
    return (
        <>
            <Swiper
                slidesPerView={4}
                spaceBetween={20}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper ml-10"
            >
                <SwiperSlide className="ml-10">
                    <p className="text-white font-bold text-4xl">Main</p>
                </SwiperSlide>

                <SwiperSlide>
                    <p className="text-white font-bold text-4xl">Sindes</p>
                </SwiperSlide>

                <SwiperSlide>
                    <p className="text-white font-bold text-4xl">Dessert</p>
                </SwiperSlide>

                <SwiperSlide>
                    <p className="text-white font-bold text-4xl">Soup</p>
                </SwiperSlide>

                <SwiperSlide>
                    <p className="text-white font-bold text-4xl">Salad</p>
                </SwiperSlide>

                <SwiperSlide className="ml-10">
                    <p className="text-white font-bold text-4xl">Juices</p>
                </SwiperSlide>
            </Swiper>
        </>
    );
}
export default SwiperOverview;
