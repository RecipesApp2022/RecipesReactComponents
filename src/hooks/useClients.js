import { useEffect, useState } from 'react';
import useAxios from './useAxios';


const useClients = ({ options, ...axiosConfig } = {}) => {

  const [{ data, error, loading }, getClients] = useAxios({ url: '/clients', ...axiosConfig }, { useCache: false, ...options });

  const [clients, setClients] = useState([]);
  const [total, setTotal] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [size, setSize] = useState(0);

  useEffect(() => {
    if (data) {
      setClients(data.results);
      setTotal(data.total);
      setNumberOfPages(data.numberOfPages);
      setSize(data.size);
    }
  }, [data]);

  return [{ clients, size, total, numberOfPages, error, loading }, getClients];
};

export default useClients;
