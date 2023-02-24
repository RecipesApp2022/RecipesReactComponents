import category from "../assets/category3.jpg"
import CategorySectionCard from "./CategorySectionCard";
import React from 'react';
import SesionCategory from "./SesionCategory";
import VideoCategory from "./VideoCategory";

const CategoriesVideo = () => {
    return (
        <div className="bg-white">
            <div className="container p-4 ">
                <SesionCategory />
                <div className=" md:p-8 md:flex">
                    <div className="md:w-8/12 p-1">
                        <VideoCategory />
                    </div>
                    <div className="md:w-4/12 p-2 ">
                        <CategorySectionCard
                            img={category}
                            name="Paleo"
                            className={"py-40 bg-full"}
                            withoutPaddingY
                            withoutBgCover
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CategoriesVideo;