import BannerChef from "../componentes/BannerChef";
import InformationChef from "../componentes/InformationChef";
import CertificationChef from "../componentes/CertificationChef";
import DescriptionChef from "../componentes/DescriptionChef";
import Post from "../componentes/Post";
import ButtonItems from "../componentes/ButtonItems";
import DescriptionPost from "../componentes/DescriptionPost";
import ButtomButton from "../componentes/ButtomButton";
import { useParams } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { useEffect } from "react";
import { useFeedBack } from "../contexts/FeedBackContext";

const BlogChef = () => {
  const { slug } = useParams();
  const { setLoading } = useFeedBack();

  const [{ data: seller, loading: sellerLoading, error: sellerError }] = useAxios({ url: `/sellers/${slug}` });

  useEffect(() => {
    setLoading({ message: 'Cargando...', show: sellerLoading });
  }, [sellerLoading, setLoading]);

  return (
    <div className="md:min-w-0">
      <BannerChef seller={seller} title="New Recipes" />
      <div className="px-16 py-16">
        <div className=" flex justify-center">
          <ButtonItems seller={seller} />
        </div>
      </div>

      <div className="md:flex p-4 flex-wrap md:flex-nowrap">
        <div className="w-full md:w-[300px] md:shrink-0 bg-white mb-10 md:mb-20 md:ml-8 rounded-lg">
          <div className="p-4">
            <InformationChef seller={seller} />
            <CertificationChef seller={seller} />
            <DescriptionChef seller={seller} />
            <Post />
          </div>
        </div>
        <div className="w-full">
          <div className="space-y-6 md:mt-6 md:ml-20 md:mr-20">
            <h1 className="ml-4 text-5xl font-semibold">Blog</h1>
            <div className="bg-white rounded-xl p-5">
              <DescriptionPost title="5 Formas de Picar Cebolla" />
              <DescriptionPost title="Tips para Mejorar tus Jugos" />
            </div>
          </div>
          <div className="flex justify-center space-x-2 mt-10 mb-10">
            <ButtomButton />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BlogChef;
