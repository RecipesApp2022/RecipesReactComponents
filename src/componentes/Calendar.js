import CalendarDay from "./CalendarDay";

const Calendar = ({ week, onDayClick }) => {
    return (
        <div className='mt-4 py-8 px-10'>
            <p className='text-main text-sm md:text-4xl font-bold p-2 '>Week {week?.week}</p>
            <div className='grid grid-cols-1 md:flex m-auto'>
                {
                    week?.days?.map((day, i) => <CalendarDay key={i} day={day} onClick={onDayClick} num={day?.day} />)
                }
            </div>
        </div>
    );
}

export default Calendar;