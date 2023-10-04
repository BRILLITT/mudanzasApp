import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';


const Calendar = ({ selectedDate, handleDateChange, selectedTimeSlots }) => {
  const [availableTimes, setAvailableTimes] = useState([
    '8:00 AM',
    '10:00 AM',
    '1:00 PM',
    '6:00 PM'
  ]);

  useEffect(() => {
    const usedTimes = selectedTimeSlots
      .filter((timeSlot) => isSameDay(new Date(timeSlot), selectedDate))
      .map((timeSlot) => timeSlot.getHours() + ':' + ('0' + timeSlot.getMinutes()).slice(-2));

    setAvailableTimes((prev) => prev.filter((time) => !usedTimes.includes(time)));
  }, [selectedDate, selectedTimeSlots]);

  const isSameDay = (date1, date2) =>
    date1.getFullYear() === date2.getFullYear() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getDate() === date2.getDate();

  return (
    <DatePicker
      selected={selectedDate}
      onChange={(date) => handleDateChange(date)}
      inline
      minDate={new Date()} // Solo permite fechas a partir de hoy
      maxDate={new Date().setDate(new Date().getDate() + 30)} // Rango de 30 días
      showTimeSelect
      timeFormat="HH:mm"
      timeIntervals={60}
      timeCaption="Hora"
      dateFormat="MMMM d, yyyy h:mm aa"
      excludeTimes={selectedTimeSlots}
      filterTime={(time) => {
        const hours = time.getHours() + ':' + ('0' + time.getMinutes()).slice(-2);
        return !availableTimes.includes(hours);
      }}
    />
  );
};

const Agend = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Resetear la hora al cambiar la fecha
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSave = () => {
    if (selectedDate && selectedTime) {
      const selectedDateTime = new Date(selectedDate);
      const [hours, minutes] = selectedTime.split(':');
      selectedDateTime.setHours(hours, minutes, 0, 0);
      setSelectedTimeSlots((prev) => [...prev, selectedDateTime]);
    }
  };

  return (
    <div className="calendar-container">
      <div className="calendar">
        <h1>Selecciona un día</h1>
        <Calendar
          selectedDate={selectedDate}
          handleDateChange={handleDateChange}
          selectedTimeSlots={selectedTimeSlots}
        />
      </div>
      {selectedTime && (
        <div className="time-selection">
          <h2>Selecciona una hora</h2>
          <p>Hora seleccionada: {selectedTime}</p>
        </div>
      )}
      <div className="save-button">
        <button onClick={handleSave} disabled={!selectedDate || !selectedTime}>
          Guardar
        </button>
      </div>
      {selectedDate && selectedTime && (
        <div className="selection-summary">
          <h3>Resumen de la selección:</h3>
          <p>Fecha: {selectedDate.toDateString()}</p>
          <p>Hora: {selectedTime}</p>
        </div>
      )}
    </div>
  );
};

export default Agend;