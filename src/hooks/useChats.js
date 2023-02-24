import { useEffect, useState } from 'react';
import useAxios from './useAxios';


const useChats = ({ options, ...axiosConfig } = {}) => {

  const [{ data, error, loading }, getChats] = useAxios({ url: '/chats', ...axiosConfig }, { useCache: false, ...options });

  const [chats, setChats] = useState([]);
  const [total, setTotal] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [size, setSize] = useState(0);

  useEffect(() => {
    if (data) {
      setChats(data.results);
      setTotal(data.total);
      setNumberOfPages(data.numberOfPages);
      setSize(data.size);
    }
  }, [data]);

  return [{ chats, setChats, size, total, numberOfPages, error, loading }, getChats];
};

export default useChats;
