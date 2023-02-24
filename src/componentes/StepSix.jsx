import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useCreatePlan } from "../contexts/CreatePlanContext";
import { useTabs } from "../contexts/TabsContext";
import useAxios from "../hooks/useAxios";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import clsx from "clsx";

const StepSix = () => {

    const { value, setValue } = useTabs();

    const { data, setData } = useCreatePlan();

    const [{ data: createPlanData, loading: createPlanLoading }, createPlan] = useAxios({ url: `plans`, method: 'POST' }, { manual: true, useCache: false });

    useEffect(() => {
        if (createPlanData) {
            console.log(createPlanData);
        }
    }, [createPlanData])

    const handleCreate = () => {
        const planDays = [];

        data?.weekDays?.forEach((day, i) => {
            day?.mealPeriods?.forEach((period, periodIndex) => {
                period?.recipes?.forEach((recipe, recipeIndex) => {
                    planDays.push({
                        day: i + 1,
                        mealPeriodId: period?.id,
                        recipeId: recipe?.id
                    });
                });
            });
        });

        var dataToSend = {
            name: data?.name,
            description: data?.description,
            planDays: planDays,
            categoryIds: data?.categoryIds,
            numberOfDays: data?.weekDays?.length
        };

        if (!data?.id) {
            dataToSend = new FormData();

            dataToSend.append('name', data?.name);

            dataToSend.append('description', data?.description);

            data?.categoryIds?.forEach((categoryId, i) => {
                dataToSend.append(`categoryIds[${i}]`, categoryId);
            });

            dataToSend.append('numberOfDays', data?.weekDays?.length);
            planDays?.forEach((planDay, i) => {
                dataToSend?.append(`planDays[${i}][day]`, planDay?.day);
                dataToSend?.append(`planDays[${i}][mealPeriodId]`, planDay?.mealPeriodId);
                dataToSend?.append(`planDays[${i}][recipeId]`, planDay?.recipeId);
            });

            data?.images?.forEach((image, i) => {
                if (image) {
                    dataToSend?.append(`images`, image, image?.name);
                }
            });
        }

        createPlan({
            data: dataToSend,
            url: data?.id ? `plans/${data?.id}` : `plans`,
            method: data?.id ? 'PUT' : 'POST'
        });

    }

    return (
        <div>
            {
                !createPlanData &&
                <h1 className="text-center text-xl font-semibold">
                    All is ok?
                </h1>
            }
            <p className={clsx(["text-gray-400 text-center"], {
                "mt-8": !createPlanData
            })}>
                {
                    !createPlanData ?
                        "Please make sure all the data is correct."
                        :
                        <IoCheckmarkCircleSharp className="m-auto text-main animate__animated animate__fadeInUp" style={{ fontSize: '80px' }} />
                }
            </p>

            <div className="mt-8 text-center space-x-4">
                {
                    !createPlanData ?
                        createPlanLoading ?
                            <button disabled type="button" className="bg-main px-8 py-2 rounded-xl text-white">
                                Loading...
                            </button>
                            :
                            <>
                                <button onClick={(e) => setValue(value - 1)} type="button" className="bg-main px-8 py-2 rounded-xl text-white">
                                    I want to check
                                </button>
                                <button onClick={handleCreate} type="button" className="bg-main px-8 py-2 rounded-xl text-white">
                                    Confirm
                                </button>
                            </>
                        :
                        <a href="/my-plans" className="bg-main animate__animated animate__fadeInUp px-8 py-2 rounded-xl text-white">
                            The plan has been {data?.id ? "updated" : "created"}.
                        </a>
                }
            </div>
        </div>
    )
}

export default StepSix;