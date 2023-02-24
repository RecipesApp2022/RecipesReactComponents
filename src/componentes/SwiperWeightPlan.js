import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import WeightPlan from '../componentes/WeightPlan';
import { Navigation } from "swiper";
import usePlans from "../hooks/usePlans";
import SystemInfo from "../util/SystemInfo";

const SwiperWeightPlan = () => {
    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    const [filters, setFilters] = useState({
        page: 1,
        perPage: 10,
        hideClientPlans: 'true'
    })

    const [{ plans }] = usePlans({
        params: {
            ...filters
        }
    });

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
                slidesPerView={innerWidth > 768 ? 3 : 1}
                spaceBetween={20}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper m-auto "
            >
                {plans.map(plan => <SwiperSlide key={plan.id}>
                    <WeightPlan
                        price={`${plan?.price}$`}
                        hideCart
                        logo={`${SystemInfo.api}${plan?.seller?.logo}`}
                        img={`${SystemInfo.api}${plan?.images?.[0]?.path}`}
                        title={plan?.name}
                        text={plan?.description}
                    />
                </SwiperSlide>)}
            </Swiper>
        </div>
    );
}

export default SwiperWeightPlan;