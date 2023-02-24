import ProductImagesCarousel from "../componentes/ProductImagesCarousel";
import ProductInfo from "../componentes/ProductInfo";
import { TabsProvider } from "../contexts/TabsContext";
import Tab from "../componentes/Tab";
import TabsContainer from "../componentes/TabsContainer";
import TabPanel from "../componentes/TabPanel";
import DescriptionCard from "../componentes/DescriptionCard";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';
import useAxios from "../hooks/useAxios";
import favoriteTypes from "../consts/favoriteTypes";
import { useFeedBack } from "../contexts/FeedBackContext";
import useCombo from "../hooks/useCombo";
import SellerPresentCard from "../componentes/Sellers/SellerPresentCard";
import CommentsComponent from "../componentes/CommentsComponent";

const CombosDetail = () => {
  const { setLoading } = useFeedBack();

  const { slug } = useParams();

  const navigate = useNavigate();

  const [{ combo, comboLoading, setCombo }] = useCombo(slug);

  const [{ data: createFavoriteData, loading: createFavoriteLoading }, createFavorite] = useAxios({ url: '/favorites', method: 'POST' }, { manual: true });

  const [{ data: toggleSavedData, loading: toggleSavedLoading }, toggleSaved] = useAxios({ url: '/saved/toggle', method: 'POST' }, { manual: true });

  useEffect(() => {
    setLoading({ message: 'Cargando combo', show: comboLoading });
  }, [comboLoading]);

  useEffect(() => {
    setLoading({ message: 'Cargando', show: createFavoriteLoading });
  }, [createFavoriteLoading]);

  useEffect(() => {
    setLoading({ message: 'Guardando', show: toggleSavedLoading });
  }, [toggleSavedLoading]);

  useEffect(() => {
    if (createFavoriteData) {
      navigate(createFavoriteData.nextSlug ? `/combos/${createFavoriteData.nextSlug}` : '/combos', { replace: true });
    }
  }, [createFavoriteData]);

  useEffect(() => {
    if (typeof toggleSavedData !== 'undefined') {
      setCombo(prevData => ({
        ...prevData,
        saved: toggleSavedData,
      }));
    }
  }, [toggleSavedData]);

  const handleFavoriteClicked = ({ type, reaction }) => {
    if (!combo) {
      return;
    }

    createFavorite({
      data: {
        type,
        reaction,
        comboId: combo.id
      }
    });
  }

  const handleSavedClicked = ({ type }) => {
    if (!combo) {
      return;
    }

    toggleSaved({
      data: {
        type,
        comboId: combo.id,
      }
    });
  }

  return (
    <>
      <div className="p-4 md:p-16">
        <div className="flex container p-2 md:space-x-6 md:p-2">
          {/* Imagenes carousel */}
          <div className="md:w-1/2 md:flex md:flex-col">
            <ProductImagesCarousel images={combo?.images} />
          </div>

          {/* ProductInfo*/}
          <ProductInfo
            name={combo?.name}
            price={`$${combo?.price}`}
            detailsLabel={"Includes:"}
            details={[
              ...combo?.recipes.map(recipe => ({ ...recipe, uri: `/recipes/${recipe.slug}` })) ?? [],
              ...combo?.plans.map(plan => ({ ...plan, uri: `/plans/${plan.slug}` })) ?? []
            ]}
            type={favoriteTypes.COMBO}
            onSaveClicked={handleSavedClicked}
            onFavoriteClicked={handleFavoriteClicked}
            saved={combo?.saved}
            sellerId={combo?.seller?.id}
            productId={combo?.id}
            productType="combo"
            isPremiun
            rating={combo?.rating}
            alreadyAcquired={combo?.alreadyAcquired}
          />
        </div>

        {/* DescriptionCard*/}
        <DescriptionCard
          hideMarketButtons
        />

        <TabsProvider>
          {/* Tabs */}
          <TabsContainer className="md:flex flex md:m-10 m-2 mt-6 text-center">
            <Tab value={0}>Description</Tab>
            <Tab value={1}>Seller</Tab>
            <Tab value={2}>Comments</Tab>
          </TabsContainer>

          {/* TAB PANELS */}
          < div className="mt-4 md:p-4" >
            {/* Descripción */}
            <TabPanel
              className="animate__animated animate__fadeInUp bg-white rounded-lg p-4"
              value={0}
            >
              {combo?.description}
            </TabPanel>

            {/* Preparation */}
            <TabPanel
              className="animate__animated animate__fadeInUp  bg-white rounded-lg "
              value={1}
            >
              <SellerPresentCard seller={combo?.seller} />
            </TabPanel>

            {/* Ingredients price Comparator */}
            <TabPanel
              className="animate__animated animate__fadeInUp"
              value={2}
            >
              <CommentsComponent
                type={'combo'}
                productId={combo?.id}
              />
            </TabPanel>
          </div>
        </TabsProvider>
      </div>
      <div className="text-center">
        <h3 className="text-4xl text-gray-500 font-bold ">
          Related Combos
        </h3>
        <div>
          here are going to be related combos... 😊
        </div>
      </div>
    </>
  );
};

export default CombosDetail;
