import React, { useState, useEffect } from 'react';

const Reservas = () => {

   
  const [reservacion, setReservacion] = useState(null);

  useEffect(() => {
    const reservacionGuardada = localStorage.getItem('reservacion');
    if (reservacionGuardada) {
      setReservacion(JSON.parse(reservacionGuardada));
    }
  }, []);

  const handleEliminarReserva = () => {
    localStorage.removeItem('selectedDate');
    localStorage.removeItem('presupuestoInfo');
    localStorage.removeItem('reservacion');
    setReservacion(null);
    alert('La reserva ha sido eliminada.');
  };

  return (
    <div>
      {reservacion ? (
        <div>
          <p><strong>Fecha de Reserva:</strong> {reservacion.selectedDate}</p>
          <p><strong>Hora de Reserva:</strong> {reservacion.selectedTime}</p>
          <p><strong>Plan seleccionado:</strong> {reservacion.selectedPlan}</p>
          <p><strong>Vehículo seleccionado:</strong> {reservacion.selectedVehicle}</p>
          <p><strong>Servicios adicionales seleccionados:</strong> {reservacion.selectedServices.join(', ')}</p>
          <p><strong>Distancia (kilómetros):</strong> {reservacion.distancia}</p>
          <p><strong>Costo estimado:</strong> S/{reservacion.costoEstimado}</p>

          <button onClick={handleEliminarReserva}>Eliminar Reserva</button>
        </div>
      ) : (
        <h2>No se verifican reservas previas</h2>
      )}
    </div>
  );
};

export default Reservas;
