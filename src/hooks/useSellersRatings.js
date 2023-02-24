import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const useSellersRatings = ({ options, ...axiosConfig } = {}) => {
  const [{ data, error, loading }, getSellersRatings] = useAxios({ url: '/seller-ratings', ...axiosConfig }, options);

  const [sellersRatings, setSellersRatings] = useState([])

  const [total, setTotal] = useState(0);

  const [size, setSize] = useState(0);

  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    if (data) {
      setSellersRatings(data.results);
      setTotal(data.total);
      setSize(data.size);
      setNumberOfPages(data.numberOfPages);
    }

  }, [data, loading, error]);

  return [{ sellersRatings, total, numberOfPages, size, error, loading }, getSellersRatings];
};

export default useSellersRatings;
