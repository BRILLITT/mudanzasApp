// Calendar.jsx
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Calendar = ({ selectedDate, handleDateChange }) => {
  return (
    <DatePicker
      selected={selectedDate}
      onChange={handleDateChange}
      inline
      minDate={new Date()}
      maxDate={new Date().setDate(new Date().getDate() + 30)}
    />
  );
};

export default Calendar;