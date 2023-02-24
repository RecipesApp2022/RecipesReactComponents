import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const useMealPeriods = ({ options, ...axiosConfig } = {}) => {

  const [{ data, error, loading }, getMealPeriods] = useAxios({ url: '/meal-periods', ...axiosConfig }, { useCache: false, ...options });

  const [mealPeriods, setMealPeriods] = useState([]);
  const [total, setTotal] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [size, setSize] = useState(0);

  useEffect(() => {
    if (data) {
      setMealPeriods(data.results);
      setTotal(data.total);
      setNumberOfPages(data.numberOfPages);
      setSize(data.size);
    }
  }, [data]);

  return [{ mealPeriods, total, size, numberOfPages, error, loading }, getMealPeriods];
};

export default useMealPeriods;
