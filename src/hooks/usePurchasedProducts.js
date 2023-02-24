import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const usePurchasedProducts = ({ options, axiosConfig } = {}) => {

  const [{ data, error, loading }, getPurchasedProducts] = useAxios({ url: '/purchased-products', ...axiosConfig }, options);

  const [purchasedProducts, setPurchasedProducts] = useState([]);

  const [total, setTotal] = useState(0);

  const [size, setSize] = useState(0);

  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    if (data) {
      setPurchasedProducts(data.results);
      setTotal(data?.total);
      setSize(data?.size);
      setNumberOfPages(data?.numberOfPages);
    }

  }, [data, loading, error]);

  return [{ purchasedProducts, total, numberOfPages, size, error, loading }, getPurchasedProducts];
};

export default usePurchasedProducts;
