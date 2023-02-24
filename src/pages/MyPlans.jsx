import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import usePlans from "../hooks/usePlans";
import { IoCreate, IoTrashBinSharp } from "react-icons/io5";
import Pagination from "../componentes/Pagination";
import useAxios from "../hooks/useAxios";
import Modal from "../componentes/Modal/Modal";
import { format } from "date-fns";

const MyPlans = () => {

    const { user } = useAuth();

    const [planIdToDelete, setPlanIdToDelete] = useState(null);

    const [plansFilters, setPlansFilters] = useState({
        page: 1,
        clientId: user?.id
    });

    const [{ plans, total, numberOfPages, size, error, loading }, getPlans] = usePlans({ params: { ...plansFilters, clientId: user?.id } });

    const [{ loading: deletePlanLoading }, deletePlan] = useAxios({ method: 'DELETE' }, { manual: true, useCache: false });

    const handleDelete = () => {
        deletePlan({ url: `plans/${planIdToDelete}` }).then(() => {
            getPlans({
                params: {
                    ...plansFilters
                }
            });
            setPlanIdToDelete(null);
        })
    }

    return (
        <div className="container p-4 md:p-20 w-full mb-20">
            <p className="text-4xl font-bold text-black mb-8">My Plans</p>
            <div className="text-right mb-8">
                <Link to="/my-plans/create" className="px-8 py-2 rounded text-white bg-main">
                    Create Plan
                </Link>
            </div>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block w-full">
                        <table className="w-full">
                            <thead className="border-b">
                                <tr>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                        #
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                        Name
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                        Categories
                                    </th>
                                    <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    loading ?
                                        <tr>
                                            <td colSpan={5} className="text-4xl text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                Loading...
                                            </td>
                                        </tr>
                                        :
                                        plans?.length > 0 ?
                                            plans?.map((plan, i) => {
                                                return (
                                                    <tr className="border-b text-center" key={i}>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                            {plan?.id}
                                                        </td>
                                                        <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                                            <Link className="font-bold text-main hover:text-gray-400" to={`/my-plans/${plan?.id}`}>
                                                                {plan?.name}
                                                            </Link>
                                                        </td>
                                                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                            {plan?.categories?.map?.(category => category?.name)?.join(', ')}
                                                        </td>
                                                        <td className="text-sm font-light px-6 py-4 whitespace-nowrap space-x-4">
                                                            <Link className="font-bold text-main hover:text-gray-400" to={`/my-plans/${plan?.id}`}>
                                                                Edit
                                                            </Link>
                                                            <button type="button" onClick={() => setPlanIdToDelete(plan?.id)} className="text-red-500 font-bold text-main hover:text-gray-400">
                                                                Delete
                                                            </button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                            :
                                            <tr className="border-b">
                                                <td colSpan={4} className="text-center text-red-500 px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                    No results found. 😔
                                                </td>
                                            </tr>
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <div className="flex w-full justify-center">
                <Pagination
                    pages={numberOfPages}
                    onChange={(page) => setPlansFilters((oldFilters) => { return { ...oldFilters, page: page } })}
                    activePage={plansFilters?.page}
                />
            </div>
            <Modal onClose={() => setPlanIdToDelete(null)} show={planIdToDelete}>
                <h1 className="text-center text-2xl">
                    are you sure?
                </h1>
                <div className="mt-8 text-center space-x-4">
                    <button onClick={(e) => setPlanIdToDelete(null)} type="button" className="bg-main px-8 py-2 rounded-xl text-white">
                        Cancel
                    </button>
                    <button onClick={handleDelete} type="button" className="bg-main px-8 py-2 rounded-xl text-white">
                        {
                            deletePlanLoading ?
                                'Loading'
                                :
                                'Confirm'
                        }
                    </button>
                </div>
            </Modal>
        </div >
    )
}

export default MyPlans;