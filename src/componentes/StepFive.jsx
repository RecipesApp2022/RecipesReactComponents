import { useState } from "react";
import { useCreatePlan } from "../contexts/CreatePlanContext";
import { TabsProvider, useTabs } from "../contexts/TabsContext";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";// Import Swiper React components
import TabsContainer from "./TabsContainer";
import Tab from "./Tab";
import TabPanel from "./TabPanel";
import Modal from "./Modal/Modal";
import update from 'immutability-helper';
import { IoCloseCircle, IoGridOutline, IoList } from "react-icons/io5";
import imgUrl from "../helpers/imgUrl";
import clsx from "clsx";
import usePurchasedProducts from "../hooks/usePurchasedProducts";
import { useEffect } from "react";
import ModalOverlay from "./Modal/ModalOverlay";
import ModalContainer from "./Modal/ModalContainer";
import ListComponent from "./ListComponent";
import GridComponent from "./GridComponent";
import usePlanRecipes from "../hooks/usePlanRecipes";

const StepFive = () => {

    const { data, setData } = useCreatePlan();

    const [showModal, setShowModal] = useState(false);

    const { value, setValue } = useTabs();

    const [currentDayIndex, setCurrentDayIndex] = useState(0);

    const [isEnd, setIsEnd] = useState(false);

    const [currentPeriod, setCurrentPeriod] = useState(null);

    const [currentRecipes, setCurrentRecipes] = useState([]);

    const [viewType, setViewType] = useState('list');

    const [filters, setFilters] = useState({
        name: '',
        page: 1
    });

    const [{ planRecipes: recipes, numberOfPages, loading: recipeLoading, total }, getRecipes] = usePlanRecipes({ axiosConfig: { params: { ...filters } }, options: { useCache: false } });

    useEffect(() => {
        if (recipes?.length > 0) {
            setCurrentRecipes((oldRecipes) => {
                return [...oldRecipes, ...recipes]
            });
        }
    }, [recipes])

    const handleAddRecipe = (recipe) => {
        const newData = update(data, {
            weekDays: {
                [currentDayIndex]: {
                    mealPeriods: {
                        [currentPeriod]: {
                            recipes: {
                                $push: [recipe]
                            }
                        }
                    }
                }
            }
        });

        setData(newData);
    }

    const handleRemoveRecipe = (recipeIndex, periodIndex) => {
        const newData = update(data, {
            weekDays: {
                [currentDayIndex]: {
                    mealPeriods: {
                        [periodIndex]: {
                            recipes: { $splice: [[recipeIndex, 1]] }
                        }
                    }
                }
            }
        });
        setData(newData);
    }

    const handleMore = () => {
        if (numberOfPages > filters?.page) {
            setFilters((oldFilters) => {
                return {
                    ...oldFilters,
                    page: oldFilters?.page + 1
                }
            });
        }
    }

    const handleSlideChange = (e) => {
        setIsEnd(e?.isEnd);
        setCurrentDayIndex(e?.realIndex);
    }

    const handleChange = (e) => {
        setCurrentRecipes([]);
        setFilters((oldFilters) => {
            return {
                ...oldFilters,
                [e.target.name]: e.target.value,
                page: 1
            }
        })
    }

    return (
        <div>
            <Swiper
                slidesPerView={1}
                onSlideChange={handleSlideChange}
                spaceBetween={30}
                pagination={{ clickable: true, }}
                navigation
                modules={[Pagination, Navigation]}
            >
                {
                    data?.weekDays?.map((day, i) => {
                        return (
                            <SwiperSlide className="hover:cursor-grab" key={`swiper-${i}`}>
                                <div className="w-full" style={{ minHeight: '80px' }}>
                                    <h1 className="text-center text-gray-400 text-xl font-bold">
                                        Day {i + 1}
                                    </h1>
                                    <TabsProvider>
                                        <TabsContainer className="justify-center md:flex flex flex-wrap md:m-10 m-2 mt-6 text-center">
                                            {
                                                day?.mealPeriods?.map((period, preiodIndexi) => {
                                                    return (
                                                        <Tab value={preiodIndexi} key={`period-tab-${preiodIndexi}`}>{period?.name} - {period?.recipes?.length}</Tab>
                                                    )
                                                })
                                            }
                                        </TabsContainer>
                                        {
                                            day?.mealPeriods?.map((period, periodIndex) => {
                                                return (
                                                    <TabPanel
                                                        key={`period-tabPanel-${periodIndex}`}
                                                        className="animate__animated animate__fadeInUp mb-8 px-8"
                                                        value={periodIndex}
                                                    >
                                                        {
                                                            period?.recipes?.length > 0 ?
                                                                <div className="grid w-full md:grid-cols-3 lg:grid-cols-6 grid-cols-2 gap-4 mb-16">
                                                                    {
                                                                        period?.recipes?.map((recipe, recipeIndex) => {
                                                                            return (
                                                                                <div key={`period-recipe-${recipeIndex}`} className="text-center relative">
                                                                                    <button onClick={() => {
                                                                                        handleRemoveRecipe(recipeIndex, periodIndex);
                                                                                    }} type="button" className="bg-white rounded-full absolute text-red-400 text-4xl" style={{ top: -15, right: -15 }}>
                                                                                        <IoCloseCircle />
                                                                                    </button>
                                                                                    <div
                                                                                        className="rounded-xl"
                                                                                        style={{
                                                                                            height: '100px',
                                                                                            backgroundSize: 'cover',
                                                                                            backgroundImage: `url(${imgUrl(recipe?.images?.[0]?.path || recipe?.recipeImages?.[0]?.path)})`
                                                                                        }}
                                                                                    >
                                                                                    </div>
                                                                                    {recipe?.name}
                                                                                </div>
                                                                            )
                                                                        })
                                                                    }
                                                                </div>
                                                                :
                                                                <div className="text-center text-2xl font-semibold text-red-500 mb-16">
                                                                    No recipes yet.
                                                                </div>
                                                        }
                                                        <div className="text-center mb-16">
                                                            <button
                                                                onClick={() => {
                                                                    setShowModal((old) => !old);
                                                                    setCurrentPeriod(periodIndex);
                                                                }}
                                                                type="button"
                                                                className="px-8 py-2 bg-main rounded-xl text-white"
                                                            >
                                                                Add Recipe
                                                            </button>
                                                        </div>
                                                    </TabPanel>
                                                )
                                            })
                                        }
                                    </TabsProvider>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>

            <div className="mt-8 text-center space-x-4">
                <button onClick={(e) => setValue(value - 1)} type="button" className="bg-main px-8 py-2 rounded-xl text-white">
                    Back
                </button>
                <button
                    className={clsx(["transition duration-300 rounded-xl px-8 py-2"], {
                        "bg-main text-white": isEnd,
                        "text-main": !isEnd
                    })}
                    disabled={!isEnd}
                    onClick={(e) => setValue(value + 1)}
                >
                    Confirm
                </button>
            </div>

            <ModalOverlay show={showModal} onClose={() => setShowModal(false)}>
                <ModalContainer onClose={() => setShowModal(false)} className="custom-scrollbar custom-scrollbar-main w-full md:w-8/12">
                    <h1 className="text-center text-gray-400 font-semibold text-xl">
                        Recipes
                    </h1>
                    <br />
                    <div className="flex items-center justify-center md:justify-between mb-4">
                        <div className="hidden md:block">
                            Filters:
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="hidden md:block">
                                Results: {total}
                            </div>
                            <div>
                                <input type="text"
                                    style={{ width: '100%' }}
                                    placeholder="Search..."
                                    onChange={handleChange}
                                    value={filters?.name}
                                    name="name"
                                    className="block m-auto appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                />
                            </div>
                            <div className="flex items-center space-x-4 text-2xl">
                                <IoGridOutline onClick={() => setViewType('grid')} className={clsx("cursor-pointer", {
                                    "text-main": viewType === 'grid'
                                })} />
                                <IoList onClick={() => setViewType('list')} className={clsx("cursor-pointer", {
                                    "text-main": viewType === 'list'
                                })} />
                            </div>
                        </div>
                    </div>
                    <div className="text-center mb-4 md:hidden">
                        Results: {total}
                    </div>
                    {
                        currentRecipes?.length === 0 && !recipeLoading ?
                            <div className="text-center text-2xl font-semibold text-red-500">
                                No recipes found
                            </div>
                            :
                            <ul className={clsx({
                                "grid grid-cols-1 md:grid-cols-2 gap-4": viewType === 'list',
                                "grid grid-cols-2 sm:grid-cols-3 items-end justify-center lg:grid-cols-4 gap-4": viewType === 'grid'
                            })}>
                                {
                                    currentRecipes?.map((recipe, i) => {
                                        if (viewType === 'grid') return <GridComponent
                                            recipe={recipe}
                                            key={i}
                                            onHandleRecipe={handleAddRecipe}
                                        />
                                        if (viewType === 'list') return <ListComponent
                                            recipe={recipe}
                                            key={i}
                                            onHandleRecipe={handleAddRecipe}
                                        />
                                    })
                                }
                            </ul>
                    }
                    {

                        recipeLoading ?
                            <div className="text-center text-xl">
                                Loading Recipes...
                            </div>
                            :
                            numberOfPages > filters?.page ?
                                <div className="text-center">
                                    <button onClick={handleMore} className="bg-white px-8 py-2 rounded-full shadow mt-4">
                                        Load More
                                    </button>
                                </div>
                                :
                                <div className="text-center my-4">
                                    No more recipes.
                                </div>
                    }
                </ModalContainer>
            </ModalOverlay>
        </div>
    )
}

export default StepFive;