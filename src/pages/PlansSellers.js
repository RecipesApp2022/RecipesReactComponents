import BannerChef from "../componentes/BannerChef";
import ButtonItems from "../componentes/ButtonItems";
import CertificationChef from "../componentes/CertificationChef";
import DescriptionChef from "../componentes/DescriptionChef";
import InformationChef from "../componentes/InformationChef";
import Post from "../componentes/Post";
import SelectOrder from "../componentes/SelectOrder";
import WeightPlan from "../componentes/WeightPlan";
import { Link, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";
import { useFeedBack } from "../contexts/FeedBackContext";
import usePlans from "../hooks/usePlans";
import SystemInfo from "../util/SystemInfo";
import Pagination from "../componentes/Pagination";
import ContactSeller from "../componentes/Sellers/ContactSeller";

const PlansSellers = () => {

    const { slug } = useParams();
    const { setLoading } = useFeedBack();
    const [plansFilters, setPlansFilters] = useState({
        page: 1,
        perPage: 9,
    });
    const [{ data: seller, loading: sellerLoading, error: sellerError }] = useAxios({ url: `/sellers/${slug}` });

    const [{ plans, total, numberOfPages, size, error, loading }, getPlans] = usePlans({ params: { sellerId: seller?.sellerId, ...plansFilters } });

    useEffect(() => {
        setLoading({ message: 'Cargando...', show: sellerLoading });
    }, [sellerLoading, setLoading]);

    return (
        <div className="md:min-w-0">
            <BannerChef seller={seller} title="New Recipes" />
            <div className="px-16 py-10">
                <div className="flex justify-center">
                    <ButtonItems defaultCategory="plans" seller={seller} />
                </div>
                <div className="md:flex md:justify-end m-2 ml-2">
                    <SelectOrder />
                </div>
            </div>

            <div className="md:flex p-4 flex-wrap md:flex-nowrap">
                <div className="w-full md:w-[300px] md:shrink-0 bg-white mb-10 md:mb-20 md:ml-8 rounded-lg">
                    <div className="p-4">
                        <InformationChef seller={seller} />
                        <CertificationChef seller={seller} />
                        <DescriptionChef seller={seller} />
                        <Post />
                        <ContactSeller seller={seller} />
                    </div>
                </div>
                <div className="md:w-full">
                    {
                        loading &&
                        <h1 className="text-4xl text-center">
                            Cargando...
                        </h1>
                    }
                    {
                        plans?.length === 0 && !loading ?
                            <h1 className="text-4xl text-center text-red-500">
                                No results found.
                            </h1>
                            :
                            null
                    }
                    <div className="md:grid md:grid-cols-3 md:ml-14 md:mr-4 md:mb-10">
                        {plans.map((plan) => {
                            return (
                                <Link to={`/plan/${plan.slug}`} key={plan.id}>
                                    <WeightPlan
                                        key={plan?.id}
                                        text={plan?.name}
                                        price={`${plan?.price}$`}
                                        title={`${plan?.name}`}
                                        img={`${SystemInfo?.api}${plan?.images?.[0]?.path}`}
                                        logo={`${SystemInfo?.api}${plan?.seller?.logo}`}
                                        hideCart
                                    />
                                </Link>
                            );
                        })}
                    </div>
                    <div className="flex justify-center">
                        <Pagination
                            pages={numberOfPages}
                            onChange={(page) => setPlansFilters((oldFilters) => { return { ...oldFilters, page: page } })}
                            activePage={plansFilters?.page}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default PlansSellers;
