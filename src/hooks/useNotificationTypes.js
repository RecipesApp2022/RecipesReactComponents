import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const useNotificationTypes = ({ options, ...axiosConfig } = {}) => {
  const [{ data, error, loading }, getNotificationTypes] = useAxios({ url: '/notification-types', ...axiosConfig }, options);

  const [notificationTypes, setNotificationTypes] = useState([])

  const [total, setTotal] = useState(0);

  const [size, setSize] = useState(0);

  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    if (data) {
      setNotificationTypes(data.results);
      setTotal(data.total);
      setSize(data.size);
      setNumberOfPages(data.numberOfPages);
    }

  }, [data, loading, error]);

  return [{ notificationTypes, total, numberOfPages, size, error, loading }, getNotificationTypes];
};

export default useNotificationTypes;
