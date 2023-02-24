import { AiOutlineArrowLeft } from "react-icons/ai";
import Pasticho from "../assets/pasticho.png";
import Imagen1 from "../assets/1img.jpg";
import Imagen2 from "../assets/2img.jpg";
import Imagen3 from "../assets/3img.jpg";
import Imagen4 from "../assets/4img.jpg";
import Imagen5 from "../assets/5img.png";
import SwiperOverview from "../componentes/SwiperOverview";
import { Link } from "react-router-dom";
import MealPlanOverviewImages from "../componentes/MealPlanOverviewImages";
import MealDetailOverview from "../componentes/MealDetailOverview";
import Recipes from "../componentes/Recipes";
import CardRecipes from "../componentes/CardRecipes";

const MealPlanOverview = () => {
    return (
        <div className="">
            <div className="flex p-10">
                <div className="p-2 h-full w-full">
                    <div className="rounded-full p-1 bg-white h-10 w-10">
                        <Link to={"/overview"}>
                            <AiOutlineArrowLeft className=" h-8 w-8" />
                        </Link>
                    </div>
                    <div className="mt-10 grid grid-cols-7 gap-14 overflow-y-auto">
                        <div className="overflow-y-auto">
                            <p className="text-center text-xl text-gray-600 p-2">Sunday</p>

                            <MealPlanOverviewImages images={[
                                { name: 'Recipes de lasagna Venezolana', source: Pasticho },
                                { name: 'Papitas', source: Imagen3 },
                                { name: 'Burger Venezolana', source: Imagen1 },
                                { name: 'Coca-cola', source: Imagen5 },
                                { name: 'Papitas', source: Imagen3 },
                            ]} />
                        </div>
                        <div className="overflow-y-auto">
                            <p className="text-center text-xl text-gray-600 p-2">Monday</p>

                            <MealPlanOverviewImages images={[
                                { name: 'Papitas', source: Imagen3 },
                            ]} />
                        </div>
                        <div className="overflow-y-auto">
                            <p className="text-center text-xl text-gray-600 p-2">Tuesday</p>

                            <MealPlanOverviewImages images={[
                                { name: 'Coca-cola', source: Imagen4 },
                                { name: 'Burger Venezolana', source: Imagen1 },
                                { name: 'Coca-cola', source: Imagen5 },
                                { name: 'Papitas', source: Imagen3 },
                            ]} />
                        </div>
                        <div className="overflow-y-auto">
                            <p className="text-center text-xl text-gray-600 p-2">Wednesday</p>

                            <MealPlanOverviewImages images={[
                                { name: 'Burger Venezolana', source: Imagen2 },
                                { name: 'Burger Venezolana', source: Imagen1 },
                                { name: 'Coca-cola', source: Imagen5 },
                                { name: 'Papitas', source: Imagen3 },
                                { name: 'Recipes de lasagna Venezolana', source: Pasticho },
                                { name: 'Burger Venezolana', source: Imagen2 },
                                { name: 'Coca-cola', source: Imagen4 },
                            ]} />
                        </div>
                        <div className="overflow-y-auto">
                            <p className="text-center text-xl text-gray-600 p-2">Thursday</p>

                            <MealPlanOverviewImages images={[

                            ]} />
                        </div>
                        <div className="overflow-y-auto">
                            <p className="text-center text-xl text-gray-600 p-2">Friday</p>

                            <MealPlanOverviewImages images={[
                                { name: 'Burger Venezolana', source: Imagen1 },
                                { name: 'Coca-cola', source: Imagen5 },
                                { name: 'Papitas', source: Imagen3 },
                            ]} />
                        </div>
                        <div className="overflow-y-auto">
                            <p className="text-center text-xl text-gray-600 p-2">Saturday</p>

                            <MealPlanOverviewImages images={[
                                { name: 'Recipes de lasagna Venezolana', source: Pasticho },
                                { name: 'Burger Venezolana', source: Imagen1 },
                            ]} />
                        </div>
                    </div>

                </div>
            </div>
            <div className="bg-main-light p-8">
                <SwiperOverview />
            </div>
            <div className="flex p-20 mb-20">
                <div className="h-full w-full ">
                    <div className="p-2 bg-white rounded-lg shadow">
                        <div className="mt-10 grid grid-cols-3 gap-x-10 gap-y-10">
                            <CardRecipes
                                texto="Coca-cola"
                                parrafo="Ricardo App Team"
                                title="Coca-cola"
                                foto={Imagen5}
                                hideButtons
                                hideCart
                            />
                            <CardRecipes
                                texto="Pizza and Peperoni"
                                parrafo="Ricardo App Team"
                                title="Pizza"
                                foto={Imagen2}
                                hideButtons
                                hideCart
                            />
                            <CardRecipes
                                texto="Tacos al Pastor"
                                parrafo="Ricardo App Team"
                                title="Burger"
                                foto={Imagen1}
                                hideButtons
                                hideCart
                            />

                            <CardRecipes
                                texto="Tacos al Pastor"
                                parrafo="Ricardo App Team"
                                title="Dinner"
                                foto={Imagen1}
                                hideButtons
                                hideCart
                            />
                            <CardRecipes
                                texto="Tacos al Pastor"
                                parrafo="Ricardo App Team"
                                title="Papitas"
                                foto={Imagen3}
                                hideButtons
                                hideCart
                            />
                            <CardRecipes
                                texto="Pasticho Venezolano"
                                parrafo="Ricardo App Team"
                                title="Dinner"
                                foto={Pasticho}
                                hideButtons
                                hideCart
                            />
                            <CardRecipes
                                texto="Tacos al Pastor"
                                parrafo="Ricardo App Team"
                                title="Dinner"
                                foto={Pasticho}
                                hideButtons
                                hideCart
                            />
                            <CardRecipes
                                texto="Tacos al Pastor"
                                parrafo="Ricardo App Team"
                                title="Dinner"
                                foto={Imagen2}
                                hideButtons
                                hideCart
                            />
                            <CardRecipes
                                texto="Tacos al Pastor"
                                parrafo="Ricardo App Team"
                                title="Dinner"
                                foto={Imagen3}
                                hideButtons
                                hideCart
                            />



                            {/* <MealDetailOverview source={Imagen1} text={"Burger"} />
                            <MealDetailOverview source={Imagen2} text={"Fries"} />
                            <MealDetailOverview source={Imagen3} text={"Pizza"} />
                            <MealDetailOverview source={Imagen4} text={"Lasagna"} />
                            <MealDetailOverview source={Pasticho} text={"Pasticho"} />
                            <MealDetailOverview source={Imagen5} text={"Coca-cola"} />
                            <MealDetailOverview source={Imagen5} text={"Coca-cola"} />
                            <MealDetailOverview source={Imagen4} text={"Fries"} />
                            <MealDetailOverview source={Imagen3} text={"Pizza"} />
                            <MealDetailOverview source={Imagen1} text={"Burger"} />
                            <MealDetailOverview source={Imagen5} text={"Coca-cola"} />
                            <MealDetailOverview source={Pasticho} text={"Pasticho"} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MealPlanOverview;