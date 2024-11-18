import DatePicker from "react-datepicker";
import "./calendar.css";
import "react-datepicker/dist/react-datepicker.css";
const Calendar = ({ setStartDate, startDate }) => {
  return (
    <div>
      <DatePicker
        placeholder="Math Homework"
        className="react-datepicker__month-container"
        name="date"
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        inline
      />
    </div>
  );
};

export default Calendar;
