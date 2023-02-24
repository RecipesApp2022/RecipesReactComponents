import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const useUserNotifications = ({ options, axiosConfig } = {}) => {

  const [{ data, error, loading }, getNotifications] = useAxios({ url: '/notifications', ...axiosConfig }, { useCache: false, ...options });

  const [notifications, setNotifications] = useState([]);
  const [total, setTotal] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [size, setSize] = useState(0);

  useEffect(() => {
    if (data) {
      setNotifications(data.results);
      setTotal(data.total);
      setNumberOfPages(data.numberOfPages);
      setSize(data.size);
    }
  }, [data]);

  return [{ notifications, total, size, numberOfPages, error, loading }, getNotifications];
};

export default useUserNotifications;
