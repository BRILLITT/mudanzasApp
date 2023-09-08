import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import "../Styles/Customer.css";
import images from './assets/images';
import { logout } from '../store/slices/data.slice';

const Customers = () => {

    const usuario = useSelector(state => state.dataSlice)
    const navigate = useNavigate();
 
   
    // const dispatch = useDispatch();

    // const dispatchData = () => {
    //     dispatch(changeInfo({gmail:gmail,password:password}));
    //     navigate('/Admin')
    // }


    const dispatch = useDispatch();

    const deleteData = ()=> {
        dispatch(logout());
        navigate('/')
    
    }




    return (
        <div className='users'>
            <section className='panel1'>
                <div className='profile'>
                    {(usuario.imageUrl) ? <img className="imguser" src={usuario.imageUrl} alt="" /> : <img className="imguser" src={images.incognito} alt="" />}
                    <h1>{usuario.name ? `Welcome ${usuario.name}` : 'Welcome!, you must first log in'}</h1>
                    <br /> <br />
                   
                  <button className="logout" onClick={deleteData}><i className="icon fa-solid fa-arrow-right-from-bracket"></i></button>

                </div>
                <Link className="lin1" to={"/customer"}>Mis pedidos</Link>
                <Link className="lin1" to={"/customer"}>Seguimiento de servicio</Link>
                <Link className="lin1" to={"/customer"}>Historial de Servicios realizados</Link>
                <Link className="lin1" to={"/customer"}>Configuración</Link>


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

export default Customers;