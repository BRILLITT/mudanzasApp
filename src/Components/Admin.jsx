import React from 'react';
import { useSelector } from 'react-redux';

const Admin = () => {

    const pambicito = useSelector(state=> state.dataSlice)

    return (
        <div>
                <h1>THIS IS MY ADMIN COMPONENT,  BIENVENIDO SEÑOR {pambicito.gmail} !!</h1>
        </div>
    );
};

export default Admin;