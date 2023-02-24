import React from "react";

const SelectOrder = () => {
  return (
    <div>
      <select
        id="Rating"
        className="bg-gray-50 border border-gray-300 text-gray-900 title-button rounded-lg focus:ring-main block w-60 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500"
      >
        <option selected>Ordenar Por</option>
        <option value="">A-Z</option>
        <option value="">Rating</option>
        <option value=""> Time Cock</option>
      </select>
    </div>
  );
};

export default SelectOrder;
