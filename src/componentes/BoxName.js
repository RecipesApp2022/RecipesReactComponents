import BoxCalendar from "../componentes/BoxCalendar";

const BoxName = ({ name }) => {
    return (
        <div className="text-lg font-bold">
            <span className="">
                {name}
            </span>
            <BoxCalendar />
            <BoxCalendar />
            <BoxCalendar />
            <BoxCalendar />
            <BoxCalendar />
        </div>

    );
}

export default BoxName;