import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Styles/Calendar.css';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [reservedTimes, setReservedTimes] = useState([]);

  useEffect(() => {
    // Simulación de franjas horarias ya reservadas
    setReservedTimes([
      { date: new Date(), time: '10:00 AM' },
      { date: new Date(), time: '1:00 PM' },
    ]);
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime('');
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSave = () => {
    if (selectedDate && selectedTime) {
      console.log('Programación realizada con éxito:');
      console.log('Fecha:', selectedDate.toDateString());
      console.log('Hora:', selectedTime);
      // Agregar el horario seleccionado a los horarios reservados
      setReservedTimes([...reservedTimes, { date: selectedDate, time: selectedTime }]);
    } else {
      alert('Selecciona una fecha y hora antes de guardar.');
    }
  };

  const isTimeReserved = (time) => {
    const reservedTime = reservedTimes.find(
      (reserved) =>
        reserved.date?.toDateString() === selectedDate?.toDateString() && reserved.time === time
    );

    return {
      reserved: !!reservedTime,
      selected: selectedTime === time,
    };
  };

  return (
    <div className="calendar-container">
      <div className="calendar">
        <h2>Calendario</h2>
        {selectedDate && <p>Fecha seleccionada: {selectedDate.toDateString()}</p>}
        <DatePicker
          selected={selectedDate}
          onChange={handleDateChange}
          inline
          minDate={new Date()}
          maxDate={new Date().setDate(new Date().getDate() + 30)}
        />
      </div>
      <div className="time-selection">
        <h2>Selecciona una hora</h2>
        <select onChange={handleTimeChange} disabled={!selectedDate}>
          <option value="">Selecciona una hora</option>
          <option
            value="8:00 AM"
            disabled={isTimeReserved('8:00 AM').reserved}
            className={isTimeReserved('8:00 AM').selected ? 'selected-time' : ''}>
            8:00 AM
          </option>
          <option
            value="10:00 AM"
            disabled={isTimeReserved('10:00 AM').reserved}
            className={isTimeReserved('10:00 AM').selected ? 'selected-time' : ''}>
            10:00 AM
          </option>
          <option
            value="1:00 PM"
            disabled={isTimeReserved('1:00 PM').reserved}
            className={isTimeReserved('1:00 PM').selected ? 'selected-time' : ''}>
            1:00 PM
          </option>
          <option
            value="6:00 PM"
            disabled={isTimeReserved('6:00 PM').reserved}
            className={isTimeReserved('6:00 PM').selected ? 'selected-time' : ''}>
            6:00 PM
          </option>
        </select>
      </div>
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

export default Calendar;
