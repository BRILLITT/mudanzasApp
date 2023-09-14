import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import "../Styles/Customer.css";
import images from './assets/images';
import { logout } from '../store/slices/data.slice';

const Customers = () => {
    const usuario = useSelector(state => state.dataSlice)
    const userRegistered = useSelector(state => state.userRegisterSlice)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // cierre de sesión  - elimina los datos de la cuenta logeada en ese momento.
    const deleteData = ()=> {
        dispatch(logout());
        navigate('/')
    }

    return (
        <div className='users'>
            <section className='panel1'>
                <div className='profile'>
                    {(usuario.imageUrl) ? <img className="imguser" src={usuario.imageUrl} alt="" /> : <img className="imguser" src={images.incognito} alt="" />}
                    {/* ${userRegistered.name.slice(0,(userRegistered.name.indexOf(" ")))} */}
                    <h1>{usuario.name ? `Welcome ${usuario.name.slice(0,(usuario.name.indexOf(" ")))}` : `Welcome `}</h1> 
                    <button className="logout" onClick={deleteData}>
                        <i className="icon fa-solid fa-arrow-right-from-bracket"></i>
                    </button>
                    <br /><br />
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