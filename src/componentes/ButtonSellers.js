import clsx from "clsx";

const ButtonSellers = ({ name, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={clsx(['px-6 py-2.5 first:rounded-tl-lg last:rounded-tr-lg title-medium'], {
                'bg-white underline underline-offset-8 decoration-main': isActive,
                'bg-zinc-300': !isActive,
            })}>
            <p className="text-base">{name}</p>
        </button>
    );
}

export default ButtonSellers;