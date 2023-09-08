import React from 'react';
import { useSelector } from 'react-redux';

const Customers = () => {

    const usuario = useSelector(state=> state.dataSlice)

    return (
        <div>
            <h1>ESTA ES LA SECCION DE CLIENTES !!   BIENVENIDO {usuario.name} </h1>     
        </div>
    );
};

export default Customers;