import clsx from "clsx";

const ButtonSearchSelector = ({ name, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            type="button"
            className={clsx(['px-2.5 first:rounded-tl-lg last:rounded-tr-lg'], {
                'bg-white w-42 underline underline-offset-8 decoration-main': isActive,
                'bg-zinc-300': !isActive,
            })}>
            <p className="text-base">{name}</p>
        </button>
    );
}

export default ButtonSearchSelector;