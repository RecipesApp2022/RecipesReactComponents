import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const useSellers = ({ options, ...axiosConfig } = {}) => {

  const [{ data, error, loading }, getSellers] = useAxios({ url: '/sellers', ...axiosConfig }, { useCache: false, ...options });

  const [sellers, setSellers] = useState([]);
  const [total, setTotal] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [size, setSize] = useState(0);

  useEffect(() => {
    if (data) {
      setSellers(data.results);
      setTotal(data.total);
      setNumberOfPages(data.numberOfPages);
      setSize(data.size);
    }
  }, [data]);

  return [{ sellers, total, size, numberOfPages, error, loading }, getSellers];
};

export default useSellers;
