import BannerPage from "../componentes/BannerPage";
import img1 from "../assets/img1.jpg";
import CategorySectionCard from "../componentes/CategorySectionCard";
import useCategories from "../hooks/useCategories";
import { useCallback, useEffect, useRef, useState } from "react";
import SystemInfo from "../util/SystemInfo";

const Categories = () => {

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
    <div>
      <BannerPage image={img1} title="Categories" />
      {
        !loading && currentCategories?.length === 0 ?
          <h1 className="text-center text-red-500 text-4xl">
            No results found.
          </h1>
          :
          null
      }
      <div className="grid md:grid-cols-4 mr-6 ml-6 gap-5 md:gap-10  py-20">
        {
          currentCategories?.map((category, i) => {
            return (
              <CategorySectionCard
                ref={i + 1 === currentCategories.length ? lastValueRef : null}
                img={`${SystemInfo?.api}${category?.banner}`}
                name={category?.name}
                categoryId={category?.id}
                className={"py-16"}
              />
            )
          })
        }
      </div>
      {
        loading &&
        <h1 className="text-center text-4xl mb-10">Loading...</h1>
      }
    </div>
  );
};

export default Categories;
