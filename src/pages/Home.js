import Card from "../componentes/Card";
import SwiperHome from "../componentes/SwiperHome";
import SwiperCategoryCard from "../componentes/SwiperCategoryCard";
import SwiperWeightPlan from "../componentes/SwiperWeightPlan";
import SwiperPopular from "../componentes/SwiperPopular";
import ChefsCountries from "../componentes/ChefsCountries";
import ChefsW from "../assets/chefsW.jpg";
import ChefsSw from "../assets/chefsSw.jpg";
import FlagIta from "../assets/FlagItalia.jpg";
import FlagMex from "../assets/FlagMexico.png";
import logo from "../assets/img2.jpg";
import SwiperRecipes from "../componentes/SwiperRecipes";
import Public from "../assets/Public.jpg";
import CategoriesVideo from "../componentes/CategoriesVideo";
import SwiperCombos from "../componentes/SwiperCombos";

const Home = () => {
  return (
    <div>
      {/*-------- swiper de home --------*/}
      <SwiperHome />

      {/*-------- Category of Recipes --------*/}
      <div className="container p-2">
        <Card saludo="Category of Recipes" />
      </div>
      <div className="container">
        <div className="flex justify-center space-x-6 mx-8">
          <SwiperCategoryCard />
        </div>
      </div>

      {/*-------- Popular --------*/}
      <div className="container p-2">
        <Card saludo="Popular" />
      </div>
      <SwiperPopular />

      {/*-------- Plans --------*/}
      <div className="container p-2">
        <Card saludo="Plans" title="See All" link="/plans" />
      </div>

      <div className="container flex">
        <div className="container flex">
          <SwiperWeightPlan />
        </div>
      </div>

      {/*--------- Video --------*/}
      <div className="container p-2">
        <CategoriesVideo />
      </div>

      {/*-------- Recipes ---------*/}
      <div className="container p-2 ">
        <Card saludo="Recipes" title="See All" link="/recipes" />
      </div>
      <div className="container pb-2">
        <SwiperRecipes />
      </div>

      {/*--------- Imgs Public --------*/}
      <div >
        <img className="md:w-full md:h-96 py-4" src={Public} alt="Public" />
      </div>

      {/*-------- Combos --------*/}
      <div className="container p-2">
        <Card saludo="Combos" title="See All" />
      </div>
      <div className="container p-10">
        <SwiperCombos />
      </div>

      {/*-------- Popular by Countries --------*/}
      <div className="container p-2">
        <Card saludo="Popular by Countries" />
      </div>
      <div className="m-auto md:flex container">
        <ChefsCountries imgChefs={ChefsW} LogoBackg={logo} imgFlag={FlagIta} name="Benito" sname="Molina" />
        <ChefsCountries imgChefs={ChefsSw} LogoBackg={logo} imgFlag={FlagMex} name="Giada" sname="de Laurentiis" />
        <ChefsCountries imgChefs={ChefsW} LogoBackg={logo} imgFlag={FlagIta} name="Benito" sname="Molina" />
        <ChefsCountries imgChefs={ChefsSw} LogoBackg={logo} imgFlag={FlagMex} name="Giada" sname="de Laurentiis" />
      </div>

    </div>

  );
};

export default Home;
