import clsx from "clsx";

const gridColsResolver = (colsNumber) => {
    if (colsNumber === 3) {

        return 'md:grid-cols-3';
    }

    return 'grid-cols-2';
}

const IngredientRow = ({ colsNumber = 2, children }) => {
    return <div className={clsx('grid border-b-2 last:border-0', gridColsResolver(colsNumber))}>
        {children}
    </div>;
}

export default IngredientRow;