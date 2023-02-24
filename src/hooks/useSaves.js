import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const useSaves = ({ options, ...axiosConfig } = {}) => {
  const [{ data, error, loading }, getSaves] = useAxios({ url: '/saved', ...axiosConfig }, options);

  const [saves, setSaves] = useState([])

  const [total, setTotal] = useState(0);

  const [size, setSize] = useState(0);

  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    if (data) {
      setSaves(data.results);
      setTotal(data.total);
      setSize(data.size);
      setNumberOfPages(data.numberOfPages);
    }

  }, [data, loading, error]);

  return [{ saves, total, numberOfPages, size, error, loading }, getSaves];
};

export default useSaves;
