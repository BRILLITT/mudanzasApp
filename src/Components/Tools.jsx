import { Link } from 'react-router-dom';

import "../Styles/Tools.css";
import { useDispatch} from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../store/slices/data.slice';

const Tools = () => {


    const navigate=useNavigate();
    const dispatch = useDispatch();

    const deleteData = ()=> {
        dispatch(logout());
        navigate('/');
    
    }
    return (
        <div className='Tools'>
            <button className='my'><Link className="my_to" to={"/customers"}>Profile</Link></button>

            <button onClick={deleteData} className='log'>Log Out</button>
        </div>
    );
};

export default Tools;