import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const usePlanRecipes = ({ options, axiosConfig } = {}) => {

  const [{ data, error, loading }, getPlanRecipes] = useAxios({ url: '/recipes/by-hierarchy', ...axiosConfig }, options);

  const [planRecipes, setPlanRecipes] = useState([]);

  const [total, setTotal] = useState(0);

  const [size, setSize] = useState(0);

  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    if (data) {
      setPlanRecipes(data.results);
      setTotal(data?.total);
      setSize(data?.size);
      setNumberOfPages(data?.numberOfPages);
    }

  }, [data, loading, error]);

  return [{ planRecipes, total, numberOfPages, size, error, loading }, getPlanRecipes];
};

export default usePlanRecipes;
