const ButtonImage = ({ image }) => {
    return (
        <button
            style={{ backgroundImage: `url(${image})`, backgroundSize: '100% 100%', backgroundPosition: 'center center' }}
            className="mb-4 p-2 mb:ml-2 w-40 h-12 rounded-xl border bg-white">
        </button>
    )
}


export default ButtonImage;