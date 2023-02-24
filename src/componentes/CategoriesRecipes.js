import clsx from "clsx";
import React, { useCallback, useEffect, useRef, useState } from "react";
import useCategories from "../hooks/useCategories";

const CategoriesRecipes = ({ onClickCategory, values }) => {

  const [categoriesFilters, setCategoriesFilters] = useState({
    page: 1,
    perPage: 8
  });

  const [currentCategories, setCurrentCategories] = useState([]);

  const [{ categories, numberOfPages, error, loading }, getCategories] = useCategories({ axiosConfig: { params: { ...categoriesFilters } }, options: { useCache: false } });

  const observer = useRef();

  const lastValueRef = useCallback((value) => {
    if (observer?.current) observer?.current?.disconnect?.();

    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        if (numberOfPages > categoriesFilters?.page) {
          setCategoriesFilters((oldCategories) => {
            return {
              ...oldCategories,
              page: oldCategories?.page + 1
            }
          });
        }
      }
    })
    if (value) observer?.current?.observe?.(value)
  }, [currentCategories]);

  useEffect(() => {
    if (categories?.length > 0) {
      setCurrentCategories((oldCategories) => {
        return [...oldCategories, ...categories]
      });
    }
  }, [categories]);

  return (
    <div className="mb-4 md:p-6">
      <h4 className="title-medium mt-2 mb-6">Categories</h4>
      {
        values?.length > 0 &&
        <div className="text-end">
          <button className="bg-main rounded-xl text-white px-4 py-1" onClick={() => onClickCategory('')}>
            Clear
          </button>
        </div>
      }
      <div style={{ maxHeight: '300px', overflowY: 'auto' }} className="custom-scrollbar custom-scrollbar-main">
        {
          currentCategories?.map((category, i) => {
            return (
              <div
                key={i}
                onClick={() => { onClickCategory?.(category) }}
                ref={i + 1 === currentCategories.length ? lastValueRef : null}
                className={clsx(["font-normal cursor-pointer hover:text-main m-2"], {
                  "text-main": values?.includes(category?.id)
                })}
              >
                {category?.name}
              </div>
            )
          })
        }
        {
          loading &&
          <div
            className="font-normal cursor-pointer hover:text-main m-2"
          >
            Loading...
          </div>
        }
      </div>
    </div>
  );
};

export default CategoriesRecipes;
