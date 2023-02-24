import cancel from "../assets/cancelar.png";
import check from "../assets/cheque.png";


const CalendarDay = ({ num, onClick, day }) => {

    const dayHaveRecipes = (day) => {
        var dayRecipes = day?.mealPeriods.filter((period) => {
            if (period.recipes?.length > 0) {
                return period;
            }
        });


        if (dayRecipes.length > 0) {
            return true;
        } else {
            return false;
        }
    }

    return (
        <div onClick={(e) => { onClick(e, day) }} className='md:h-72 md:w-56 h-16 w-28 text-main flex justify-center items-center border transition duration-300 border-gray-500 transform hover:-translate-y-4 hover:bg-main hover:bg-main hover:text-white cursor-pointer'>
            {
                dayHaveRecipes(day) ?
                    <img style={{ width: "10%" }} src={check} />
                    :
                    <img style={{ width: "10%" }} src={cancel} />
            }
            <p>
            </p>
            <p className='md:font-bold text-sm md:text-xl'>Day</p>
            <p className='md:font-bold text-sm md:text-xl ml-0.5'>{num}</p>
        </div>
    );
}

export default CalendarDay;