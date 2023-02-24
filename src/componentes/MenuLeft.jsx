import ButtonRank from "./ButtonRank";
import CategoriesRecipes from "./CategoriesRecipes";
import RatingComponent from "./RatingComponent";
import SelectCategory from "./SelectCategory";
import SelectRank from "./SelectRank";

const MenuLeft = ({ filters, onClickCategory, onChangeRating, className, style }) => {
    return (
        <div
            style={style}
            className={`hidden md:block ${className || ''}`}
        >

            <div className="lg:ml-6 bg-white lg:w-64 w-56 m-auto md:w-40 rounded-lg shadow ">
                <CategoriesRecipes onClickCategory={onClickCategory} values={filters?.categoryIds} />
            </div>
            <div>
                <div className="p-4 mt-6 lg:ml-6 bg-white lg:w-64 m-auto w-56 md:w-40 rounded-lg shadow">
                    <p className="title-medium mt-2 mb-6">Types</p>
                    <SelectCategory title="Breakfast" />
                    <SelectCategory title="Lunch" />
                    <SelectCategory title="Dinner" />
                    <SelectCategory title="Snacks" />
                </div>
            </div>
            <div>
                <div className="p-4 mt-6 lg:ml-6 bg-white lg:w-64 w-56 m-auto md:w-40 rounded-lg shadow">
                    <h1 className="title-medium mt-2 mb-6">Rating</h1>
                    <div className="flex items-center space-between">
                        <RatingComponent
                            onClickStar={onChangeRating}
                            value={filters?.rating}
                        />
                        {
                            filters?.rating &&
                            <button className="bg-main rounded-xl text-white px-4 py-1" onClick={() => onChangeRating('')}>
                                Clear
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuLeft;