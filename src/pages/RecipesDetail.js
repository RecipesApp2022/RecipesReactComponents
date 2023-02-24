import ProductImagesCarousel from "../componentes/ProductImagesCarousel";
import ProductInfo from "../componentes/ProductInfo";
import { TabsProvider } from "../contexts/TabsContext";
import Tab from "../componentes/Tab";
import TabsContainer from "../componentes/TabsContainer";
import TabPanel from '../componentes/TabPanel';
import DescriptionCard from "../componentes/DescriptionCard";
import useAxios from '../hooks/useAxios';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useFeedBack } from '../contexts/FeedBackContext';
import useRecipe from "../hooks/useRecipe";
import favoriteTypes from "../consts/favoriteTypes";
import SellerPresentCard from "../componentes/Sellers/SellerPresentCard";
import CommentsComponent from "../componentes/CommentsComponent";

const RecipesDetail = () => {
  const { setLoading } = useFeedBack();

  const { slug } = useParams();

  const navigate = useNavigate();

  const [{ recipe, recipeLoading, setRecipe }] = useRecipe(slug);

  const [{ data: createFavoriteData, loading: createFavoriteLoading }, createFavorite] = useAxios({ url: '/favorites', method: 'POST' }, { manual: true });

  const [{ data: toggleSavedData, loading: toggleSavedLoading }, toggleSaved] = useAxios({ url: '/saved/toggle', method: 'POST' }, { manual: true });

  useEffect(() => {
    setLoading({ message: 'Cargando receta', show: recipeLoading });
  }, [recipeLoading]);

  useEffect(() => {
    setLoading({ message: 'Cargando', show: createFavoriteLoading });
  }, [createFavoriteLoading]);

  useEffect(() => {
    setLoading({ message: 'Guardando', show: toggleSavedLoading });
  }, [toggleSavedLoading]);

  useEffect(() => {
    if (createFavoriteData) {
      navigate(createFavoriteData.nextSlug ? `/recipes/${createFavoriteData.nextSlug}` : '/recipes', { replace: true });
    }
  }, [createFavoriteData]);

  useEffect(() => {
    if (typeof toggleSavedData !== 'undefined') {
      setRecipe(prevData => ({
        ...prevData,
        saved: toggleSavedData,
      }));
    }
  }, [toggleSavedData]);

  const handleFavoriteClicked = ({ type, reaction }) => {
    if (!recipe) {
      return;
    }

    createFavorite({
      data: {
        type,
        reaction,
        recipeId: recipe.id
      }
    });
  }

  const handleSavedClicked = ({ type }) => {
    if (!recipe) {
      return;
    }

    toggleSaved({
      data: {
        type,
        recipeId: recipe.id,
      }
    });
  }

  return (
    <>
      <div className="p-4 md:p-16">
        <div className="flex container p-2 md:space-x-6 md:p-2">
          {/* Imagenes carousel */}
          <div className="md:w-1/2 md:flex md:flex-col">
            <ProductImagesCarousel images={recipe?.images} />
          </div>

          {/* ProductInfo*/}
          <ProductInfo
            name={recipe?.name}
            price={recipe?.price > 0 ? `$${recipe?.price}` : 'Free'}
            ingredients={recipe?.recipeIngredients}
            onFavoriteClicked={handleFavoriteClicked}
            onSaveClicked={handleSavedClicked}
            saved={recipe?.saved}
            type={favoriteTypes.RECIPE}
            // description={recipe?.shortDescription}            
            detailsLabel={"Ingredients:"}
            details={[
              ...recipe?.recipeIngredients.map(({ ingredient, measurementUnit, value }) => `${ingredient.name} ${value} ${measurementUnit.name}`) ?? [],
            ]}
            isPremiun={recipe?.isPremium}
            sellerId={recipe?.seller?.id}
            productId={recipe?.id}
            productType="recipe"
            rating={recipe?.rating}
            alreadyAcquired={recipe?.alreadyAcquired}
          />
        </div>

        <DescriptionCard
          showMarketButtons
          hideMarketButtons
          recipe={recipe}
        />

        <TabsProvider>
          {/* Tabs */}
          <TabsContainer className="md:flex flex md:m-10 m-2 mt-6 text-center">
            <Tab value={0}>Description</Tab>
            <Tab value={1}>Seller</Tab>
            <Tab value={2}>Comments</Tab>
          </TabsContainer>

          {/* TAB PANELS */}
          <div className="mt-4 md:p-4">
            {/* Descripción */}
            <TabPanel
              className="animate__animated animate__fadeInUp bg-white rounded-lg p-4"
              value={0}
            >
              {recipe?.description}
            </TabPanel>

            {/* Vendedor */}
            <TabPanel
              className="animate__animated animate__fadeInUp  bg-white rounded-lg"
              value={1}
            >
              <SellerPresentCard seller={recipe?.seller} />
            </TabPanel>

            {/* Comments */}
            <TabPanel
              className="animate__animated animate__fadeInUp p-4"
              value={2}
            >
              <CommentsComponent
                type={'recipe'}
                productId={recipe?.id}
              />
            </TabPanel>
          </div>
        </TabsProvider>
      </div>
      <div className="text-center">
        <h3 className="text-4xl text-gray-500 font-bold ">
          Related Recipes
        </h3>
        <div>
          here are going to be related recipes... 😊
        </div>
      </div>
    </>
  );
};

export default RecipesDetail;
