import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const useCategories = ({ options, axiosConfig } = {}) => {
  const [{ data, error, loading }, getCategories] = useAxios({ url: '/categories', ...axiosConfig }, options);

  const [categories, setCategories] = useState([])

  const [total, setTotal] = useState(0);

  const [size, setSize] = useState(0);

  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    if (data) {
      setCategories(data.results);
      setTotal(data.total);
      setSize(data.size);
      setNumberOfPages(data.numberOfPages);
    }

  }, [data, loading, error]);

  return [{ categories, total, numberOfPages, size, error, loading }, getCategories];
};

export default useCategories;
