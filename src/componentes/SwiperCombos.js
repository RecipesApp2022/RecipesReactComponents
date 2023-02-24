import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import useCombos from "../hooks/useCombos";
import SystemInfo from "../util/SystemInfo";
import CardRecipes from "../componentes/CardRecipes";
import imgUrl from "../helpers/imgUrl";

const SwiperCombos = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);
    const [{ combos }] = useCombos();

    useEffect(() => {
        const resizeHandler = () => {
            setInnerWidth(window.innerWidth);
        };

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, []);
    return (
        <>
            <Swiper
                slidesPerView={innerWidth > 768 ? 3 : 1}
                spaceBetween={90}
                loop={true}
                navigation={true}
                style={{ padding: innerWidth > 768 ? '0' : 10 }}
                modules={[Navigation]}
                className="mySwiper m-auto"
            >
                {combos.map((combo, i) => <SwiperSlide key={i}>
                    <CardRecipes
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
                        hideButtons
                    //hideBag
                    />
                </SwiperSlide>)}
            </Swiper>

        </>
    );
}

export default SwiperCombos;