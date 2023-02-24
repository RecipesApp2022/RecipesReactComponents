import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const useRatings = ({ options, ...axiosConfig } = {}) => {
  const [{ data, error, loading }, getRatings] = useAxios({ url: '/ratings', ...axiosConfig }, options);

  const [ratings, setRatings] = useState([])

  const [total, setTotal] = useState(0);

  const [size, setSize] = useState(0);

  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    if (data) {
      setRatings(data.results);
      setTotal(data.total);
      setSize(data.size);
      setNumberOfPages(data.numberOfPages);
    }

  }, [data, loading, error]);

  return [{ ratings, total, numberOfPages, size, error, loading }, getRatings];
};

export default useRatings;
