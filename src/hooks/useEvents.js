import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const useEvents = ({ options, ...axiosConfig } = {}) => {
  const [{ data, error, loading }, getEvents] = useAxios({ url: '/events', ...axiosConfig }, options);

  const [events, setEvents] = useState([])

  const [total, setTotal] = useState(0);

  const [size, setSize] = useState(0);

  const [numberOfPages, setNumberOfPages] = useState(0);

  useEffect(() => {
    if (data) {
      setEvents(data.results);
      setTotal(data.total);
      setSize(data.size);
      setNumberOfPages(data.numberOfPages);
    }

  }, [data, loading, error]);

  return [{ events, total, numberOfPages, size, error, loading }, getEvents];
};

export default useEvents;
