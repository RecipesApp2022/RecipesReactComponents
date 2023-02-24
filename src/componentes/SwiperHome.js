import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";// Import Swiper React components
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import { Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SearchHome from "../componentes/SearchHome";

const SwiperHome = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const resizeHandler = () => {
            setInnerWidth(window.innerWidth);
        };

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, []);
    return (
        <div className='relative'>
            <Swiper
                slidesPerView={innerWidth > 768 ? 1 : 1}
                spaceBetween={30}
                loop={true}
                pagination={{ clickable: true, }}
                navigation={true}
                style={{ padding: innerWidth > 768 ? '0' : 10 }}
                modules={[Pagination, Navigation]}
                className="mySwiper">

                <SwiperSlide>
                    <img className="w-full h-40 md:h-72" src={img1} alt="img1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-40 md:h-72" src={img2} alt="img2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img className="w-full h-40 md:h-72" src={img3} alt="imh3" />
                </SwiperSlide>
            </Swiper>
            <SearchHome />
        </div>
    );
}
export default SwiperHome; 