import { format } from "date-fns";

const DateFormatter = ({ value, dateFormat = 'yyyy-MM-dd' }) => format(new Date(value), dateFormat);

export default DateFormatter;