const ButtonRank = () => {
    return (
        <div className="lg:flex lg:space-x-8">
            <button className="bg-main mt-14 mb-4 ml-2 text-white hover:bg-main-light hover:text-white font-bold py-2 px-4 rounded-lg">
                Apply
            </button>
            <button className="bg-main mt-14 mb-4 ml-2 text-white hover:bg-main-light hover:text-white font-bold py-2 px-4 rounded-lg">
                Reset
            </button>
        </div>
    );
}

export default ButtonRank;