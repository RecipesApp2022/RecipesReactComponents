const ButtonOverview = ({ name, onClick }) => {
    return (
        <button className="w-full md:h-14 h-10 rounded-xl bg-main shadow md:hidden" onClick={onClick}>
            <p className="text-black hover:text-white Font-bold md:text-4xl title-medium">{name}</p>
        </button>
    );
}

export default ButtonOverview;