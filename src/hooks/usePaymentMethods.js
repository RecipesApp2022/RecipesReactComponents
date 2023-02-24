import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const usePaymentMethods = ({ options, ...axiosConfig } = {}) => {
  const [{ data, error, loading }, getPaymentMethods] = useAxios({ url: '/payment-methods', ...axiosConfig }, options);

  const [paymentMethods, setPaymentMethods] = useState([])

  const [total, setTotal] = useState(0);

  const [size, setSize] = useState(0);

  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    if (data) {
      setPaymentMethods(data.results);
      setTotal(data.total);
      setSize(data.size);
      setNumberOfPages(data.numberOfPages);
    }

  }, [data, loading, error]);

  return [{ paymentMethods, total, numberOfPages, size, error, loading }, getPaymentMethods];
};

export default usePaymentMethods;
