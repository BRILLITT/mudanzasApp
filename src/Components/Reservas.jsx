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
          <th>Fecha de Reserva:</th>
          <th>Hora de Reserva:</th>
          <th>Plan Elegido:</th>
          <th>Vehículo seleccionado:</th>
          <th>Servicios Adicionales:</th>
          <th>Dirección Destino:</th>
          <th>Referencia:</th>
          <th>Teléfono de Contacto:</th>
          <th>Distancia (kilómetros):</th>
          <th>Costo estimado:</th>
          <th>Pagar el Servicio:</th>
          <th>Eliminar Reserva:</th>
          
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
          <td>{reservacion.distritoDestino} {reservacion.calleDestino}</td>
          <td>{reservacion.referencia}</td>
          <td>{reservacion.number}</td>
          <td>{reservacion.distancia}</td>
          <td>{reservacion.costoEstimado}</td>
          <td> <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank">
  <input type="hidden" name="cmd" value="_s-xclick" />
  <input type="hidden" name="hosted_button_id" value="M2UE4Y3N752LL" />
 
        <select name="os0">
          <option value="Standar">
          {reservacion.costoEstimado}
          </option>
         
        </select>
  
  <input type="hidden" name="currency_code" value="USD" />
  <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Buy Now" />
</form>
  </td>
          <td><button onClick={handleEliminarReserva}>Eliminar Reserva</button></td>
        </tr>
       
      </tbody>
    </Table>
         
          
        </div>
      ) : (
        <h2 className='titu_reservas_no'>No se verifican reservas previas</h2>
      )}
    </div>
  );
};

export default Reservas;
