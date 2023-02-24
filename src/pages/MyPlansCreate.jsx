import CreatePlanForm from "../componentes/CreatePlanForm";
import { CreatePlanProvider } from "../contexts/CreatePlanContext";

const MyPlansCreate = () => {

    return (
        <CreatePlanProvider>
            <div className="container p-4 md:p-8 w-full mb-20">
                <h1 className="font-bold text-2xl">
                    Create plan
                </h1>
                <CreatePlanForm />
            </div>
        </CreatePlanProvider>
    )
}

export default MyPlansCreate;