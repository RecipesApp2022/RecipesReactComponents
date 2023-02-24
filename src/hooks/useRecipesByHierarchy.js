import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const useRecipesByHierarchy = ({ options, ...axiosConfig } = {}) => {
  const [{ data, error, loading }, getRecipes] = useAxios({ url: '/recipes/by-hierarchy', ...axiosConfig },  { useCache: false, ...options });

  const [recipes, setRecipes] = useState([])

  const [total, setTotal] = useState(0);

  const [size, setSize] = useState(0);

  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    if (data) {
      setRecipes(data.results);
      setTotal(data.total);
      setSize(data.size);
      setNumberOfPages(data.numberOfPages);
    }

  }, [data, loading, error]);

  return [{ recipes, total, numberOfPages, size, error, loading }, getRecipes];
};

export default useRecipesByHierarchy;
