import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "../Styles/Login.css";
import { useDispatch } from 'react-redux';
import { changeInfo } from '../store/slices/data.slice';
import { gapi } from 'gapi-script';
import GoogleLogin from 'react-google-login';


const Login = () => {

    const clientID = "205032911193-jhoc7egj4ine2os85j320l8u5ss4cfhg.apps.googleusercontent.com";

    useEffect(()=>{
        const start=()=>{
            gapi.auth2.init({
                clientId: clientID,
            })
        }
        gapi.load("client:auth2", start)
    },[])

    const onSuccess = (response)=>{
        console.log(response.profileObj);
        setUser(response.profileObj);    
        dispatch(changeInfo(response.profileObj));
        navigate('/customers')
    }

    const onFailure = ()=>{
        console.log("algo salio mal")
    }


    // USAR LOS DATOS DEL USUARIO
    const [user, setUser] = useState({});




    const [gmail, setGmail] = useState("");
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false);

 
    const showyou = () => {
        setShow(!show);
    }


    // permite invocar funciones del slice 
    const dispatch = useDispatch();
    // estamos creando una funcion que esta usando la variable anterior 
    const dispatchData = () => {
        dispatch(changeInfo({gmail:gmail,password:password}));
        navigate('/Admin')
    }

    //ahora para la navegacion 
    const navigate = useNavigate();



    return (
        <div className='login'>

            
            <section className='login1_login' >
                <form onSubmit={dispatchData}>
                    <br /><br />
                    <label htmlFor="gmail" />Enter your Email<label /><br />
                    <input required className='email1 input' placeholder="email address" type="gmail" id="gmail" value={gmail} onChange={e => setGmail(e.target.value)} /><br />
                    <label htmlFor="password">Enter your password</label><br />
                    <div>
                        <input required placeholder="password" className="input" type={show ? "text" : "password"} id="password" value={password} onChange={e => setPassword(e.target.value)} />
                        <button type='button' className='eye' onClick={showyou}>{show ? <i className="fa-solid icon fa-eye-slash"></i> : <i className="fa-solid icon fa-eye"></i>}</button>
                    </div><br />
                    <div className='button_login'>
                    <p><button >Sign in</button></p>
                    <Link to={"/create"}><button className='create'>Create Acount</button></Link>
                   </div>
                </form>
           
            <GoogleLogin className='google'
            clientId={clientID}
            onSuccess = {onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_policy"}
            />
             </section>
        </div>

    );

};

export default Login;