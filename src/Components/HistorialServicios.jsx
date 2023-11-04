import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import '../Styles/Historial.css';
const HistorialServicios = () => {
  const [reservacion, setReservacion] = useState(null);

  useEffect(() => {
    const reservacionGuardada = localStorage.getItem('reservacion');
    if (reservacionGuardada) {
      setReservacion(JSON.parse(reservacionGuardada));
    }
  }, []);

  return (
    <div className='historial'>
      {reservacion ? (
       <Table striped bordered hover>
       <thead>
         <tr>
           <th>#</th>
           <th>Nombre:</th>
           <th>Hora de Reserva:</th>
           <th>Plan seleccionado:</th>
           <th>Vehículo seleccionado</th>
           <th>Servicios adicionales seleccionados</th>
           <th>Distancia (kilómetros):</th>
           <th>Costo estimado:</th>
          
         </tr>
       </thead>
       <tbody>
         <tr>
           <td>1</td>
           <td>{reservacion.name}</td>
           <td>{reservacion.selectedTime}</td>
           <td>{reservacion.selectedPlan}</td>
           <td>{reservacion.selectedVehicle}</td>
           <td>{reservacion.selectedServices.join(', ')}</td>
           <td>{reservacion.distancia}</td>
           <td>{reservacion.costoEstimado}</td>
          
         </tr>
        
       </tbody>
      
     </Table> 

        // <div>
        //   <h2>Historial de Servicios Realizados</h2>
        //   <p>Nombre: {reservacion.name}</p>
        //   <p>Plan seleccionado: {reservacion.selectedPlan}</p>
        //   <p>Vehículo seleccionado: {reservacion.selectedVehicle}</p>
        //   <p>Servicios adicionales seleccionados: {reservacion.selectedServices.join(', ')}</p>
        //   <p>Distancia (kilómetros): {reservacion.distancia}</p>
        //   <p>Costo estimado: {reservacion.costoEstimado}</p>
        //   <p>Fecha de Reserva: {reservacion.selectedDate}</p>
        //   <p>Hora de Reserva: {reservacion.selectedTime}</p>
        // </div>
      ) : (
        <h2>No se verifican reservas anteriores</h2>
      )}
    </div>
  );
};

export default HistorialServicios;
