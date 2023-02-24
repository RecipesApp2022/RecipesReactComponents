import { useEffect } from "react";
import { useCreatePlan } from "../contexts/CreatePlanContext";
import { TabsProvider, useTabs } from "../contexts/TabsContext";
import StepFive from "./StepFive";
import StepFour from "./StepFour";
import StepOne from "./StepOne";
import StepSix from "./StepSix";
import StepThree from "./StepThree";
import StepTwo from "./StepTwo";

import Tab from "./Tab";
import TabPanel from "./TabPanel";
import TabsContainer from "./TabsContainer";

const CreatePlanForm = ({ defaultData }) => {

    const { data, setData } = useCreatePlan();

    useEffect(() => {
        if (defaultData) {
            console.log(defaultData);
            const { name, id, fullPlanDays, images, categories, description, ...rest } = defaultData;
            console.log(defaultData);
            setData((oldData) => {
                return {
                    ...oldData,
                    name: name,
                    id: id,
                    weekDays: fullPlanDays,
                    categoryIds: categories?.map(category => category?.id),
                    description
                }
            });
        }
    }, [defaultData])

    return (
        <TabsProvider>
            {/* Tabs */}
            <TabsContainer className="md:flex flex flex-wrap justify-center md:m-10 m-2 mt-6 text-center">
                <Tab value={0}>1.- Information</Tab>
                <Tab canContinue={data?.name && data?.description} value={1}>2.- Categories</Tab>
                <Tab canContinue={data?.name && data?.description} value={2}>3.- Images</Tab>
                <Tab canContinue={data?.name && data?.description && data?.images?.length > 0 && data?.images[0]} value={3}>4.- Weeks</Tab>
                <Tab canContinue={
                    data?.name &&
                    data?.images?.length > 0 &&
                    data?.images[0] &&
                    data?.weekDays?.length > 13 &&
                    data?.description
                } value={4}>5.- Recipes</Tab>
                <Tab canContinue={
                    data?.name &&
                    data?.images?.length > 0 &&
                    data?.images[0] &&
                    data?.weekDays?.length > 13 &&
                    data?.description
                } value={5}>6.- Confirm</Tab>
            </TabsContainer>

            {/* TAB PANELS */}
            <div className="mt-4 md:p-4">
                <TabPanel
                    className="animate__animated animate__fadeInUp bg-white rounded-lg p-4"
                    value={0}
                >
                    <StepOne />
                </TabPanel>

                <TabPanel
                    className="animate__animated animate__fadeInUp bg-white rounded-lg p-4"
                    value={1}
                >
                    <StepTwo />
                </TabPanel>

                <TabPanel
                    className="animate__animated animate__fadeInUp bg-white rounded-lg p-4"
                    value={2}
                >
                    <StepThree defaultImages={defaultData?.images} />
                </TabPanel>

                <TabPanel
                    className="animate__animated animate__fadeInUp bg-white rounded-lg p-4"
                    value={3}
                >
                    <StepFour />
                </TabPanel>

                <TabPanel
                    className="animate__animated animate__fadeInUp bg-white rounded-lg p-4"
                    value={4}
                >
                    <StepFive />
                </TabPanel>

                <TabPanel
                    className="animate__animated animate__fadeInUp bg-white rounded-lg p-4"
                    value={5}
                >
                    <StepSix />
                </TabPanel>
            </div>
        </TabsProvider>
    )
}

export default CreatePlanForm;