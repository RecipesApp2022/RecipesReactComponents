import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const usePlans = ({ options, ...axiosConfig } = {}) => {
  const [{ data, error, loading }, getPlans] = useAxios({ url: '/plans', ...axiosConfig }, options);

  const [plans, setPlans] = useState([])

  const [total, setTotal] = useState(0);

  const [size, setSize] = useState(0);

  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    if (data) {
      setPlans(data.results);
      setTotal(data.total);
      setSize(data.size);
      setNumberOfPages(data.numberOfPages);
    }

  }, [data, loading, error]);

  return [{ plans, total, numberOfPages, size, error, loading }, getPlans];
};

export default usePlans;
