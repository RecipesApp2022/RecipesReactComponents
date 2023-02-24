const MealDetailOverview = ({ source, text }) => {
    return (
        <div>
            <img className="m-auto h-48 w-48 rounded-lg" src={source} alt="" />
            <p className="truncate text-center p-2 font-bold text-2xl text-gray-500" title={text} >{text}</p>
        </div>
    );
}

export default MealDetailOverview;