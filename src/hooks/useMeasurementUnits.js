import { useEffect, useState } from 'react';
import useAxios from './useAxios';

const useMeasurementUnits = ({ options, ...axiosConfig } = {}) => {

  const [{ data, error, loading }, getMeasurementUnits] = useAxios({ url: '/measurement-units', ...axiosConfig }, { useCache: false, ...options });

  const [measurementUnits, setMeasurementUnits] = useState([]);
  const [total, setTotal] = useState(0);
  const [numberOfPages, setNumberOfPages] = useState(0);
  const [size, setSize] = useState(0);

  useEffect(() => {
    if (data) {
      setMeasurementUnits(data.results);
      setTotal(data.total);
      setNumberOfPages(data.numberOfPages);
      setSize(data.size);
    }
  }, [data]);

  return [{ measurementUnits, total, size, numberOfPages, error, loading }, getMeasurementUnits];
};

export default useMeasurementUnits;
