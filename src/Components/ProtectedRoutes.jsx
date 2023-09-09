import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import admin from '../admin.json'

const ProtectedRoutes = () => {

        const credencial = useSelector(state=> state.dataSlice);


    console.log(credencial);
    if (admin.some(admin => admin.gmail === credencial.gmail && admin.password === credencial.password)) {
        return <Outlet />;
    } else {
        alert('Credenciales incorrectas');
        return <Navigate to="/" />;
    }
};

export default ProtectedRoutes;