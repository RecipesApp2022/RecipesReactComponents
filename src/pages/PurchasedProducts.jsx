import { format } from "date-fns";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Pagination from "../componentes/Pagination";
import RenderActionsButtons from "../componentes/RenderActionsButtons";
import usePurchasedProducts from "../hooks/usePurchasedProducts"

const PurchasedProducts = () => {

    const [filters, setFilters] = useState({
        page: 1,
        perPage: 10,
        productId: '',
        name: '',
        type: ''
    });

    const [{ purchasedProducts, numberOfPages, loading }, getPurchasedProducts] = usePurchasedProducts({ params: { ...filters } }, { useCache: false, manual: true });

    useEffect(() => {
        getPurchasedProducts({
            params: {
                ...filters
            }
        })
    }, [filters])

    const handleChange = (e) => {
        setFilters((oldFilters) => {
            return {
                ...oldFilters,
                [e.target.name]: e.target.value,
                page: 1
            }
        })
    }

    const findSlug = (product) => {
        if (product?.recipe) {
            return `/recipes/${product?.recipe?.slug}`;
        }

        if (product?.plan) {
            return `/plans/${product?.plan?.slug}`;
        }

        if (product?.combo) {
            return `/combos/${product?.combo?.slug}`;
        }
    }

    return (
        <div className="container p-4 md:p-20 h-full w-full mb-20">
            <p className="text-4xl font-bold text-black ">My Purchased Products</p>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="py-2 inline-block w-full">
                        <div>
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
                                            Type
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                            Created At
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                            Actions
                                        </th>
                                    </tr>
                                    <tr>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                            <input
                                                style={{ width: '80%' }}
                                                placeholder="Number"
                                                type="number"
                                                onChange={handleChange}
                                                value={filters?.productId}
                                                name="productId"
                                                className="block m-auto appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            />
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center">
                                            <input type="text"
                                                style={{ width: '80%' }}
                                                placeholder="Name"
                                                onChange={handleChange}
                                                value={filters?.name}
                                                name="name"
                                                className="block m-auto appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            />
                                        </th>
                                        <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-center relative">
                                            <select
                                                onChange={handleChange}
                                                name="type"
                                                value={filters?.type}
                                                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                            >
                                                <option value="">Seleccione...</option>
                                                <option value="plan">Plan</option>
                                                <option value="recipe">Recipe</option>
                                                <option value="combo">Combo</option>
                                            </select>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        loading ?
                                            <tr>
                                                <td colSpan={6} className="text-4xl text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                    Loading...
                                                </td>
                                            </tr>
                                            :
                                            purchasedProducts?.length > 0 ?
                                                purchasedProducts?.map((product, i) => {
                                                    return (
                                                        <tr className="border-b text-center" key={i}>
                                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                                {product?.id}
                                                            </td>
                                                            <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                                                                <Link className="font-bold text-main hover:text-gray-400" to={`${findSlug(product)}`}>
                                                                    {
                                                                        product?.recipe?.name
                                                                    }
                                                                    {
                                                                        product?.combo?.name
                                                                    }
                                                                    {
                                                                        product?.plan?.name
                                                                    }
                                                                </Link>
                                                            </td>
                                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                <b className="capitalize font-bold">
                                                                    {product?.type || '--'}
                                                                </b>
                                                            </td>
                                                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                {product?.createdAt && format(new Date(product?.createdAt), 'dd-MM-yyyy')}
                                                            </td>
                                                            <td className="text-sm space-x-4 text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                <RenderActionsButtons product={product} />
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                                :
                                                <tr className="border-b">
                                                    <td colSpan={6} className="text-center text-red-500 px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                        No results found. 😔
                                                    </td>
                                                </tr>
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <br />
            <div className="flex w-full justify-center">
                <Pagination
                    pages={numberOfPages}
                    onChange={(page) => setFilters((oldFilters) => { return { ...oldFilters, page: page } })}
                    activePage={filters?.page}
                />
            </div>
        </div>
    )
}

export default PurchasedProducts;