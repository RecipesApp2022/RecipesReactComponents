import clsx from "clsx";

const Checkbox = ({ className, props }) => {
    return <input
        type="checkbox"
        className={clsx(" rounded-full border-gray-300 text-main shadow-sm focus:border-teal-300 focus:ring focus:ring-offset-0 focus:ring-teal-200 focus:ring-opacity-50", className)}
        {...props}
    />;
}

export default Checkbox;