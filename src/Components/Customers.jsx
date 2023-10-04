import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import "../Styles/Customer.css";
import images from './assets/images';
import { logout } from '../store/slices/data.slice';
import { Button } from 'react-bootstrap';
import { useState } from 'react';
import Presupuesto from './Presupuesto';
import Agend from './Agend';

const Customers = () => {
    const [showPresupuestoValue, setShowPresupuestoValue] = useState(false);
    const[showScheduleValue,setShowScheduleValue]=useState(false);
    const usuario = useSelector(state => state.dataSlice)
    //lineas 10 y 11 permitiran trabajar con los datos del usuario registrado
    const registerList = useSelector(state => state.userRegisterSlice)
    const registeredUser = registerList.find(posi => (posi.gmail === usuario.gmail));
    // console.log(registeredUser);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // cierre de sesión  - elimina los datos de la cuenta logeada en ese momento.
    const deleteData = () => {
        dispatch(logout());
        navigate('/')
    }
    console.log(usuario.imageUrl);

    const showPresupuesto = () => {
        setShowPresupuestoValue(!showPresupuestoValue)
        setShowScheduleValue(false)
    }
    const showSchedule = () => {
        setShowScheduleValue(!showScheduleValue)
        setShowPresupuestoValue(false)
    }

    return (
        <div className='users'>
            <section className='panel1'>
                <div className='profile'>
                    {(usuario.email) ? <img className="imguser" src={usuario.imageUrl} alt="" /> : <img className="imguser" src={images.incognito} alt="" />}
                    <h1 className='profile_user1_title'>{usuario.name ? `Welcome ${usuario.name.slice(0, (usuario.name.indexOf(" ")))}` : `Welcome  ${registeredUser.name.slice(0, (registeredUser.name.indexOf(" ")))}`}</h1>
                    <button className="logout" onClick={deleteData}>
                        <i className="icon fa-solid fa-arrow-right-from-bracket"></i>
                    </button>
                    <br /><br />
                    <div className='profile_button'>
                       
                            <Button className="lin5" onClick={showPresupuesto}>Haz tu Presupuesto</Button>
                           
                     
                            <Button className="lin4"onClick={showSchedule}>Programa tu servicio</Button>
                        
                        
                            <Button className="lin4" to={"/customer"}>Historial de Compras</Button>
                        
                        <Button className="lin4" to={"/customer"}>Configuración</Button>
                     
                    </div>
                </div>

            </section>
            <section className='panel2'>
                {showPresupuestoValue ? <Presupuesto /> : <></>}

                {showScheduleValue? <Agend/>  :<></>}
              
               
                
            </section>
        </div>
    );
};

export default Customers;