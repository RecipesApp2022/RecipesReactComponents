import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const useUsersStatuses = ({ options, ...axiosConfig } = {}) => {

  const [{ data, error, loading }, getUsersStatuses] = useAxios({ url: '/user-statuses', ...axiosConfig }, options);

  const [usersStatuses, setUsersStatuses] = useState([]);
  const [total, setTotal] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [size, setSize] = useState(0);

  useEffect(() => {
    if (data) {
      setUsersStatuses(data.results);
      setTotal(data.total);
      setNumberOfPages(data.numberOfPages);
      setSize(data.size);
    }
  }, [data]);

  return [{ usersStatuses, size, total, numberOfPages, error, loading }, getUsersStatuses];
};

export default useUsersStatuses;
