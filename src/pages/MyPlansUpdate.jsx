import { useEffect } from "react";
import { useParams } from "react-router-dom";
import CreatePlanForm from "../componentes/CreatePlanForm";
import { CreatePlanProvider } from "../contexts/CreatePlanContext";
import useAxios from "../hooks/useAxios";

const MyPlansUpdate = () => {

    const { id } = useParams();

    const [{ data, loading }, getPlan] = useAxios({ url: `/plans/${id}` }, { useCache: false });

    return (
        <CreatePlanProvider>
            <div className="container p-4 md:p-20 w-full mb-20">
                <h1 className="font-bold text-2xl">
                    Create plan
                </h1>
                <CreatePlanForm defaultData={data} />
            </div>
        </CreatePlanProvider>
    )
}

export default MyPlansUpdate;