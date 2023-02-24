const IngredientRowDetails = ({ imageSource, title, subtitle, subtitle2, price }) => {
    return <div className="flex p-2">
        <img src={imageSource} alt={title} className="w-16 h-16" />
        <div className="flex items-center px-3 w-full">
            <div className="text-xs space-y-1">
                <p className="font-semibold">{title}</p>
                {subtitle && <p className="text-gray-700">{subtitle}</p>}
                {subtitle2 && <p className="text-gray-700">{subtitle2}</p>}
            </div>
            {price && <div className="ml-auto text-sm font-semibold">{price}</div>}
        </div>
    </div>;
}

export default IngredientRowDetails;