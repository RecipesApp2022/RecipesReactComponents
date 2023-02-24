import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const useFavorites = ({ options, ...axiosConfig } = {}) => {

  const [{ data, error, loading }, getFavorites] = useAxios({ url: '/favorites', ...axiosConfig }, options);

  const [favorites, setFavorites] = useState([]);
  const [total, setTotal] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [size, setSize] = useState(0);

  useEffect(() => {
    if (data) {
      setFavorites(data.results);
      setTotal(data.total);
      setNumberOfPages(data.numberOfPages);
      setSize(data.size);
    }
  }, [data]);

  return [{ favorites, size, total, numberOfPages, error, loading }, getFavorites];
};

export default useFavorites;
