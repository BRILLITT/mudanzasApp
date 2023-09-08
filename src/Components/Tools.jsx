import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Tools.css";
const Tools = () => {
    return (
        <div className='Tools'>
            <button><Link to={"/customers"}>My profile</Link></button>
            <button>Log Out</button>
        </div>
    );
};

export default Tools;