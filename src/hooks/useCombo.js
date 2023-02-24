import { useEffect, useState } from "react";
import useAxios from "./useAxios";

const useCombo = (slug) => {
    const [{ data, loading: comboLoading }, getCombo] = useAxios({ url: `/combos/${slug}` }, { useCache: false });

    const [combo, setCombo] = useState(null);

    useEffect(() => {
        setCombo(data);
    }, [data]);

    return [{ combo, setCombo, comboLoading }, getCombo];
}

export default useCombo;