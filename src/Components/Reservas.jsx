import React, { useState, useEffect } from 'react';
import "../Styles/Reservas.css"
import Table from 'react-bootstrap/Table';
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
    <div className='reservas_info'>
      {reservacion ? (
        <div>
          
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Fecha de Reserva</th>
          <th>Hora de Reserva</th>
          <th>Plan seleccionado</th>
          <th>Vehículo seleccionado</th>
          <th>Servicios adicionales seleccionados</th>
          <th>Distancia (kilómetros):</th>
          <th>Costo estimado:</th>
          <th>Eliminar Reserva</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>{reservacion.selectedDate}</td>
          <td>{reservacion.selectedTime}</td>
          <td>{reservacion.selectedPlan}</td>
          <td>{reservacion.selectedVehicle}</td>
          <td>{reservacion.selectedServices.join(', ')}</td>
          <td>{reservacion.distancia}</td>
          <td>{reservacion.costoEstimado}</td>
          <td><button onClick={handleEliminarReserva}>Eliminar Reserva</button></td>
        </tr>
       
      </tbody>
    </Table>
         
          
        </div>
      ) : (
        <h2>No se verifican reservas previas</h2>
      )}
    </div>
  );
};

export default Reservas;
