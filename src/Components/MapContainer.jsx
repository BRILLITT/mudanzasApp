// MapContainer.jsx

import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapContainer = ({ locations, center, zoom }) => {
  return (
    <LoadScript googleMapsApiKey="AIzaSyDyDUwyb6_T9Jt9Kg2zFtA0zI2jeefl5Io">
      <GoogleMap mapContainerStyle={{ width: '100%', height: '400px' }} center={center} zoom={zoom}>
        {locations.map((location, index) => (
          <Marker key={index} position={location} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapContainer;
