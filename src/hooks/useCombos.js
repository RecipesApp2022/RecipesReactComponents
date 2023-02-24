import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const useCombos = ({ options, ...axiosConfig } = {}) => {
    const [{ data, error, loading }, getCombos] = useAxios({ url: '/combos', ...axiosConfig }, options);

    const [combos, setCombos] = useState([])

    const [total, setTotal] = useState(0);

    const [size, setSize] = useState(0);

    const [numberOfPages, setNumberOfPages] = useState(0);

    useEffect(() => {
        if (data) {
            setCombos(data.results);
            setTotal(data.total);
            setSize(data.size);
            setNumberOfPages(data.numberOfPages);
        }

    }, [data, loading, error]);

    return [{ combos, total, numberOfPages, size, error, loading }, getCombos];
};

export default useCombos;
