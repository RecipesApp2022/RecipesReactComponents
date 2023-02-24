import React from "react";
import { createContext, useContext, useState } from "react";

const CreatePlanContext = createContext({ data: null, setData: null });

export const CreatePlanProvider = ({ children }) => {

  const [data, setData] = useState({
    name: '',
    description: '',
    categoryIds: [],
    weekDays: [],
    images: []
  });

  return <CreatePlanContext.Provider value={{
    data,
    setData
  }}>
    {children}
  </CreatePlanContext.Provider>;
};

export const useCreatePlan = () => useContext(CreatePlanContext);
