import React from 'react';

const Cobertura = () => {


    const mapContainerStyle = {
        position: 'relative', // Contenedor con posición relativa
        top: '-1100px',
    };

    const iframeStyle = {
        position: 'absolute', // Mapa con posición absoluta
     
        left: '150px',           // Lo colocamos en la parte superior
    };
    return (
        <div  className='cobertura2' style={mapContainerStyle}>
            <h2>Nuestra cobertura es en toda lima metropolitana</h2>
            <iframe src="https://www.google.com/maps/d/embed?mid=1qTaEjSjn7MZyLNnYGZYQZwRLYpumPbI&ehbc=2E312F" style={iframeStyle} width="700px" height="480" ></iframe>
        </div>
    );
};

export default Cobertura;