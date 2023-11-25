import  { useState } from 'react';
import AutocompleteInput from './AutocompleteInput';
import "../Styles/Pre.css";

const Distance = () => {

    const [directions, setDirections] = useState({
        origin: '',
        destination: ''
      });

      const [distance, setDistance] = useState(0);
    
      const handleSelect = (address, type) => {
        setDirections(prevState => ({
          ...prevState,
          [type]: address
        }));
      };
    
      const handleCalculateDistance = () => {
        if (directions.origin && directions.destination) {
          // Realiza la lógica de cálculo de distancia aquí
          // Puedes utilizar la API de Google Maps Distance Matrix o Directions
          // Ejemplo (suponiendo que ya hayas cargado la API de Google Maps):
          const service = new window.google.maps.DistanceMatrixService();
    
          service.getDistanceMatrix({
            origins: [directions.origin],
            destinations: [directions.destination],
            travelMode: 'DRIVING',
          }, (response, status) => {
            if (status === 'OK') {
              console.log('Distancia:', response.rows[0].elements[0].distance.text);
              setDistance(response.rows[0].elements[0].distance.text);
            } else {
              console.error('Error al calcular la distancia:', status);
            }
          });
        } else {
          console.log('Aún no has ingresado las direcciones');
        }
      };

    return (
        <div className='disance'> 
    
      <AutocompleteInput
        onSelect={(address) => handleSelect(address, 'origin')}
      />
      <AutocompleteInput
        onSelect={(address) => handleSelect(address, 'destination')}
      />
      <button onClick={handleCalculateDistance}>Calcular Distancia</button>
        <h3>Distancia: {distance}</h3>
    </div>
    );
};

export default Distance;