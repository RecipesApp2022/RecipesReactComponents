import imgUrl from "../helpers/imgUrl";

const GridComponent = ({ recipe, onHandleRecipe }) => {
    return (
        <li className="text-center my-2">
            <div style={{
                backgroundImage: `url(${imgUrl(recipe?.images?.[0]?.path)})`,
                backgroundSize: 'cover',
                borderRadius: '10px',
                backgroundPosition: 'center center'
            }}
                className="h-24 sm:h-20 md:h-24 sm:w-20 md:w-24 m-auto"
            ></div>
            <p className="py-4 px-2" title={recipe?.name}>
                {
                    recipe?.name?.length > 16 ?
                        `${recipe?.name?.slice(0, 16)}...`
                        :
                        recipe?.name
                }
            </p>
            <button className="py-1 rounded-xl bg-main text-white w-full" onClick={() => onHandleRecipe?.(recipe)}>
                Add
            </button>
        </li>
    )
}
export default GridComponent;