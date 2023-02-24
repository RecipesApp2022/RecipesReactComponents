import clsx from "clsx";
import { useEffect } from "react";
import { useState } from "react";
import { useCreatePlan } from "../contexts/CreatePlanContext";
import { useTabs } from "../contexts/TabsContext";
import useCategories from "../hooks/useCategories";

const StepTwo = () => {
    const { data, setData } = useCreatePlan();

    const { value, setValue } = useTabs();

    const [categoriesFilters, setCategoriesFilters] = useState({
        page: 1,
        name: ''
    });

    const [currentCategories, setCurrentCategories] = useState([]);

    const [{ categories, numberOfPages, loading: categoriesLoading }, getCategories] = useCategories({ axiosConfig: { params: { ...categoriesFilters } } });

    useEffect(() => {
        if (categories?.length > 0) {
            setCurrentCategories((oldCategories) => {
                return [...oldCategories, ...categories];
            });
        }
    }, [categories])

    const handleMore = () => {
        if (numberOfPages > categoriesFilters?.page) {
            setCategoriesFilters((oldFilters) => {
                return {
                    ...oldFilters,
                    page: oldFilters?.page + 1
                }
            });
        }
    }

    const handleCategory = (e) => {
        const value = data?.[e.target.name]?.includes(e.target.value);
        if (value) {
            const newValues = data?.[e.target.name]?.filter(n => n !== e.target.value);
            setData((oldData) => {
                return {
                    ...oldData,
                    [e.target.name]: newValues
                }
            });
        } else {
            setData((oldData) => {
                return {
                    ...oldData,
                    [e.target.name]: [...data?.[e.target.name], e.target.value]
                }
            });
        }
        return;
    }

    const handleChange = (e) => {

        setCurrentCategories([]);

        setCategoriesFilters((oldFilters) => {
            return {
                ...oldFilters,
                [e.target.name]: e.target.value,
                page: 1
            }
        })
    }

    return (
        <div>
            <label className="text-xl">
                Select the plan´s categories:
            </label>
            <br />
            <input style={{ backgroundColor: '#F0F0F0', border: 'none', outline: 'none' }}
                type="text"
                name="name"
                onChange={handleChange}
                placeholder="Category name..."
                className="w-full mt-4 rounded-xl focus:outline-none focus:ring-main"
                value={categoriesFilters?.name}
            />
            <div className="my-4 bg-gray-200 p-4 rounded-xl custom-scrollbar custom-scrollbar-main" style={{ height: '300px', overflowY: 'auto' }}>
                {
                    currentCategories?.length > 0 ?
                        currentCategories?.map((category, i) => {
                            return (
                                <div onClick={(e) => handleCategory({ target: { name: 'categoryIds', value: category?.id } })} className={clsx(["w-full my-4 p-2 rounded-xl flex items-center cursor-pointer"], {
                                    'bg-main text-white': data?.categoryIds?.includes(category?.id)
                                })} key={i}>
                                    {category?.name}
                                </div>
                            )
                        })
                        :

                        <div className="text-red-500 text-center">
                            not found results.
                        </div>
                }
                <div>

                </div>
                {
                    categoriesLoading ?
                        <div className="text-center my-4">
                            Loading more categories...
                        </div>
                        :
                        numberOfPages > categoriesFilters?.page ?
                            <div className="text-center">
                                <button onClick={handleMore} className="bg-white px-8 py-2 rounded-full shadow mt-4">
                                    Load More
                                </button>
                            </div>
                            :
                            <div className="text-center my-4">
                                No more categories.
                            </div>
                }

            </div>
            <div className="text-right space-x-4">
                <button onClick={(e) => setValue(value - 1)} type="button" className="bg-main px-8 py-2 rounded text-white">
                    Back
                </button>
                <button onClick={(e) => setValue(value + 1)} type="button" className="bg-main px-8 py-2 rounded text-white">
                    Next
                </button>
            </div>
        </div>
    )
}

export default StepTwo;