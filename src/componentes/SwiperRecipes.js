import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Recipes from '../componentes/Recipes';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Pasticho from '../assets/pasticho.png';
import Bebida from '../assets/bebida.png';
import { Navigation } from "swiper";
import useRecipes from "../hooks/useRecipes";
import SystemInfo from "../util/SystemInfo";

const SwiperRecipes = () => {

    const [innerWidth, setInnerWidth] = useState(window.innerWidth);

    const [{ recipes, total, numberOfPages, size, error, loading }, getRecipes] = useRecipes();

    useEffect(() => {
        const resizeHandler = () => {
            setInnerWidth(window.innerWidth);
        };

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    }, []);

    return (
        <div className="p-8">
            <Swiper
                slidesPerView={innerWidth > 600 ? 2 : 1}
                spaceBetween={40}
                loop={true}
                navigation={true}
                modules={[Navigation]}
                className="mySwiper m-auto"
            >
                {
                    recipes?.map((recipe, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <Recipes
                                    title={recipe?.name}
                                    descsh={recipe?.description}
                                    cost={`$${recipe?.price}`}
                                    desccost="Pescription cost"
                                    level={recipe?.recipeDifficulty?.name}
                                    time={`${recipe?.preparationTime} Minutes`}
                                    ing={`${recipe?.recipeIngredients?.length} pcs`}
                                    img={`${SystemInfo?.api}${recipe?.images?.[0]?.path}`}
                                />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    );
}

export default SwiperRecipes;