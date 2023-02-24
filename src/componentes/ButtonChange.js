const ButtonChange = ({ onClick, loading, buttonText = 'Change' }) => {
    return (
        <button disabled={loading} type="button" onClick={(e) => onClick?.(e)} className="bg-main hover:bg-main-light px-4 py-2 text-white font-semibold rounded-lg">
            {
                loading ?
                    'loading'
                    :
                    buttonText
            }
        </button>
    );
}

export default ButtonChange;