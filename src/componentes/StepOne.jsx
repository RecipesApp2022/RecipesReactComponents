import { useCreatePlan } from "../contexts/CreatePlanContext";
import { useTabs } from "../contexts/TabsContext";

const StepOne = () => {

    const { data, setData } = useCreatePlan();

    const { value, setValue } = useTabs();

    const handleChange = (e) => {
        setData((oldData) => {
            return {
                ...oldData,
                [e.target.name]: e.target.value
            }
        })
    }

    return (
        <div>
            <label>Name</label>
            <input style={{ backgroundColor: '#F0F0F0', border: 'none', outline: 'none' }}
                type="text"
                name="name"
                value={data?.name}
                onChange={handleChange}
                placeholder="Plan name..."
                className="w-full mb-4 rounded-xl focus:outline-none focus:ring-main"
            />
            <br />
            <br />
            <label>Description</label>
            <textarea style={{ backgroundColor: '#F0F0F0', border: 'none', outline: 'none' }}
                type="text"
                name="description"
                value={data?.description}
                rows={8}
                onChange={handleChange}
                placeholder="Plan description..."
                className="w-full mb-4 rounded-xl focus:outline-none focus:ring-main"
            />
            <div className="text-right">
                <button disabled={!data?.name && !data?.description} onClick={(e) => setValue(1)} type="button" className="bg-main px-8 py-2 rounded text-white">
                    Next
                </button>
            </div>
        </div>
    )
}

export default StepOne;