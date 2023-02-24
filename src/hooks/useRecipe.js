import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const useRecipe = (slug) => {
    const [{ data, loading: recipeLoading }, getRecipe] = useAxios({ url: `/recipes/${slug}` }, { useCache: false });

    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        setRecipe(data);
    }, [data]);

    return [{ recipe, setRecipe, recipeLoading }, getRecipe];
}

export default useRecipe;