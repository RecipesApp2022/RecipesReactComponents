import BannerChef from "../componentes/BannerChef";
import CardRecipes from "../componentes/CardRecipes";
import InformationChef from "../componentes/InformationChef";
import CertificationChef from "../componentes/CertificationChef";
import DescriptionChef from "../componentes/DescriptionChef";
import Post from "../componentes/Post";
import ButtonItems from "../componentes/ButtonItems";
import SelectOrder from "../componentes/SelectOrder";
import { Link, useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useEffect, useState } from "react";
import { useFeedBack } from "../contexts/FeedBackContext";
import useCombos from "../hooks/useCombos";
import SystemInfo from "../util/SystemInfo";
import Pagination from "../componentes/Pagination";
import imgUrl from "../helpers/imgUrl";
import ContactSeller from "../componentes/Sellers/ContactSeller";

const CombosChef = () => {
  const { slug } = useParams();
  const { setLoading } = useFeedBack();

  const [combosFilters, setCombosFilters] = useState({
    page: 1,
    perPage: 9,
  });

  const [{ data: seller, loading: sellerLoading, error: sellerError }] = useAxios({ url: `/sellers/${slug}` });

  const [{ combos, total, numberOfPages, size, error, loading }, getCombos] = useCombos({ params: { sellerId: seller?.sellerId, ...combosFilters } });

  useEffect(() => {
    setLoading({ message: "Cargando...", show: sellerLoading });
  }, [sellerLoading, setLoading]);

  return (
    <div className="md:min-w-0">
      <BannerChef seller={seller} title="New Recipes" />
      <div className="px-16 py-10">
        <div className=" flex justify-center">
          <ButtonItems defaultCategory="combos" seller={seller} />
        </div>
        <div className="md:flex md:justify-end m-2 ">
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
            combos?.length === 0 && !loading ?
              <h1 className="text-4xl text-center text-red-500">
                No results found.
              </h1>
              :
              null
          }
          <div className="grid md:grid-cols-3 md:gap-4 md:mb-20 md:ml-20 md:mt-2">
            {combos.map((combo) => {
              return (
                <Link to={`/combos/${combo.slug}`} key={combo.id}>
                  <CardRecipes
                    key={combo?.id}
                    texto={combo?.name}
                    price={`${combo?.price}$`}
                    bolsaIng={"2"}
                    cestaIng={"2"}
                    timePre={"2"}
                    nameSellers={"sellers"}
                    title={combo?.name}
                    foto={`${SystemInfo?.api}${combo?.images?.[0]?.path}`}
                    sellerLogo={imgUrl(combo.seller.logo)}
                    hideButtons
                    hideClock
                    hideCart
                  />
                </Link>
              );
            })}
          </div>
          <div className="flex justify-center">
            <Pagination
              pages={numberOfPages}
              onChange={(page) => setCombosFilters((oldFilters) => { return { ...oldFilters, page: page } })}
              activePage={combosFilters?.page}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default CombosChef;
