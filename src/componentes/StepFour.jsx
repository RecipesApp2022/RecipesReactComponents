import { useEffect } from "react";
import { useState } from "react";
import { useCreatePlan } from "../contexts/CreatePlanContext";
import { useTabs } from "../contexts/TabsContext";
import useMealPeriods from "../hooks/useMealPeriods";

const StepFour = () => {

    const [newWeekDays, setNewWeekDays] = useState(null);

    const { data, setData } = useCreatePlan();

    const { value, setValue } = useTabs();

    const [{ mealPeriods, total, size, numberOfPages, error, loading }, getMealPeriods] = useMealPeriods();

    useEffect(() => {
        if (mealPeriods?.length > 0) {
            setNewWeekDays([
                {
                    name: 'Sunday',
                    mealPeriods: mealPeriodsTransformer(mealPeriods)
                },
                {
                    name: 'Monday',
                    mealPeriods: mealPeriodsTransformer(mealPeriods)
                },
                {
                    name: 'Tuesday',
                    mealPeriods: mealPeriodsTransformer(mealPeriods)
                },
                {
                    name: 'Wednesday',
                    mealPeriods: mealPeriodsTransformer(mealPeriods)
                },
                {
                    name: 'Thursday',
                    mealPeriods: mealPeriodsTransformer(mealPeriods)
                },
                {
                    name: 'Friday',
                    mealPeriods: mealPeriodsTransformer(mealPeriods)
                },
                {
                    name: 'Saturday',
                    mealPeriods: mealPeriodsTransformer(mealPeriods)
                },
            ]);
        }
    }, [mealPeriods])

    const mealPeriodsTransformer = (mealPeriods1) => {
        return mealPeriods1?.map((mealperiod, i) => {
            return {
                ...mealperiod,
                recipes: []
            }
        })
    }

    const handleAddWeek = () => {
        setData((oldData) => {
            return {
                ...oldData,
                weekDays: [...oldData?.weekDays, ...newWeekDays]
            }
        })
    }

    const handleRemoveWeek = () => {
        data?.weekDays?.splice(data?.weekDays?.length - 7, 7)
        setData((oldData) => {
            return {
                ...oldData,
                weekDays: [...data?.weekDays]
            }
        });
    }

    return (
        <div>
            <div className="text-right space-x-4">
                <h1 className="text-center text-xl font-semibold">
                    Please add the number of weeks that you want
                </h1>
                <p className="text-center text-gray-400">
                    The min of days is 7
                </p>
                <br />
                <div className="grid w-full grid-cols-3 sm:grid-cols-4  md:grid-cols-5 lg:grid-cols-7 gap-4">
                    {
                        data?.weekDays?.map((weekDay, i) => {
                            return (
                                <div key={i} className="text-white text-center animate__animated animate__fadeInLeft">
                                    <p className="bg-main h-16 w-16 items-center justify-center rounded-xl flex">
                                        Day {i + 1}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
                <br />
                <div className="flex items-center justify-center space-x-4 text-center space-x-4">
                    <button onClick={handleRemoveWeek} className="px-8 py-2 rounded bg-red-500 text-white">
                        Remove Week
                    </button>
                    <button onClick={handleAddWeek} className="px-8 py-2 rounded bg-main text-white">
                        Add week
                    </button>
                </div>
                <br />
                <button onClick={(e) => setValue(value - 1)} type="button" className="bg-main px-8 py-2 rounded text-white">
                    Back
                </button>
                <button disabled={data?.weekDays?.length < 7} onClick={(e) => setValue(value + 1)} type="button" className="bg-main px-8 py-2 rounded text-white">
                    Next
                </button>
            </div>
        </div>
    )
}

export default StepFour;