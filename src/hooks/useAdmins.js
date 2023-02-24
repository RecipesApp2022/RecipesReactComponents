import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const useAdmins = ({ options, ...axiosConfig } = {}) => {

  const [{ data, error, loading }, getAdmins] = useAxios({ url: '/admins', ...axiosConfig }, options);

  const [admins, setAdmins] = useState([]);
  const [total, setTotal] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [size, setSize] = useState(0);

  useEffect(() => {
    if (data) {
      setAdmins(data.results);
      setTotal(data.total);
      setNumberOfPages(data.numberOfPages);
      setSize(data.size);
    }
  }, [data]);

  return [{ admins, size, total, numberOfPages, error, loading }, getAdmins];
};

export default useAdmins;
