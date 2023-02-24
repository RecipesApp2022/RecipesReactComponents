import imgUrl from "../helpers/imgUrl";

const ListComponent = ({ recipe, onHandleRecipe }) => {
    return (
        <li style={{ height: '60px' }} className="bg-gray-200 rounded-xl flex items-center justify-between">
            <img style={{
                height: '60px',
                width: '60px',
                borderRadius: '10px 10px 10px 10px',
                border: '2px solid white'
            }} src={imgUrl(recipe?.images?.[0]?.path)} alt="" />
            <p className="py-4 px-2" title={recipe?.name}>
                {
                    recipe?.name?.length > 25 ?
                        `${recipe?.name?.slice(0, 25)}...`
                        :
                        recipe?.name
                }
            </p>
            <div className="flex items-center py-4 px-2">
                <button onClick={() => onHandleRecipe?.(recipe)} className="text-main">
                    Add
                </button>
            </div>
        </li>
    )
}

export default ListComponent;