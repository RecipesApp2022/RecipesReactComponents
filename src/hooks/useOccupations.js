import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const useOccupations = ({ options, ...axiosConfig } = {}) => {

  const [{ data, error, loading }, getOccupations] = useAxios({ url: '/occupations', ...axiosConfig }, options);

  const [occupations, setOccupations] = useState([]);
  const [total, setTotal] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [size, setSize] = useState(0);

  useEffect(() => {
    if (data) {
      setOccupations(data.results);
      setTotal(data.total);
      setNumberOfPages(data.numberOfPages);
      setSize(data.size);
    }
  }, [data]);

  return [{ occupations, size, total, numberOfPages, error, loading }, getOccupations];
};

export default useOccupations;
