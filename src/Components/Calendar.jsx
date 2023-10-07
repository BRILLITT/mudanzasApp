import { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../Styles/Calendar.css';

const Calendar = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [reservedTimes, setReservedTimes] = useState([]);
  const [texto, setTexto] = useState('Reservando... ')
  const [saveText, setSaveText] = useState('Confirmar reserva')

  useEffect(() => {
    const existingReservation = localStorage.getItem('reservacion');
    if (existingReservation) {
      alert('Usted ya cuenta con una reservación en proceso, verifique la opción Mis reservas.');
      setSelectedDate(null); // Esto deselecciona la fecha
      setSelectedTime('');   // Esto deselecciona la hora
    }
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedTime('');
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSave = () => {
    const existingReservation = localStorage.getItem('reservacion');
    if (existingReservation) {
    alert('Usted ya cuenta con una reservación en proceso, verifique la opción Mis reservas.');
    return;
  }
    const presupuestoInfo = JSON.parse(localStorage.getItem('presupuestoInfo'));
    if (!presupuestoInfo) {
      alert('Primero realiza un presupuesto antes de seleccionar una fecha y hora.');
      return;
    }

    if (selectedDate && selectedTime) {
      console.log('Programación realizada con éxito:');
      console.log('Fecha:', selectedDate.toDateString());
      console.log('Hora:', selectedTime);

      const reservacion = {
        ...presupuestoInfo,
        selectedDate: selectedDate.toDateString(),
        selectedTime: selectedTime
      };

      // Agregar el horario seleccionado a los horarios de reservaciones
      setReservedTimes([...reservedTimes, reservacion]);

      // Guardar la reservación en localStorage
      localStorage.setItem('reservacion', JSON.stringify(reservacion));
      setTexto('Reserva realizada con éxito,  ingresa a Mis reservas para más detalles o cambios')
      setSaveText('Reserva realizada')

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
        <h2>Programa Tu Servicio</h2>
        {selectedDate && <p>Fecha seleccionada: {selectedDate.toDateString()}</p>}
        <DatePicker
          calendarClassName="custom-calendar"
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
          {saveText}
        </button>
      </div>
      {selectedDate && selectedTime && (
        <div className="selection-summary">
          <h3>{texto}</h3>

          {localStorage.getItem('reservacion')? (
            <>
            </>
          ):(<>
            <p>Fecha: {selectedDate.toDateString()}</p>
            <p>Hora: {selectedTime}</p>
          </>)}
        </div>
      )}
    </div>
  );
};

export default Calendar;


