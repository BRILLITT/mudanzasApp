import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import "../Styles/Administrador.css";
import images from './assets/images';
import { logout } from '../store/slices/data.slice';


const Admin = () => {

    const pambicito = useSelector(state => state.dataSlice)
    {/* <h1>THIS IS MY ADMIN COMPONENT,  BIENVENIDO SEÑOR {pambicito.gmail} !!</h1> */ }
const navigate=useNavigate();
const dispatch=useDispatch();

const Logout=()=>{
    dispatch(logout());
    navigate("/");
}


    return (
        <div className='admin'>
            <section className='panel1'>
               
                <i class="icon fa-solid fa-user-gear"></i>

                <h1>Welcome Administrator</h1>
               <button onClick={Logout}><i class="fa-solid fa-arrow-right-from-bracket"></i>  </button>    
                <Link className="lin1" to={"/admin"}>Gestión de Facturas</Link>
                <Link className="lin1" to={"/admin"}>Credenciales de Usuario</Link>
                <Link className="lin1" to={"/admin"}>Historial de servicios realizados</Link>
                <Link className="lin1" to={"/admin"}>Actualización de Información</Link>


            </section>
            <section className='panel2'>
                
                <div className='galeria'>
                 
                    <div>
                        <p></p>

                      
                    </div>
                    
                   
                </div>
            </section>
        </div>
    );
};

export default Admin;