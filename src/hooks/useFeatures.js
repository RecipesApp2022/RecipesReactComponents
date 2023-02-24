import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const useFeatures = ({ options, axiosConfig } = {}) => {
  const [{ data, error, loading }, getFeatures] = useAxios({ url: '/product-features', ...axiosConfig }, options);

  const [features, setFeatures] = useState([]);

  const [total, setTotal] = useState(0);

  const [size, setSize] = useState(0);

  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    if (data) {
      setFeatures(data.data);
      setTotal(data?.meta?.total);
      setSize(data?.meta?.per_page);
      setNumberOfPages(data.meta?.last_page);
    }

  }, [data, loading, error]);

  return [{ features, total, numberOfPages, size, error, loading }, getFeatures];
};

export default useFeatures;
