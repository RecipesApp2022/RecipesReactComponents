import clsx from "clsx";
import { forwardRef } from "react";

const CategorySectionCard = forwardRef(({
    className,
    img,
    name,
    categoryId,
    withoutPaddingY = false,
    withoutBgCover = false,
}, ref) => {
    return (
        <a href={`/recipes?categoryId=${categoryId}`}>
            <div
                ref={ref}
                className={clsx(`
                flex items-center justify-center
                relative 
                w-full
                rounded-md
                transition transform hover:-translate-y-1
                hover:drop-shadow-2xl
                duration-300
                cursor-pointer
            `, {
                    'py-10': !withoutPaddingY,
                    'bg-cover': !withoutBgCover,
                }, className)}
                style={{ backgroundImage: `url(${img})`, backgroundSize: "100% 100%" }}
            >
                <div className='rounded-md absolute bg-black h-full w-full opacity-30' >
                </div>
                <div className="relative text-white text-center text-2xl" style={{ textShadow: "0px 0px 3px #000000" }} >
                    {name}
                </div>
            </div>
        </a>
    );
})

export default CategorySectionCard;