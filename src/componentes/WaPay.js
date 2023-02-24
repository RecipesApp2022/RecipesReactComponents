import Instacart from "../assets/Img-button/instacart.jpg"
import AmazonFresh from "../assets/Img-button/amazon-fresh.jpg"
import Wallmart from "../assets/Img-button/wallmart.jpeg"
import IngredientRow from "./IngredientRow";

const WaPay = () => {
    return (
        <IngredientRow colsNumber={3} >
            <div className='p-3 text-center border-b'>
                <p className='text-gray-400 font-medium'>InstaCart</p>
                <img className='m-auto h-20 w-50 ' src={Instacart} alt="Instacart" />
                <p className='text-xl font-bold'>$ 102.03</p>
            </div>
            <div className='p-3 text-center border-b'>
                <p className='text-gray-400 font-medium'>Amazon Fresh</p>
                <img className='m-auto h-20 w-40' src={AmazonFresh} alt="AmazonFresh" />
                <p className='text-xl font-bold'>$ 102.03</p>
            </div>
            <div className='p-3 text-center border-b'>
                <p className='text-gray-400 font-medium'>Walmart</p>
                <img className='m-auto h-20 w-50 ' src={Wallmart} alt="Wallmart" />
                <p className='text-xl font-bold'>$ 102.03</p>
            </div>
        </IngredientRow>
    );
}

export default WaPay;