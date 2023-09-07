
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Login from './Login';

const ProtectedRoutes = () => {

		// Aquí va la condición. Puede ser una condición de cualquier tipo. Lo que 
		// Importa es que valide si el usuario está loggeado o no

        const credencial = useSelector(state=> state.dataSlice);

    if(credencial.gmail==='administrador' && credencial.password==='1234'){
        return <Outlet />
    } else { 
        alert('credenciales incorrectas');
        return <Navigate to='/create' />
    }   
    
  
    // Aquí le debemos decir la ruta a la que queremos llevar
};                        // al usuario si no está autenticado

export default ProtectedRoutes;
