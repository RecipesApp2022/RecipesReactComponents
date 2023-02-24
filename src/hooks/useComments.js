import { useEffect, useState } from 'react';
import useAxios from './useAxios';


const useComments = ({ options, ...axiosConfig } = {}) => {

  const [{ data, error, loading }, getComments] = useAxios({ url: '/comments', ...axiosConfig }, { useCache: false, ...options });

  const [comments, setComments] = useState([]);
  const [total, setTotal] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [size, setSize] = useState(0);

  useEffect(() => {
    if (data) {
      setComments(data.results);
      setTotal(data.total);
      setNumberOfPages(data.numberOfPages);
      setSize(data.size);
    }
  }, [data]);

  return [{ comments, setComments, size, total, numberOfPages, error, loading }, getComments];
};

export default useComments;
