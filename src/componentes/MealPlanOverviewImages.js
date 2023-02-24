const MealPlanOverviewImages = ({ images = [] }) => {
    return (
        <div className={`flex flex-col h-64 w-full overflow-y-auto bg-white rounded shadow`}>
            {images.map((image, i) => <div
                key={i}
                className={`p-2 bg-white w-full border-b`}
            >
                <div className="p-1 text-center text-xs text-gray-500">
                    <img
                        className="m-auto w-auto rounded-lg mb-1 h-18 w-18"
                        src={image.source} alt="cargando"
                    />
                    {<p className="truncate" title={image.name}>{image.name}</p>}
                </div>
            </div>)}
        </div>
    );
}

export default MealPlanOverviewImages;
