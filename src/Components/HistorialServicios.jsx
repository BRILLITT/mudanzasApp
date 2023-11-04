import { useEffect, useState } from 'react';

const HistorialServicios = () => {
  const [reservacion, setReservacion] = useState(null);

  useEffect(() => {
    const reservacionGuardada = localStorage.getItem('reservacion');
    if (reservacionGuardada) {
      setReservacion(JSON.parse(reservacionGuardada));
    }
  }, []);

  return (
    <div>
      {reservacion ? (
        <div>
          <h2>Historial de Servicios Realizados</h2>
          <p>Nombre: {reservacion.name}</p>
          <p>Plan seleccionado: {reservacion.selectedPlan}</p>
          <p>Vehículo seleccionado: {reservacion.selectedVehicle}</p>
          <p>Servicios adicionales seleccionados: {reservacion.selectedServices.join(', ')}</p>
          <p>Distancia (kilómetros): {reservacion.distancia}</p>
          <p>Costo estimado: {reservacion.costoEstimado}</p>
          <p>Fecha de Reserva: {reservacion.selectedDate}</p>
          <p>Hora de Reserva: {reservacion.selectedTime}</p>
        </div>
      ) : (
        <h2>No se verifican reservas anteriores</h2>
      )}
    </div>
  );
};

export default HistorialServicios;
