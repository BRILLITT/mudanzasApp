import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import "../Styles/Login.css";
import { useDispatch } from 'react-redux';
import { changeInfo } from '../store/slices/data.slice';


const Login = () => {

    const [gmail, setGmail] = useState("");
    const [password, setPassword] = useState("")
    const [show, setShow] = useState(false);

    // const submit=(e)=>{
    //     console.log("hola")
    //     e.preventDefault();
    //     const users={
    //         id:Date.now(),
    //         gmail:gmail,
    //         password:password,
    //     }
    //     console.log(users);
    // setUser(users);
    // }



    const showyou = () => {
        setShow(!show);
    }


    // despachamos pa la store
    const dispatch = useDispatch();

    const dispatchData = () => {
        dispatch(changeInfo({gmail:gmail,password:password}));
        navigate('/Admin')
    }

    //ahora para la navegacion 
    const navigate = useNavigate();



    return (
        <div className='login'>
            <section className='login1' >
                <form onSubmit={dispatchData}>
                    <br /><br />
                    <label htmlFor="gmail" />Enter your Email<label /><br />
                    <input required className='email1 input' placeholder="email address" type="gmail" id="gmail" value={gmail} onChange={e => setGmail(e.target.value)} /><br />
                    <label htmlFor="password">Enter your password</label><br />
                    <div>
                        <input required placeholder="password" className="input" type={show ? "text" : "password"} id="password" value={password} onChange={e => setPassword(e.target.value)} />
                        <button type='button' className='eye' onClick={showyou}>{show ? <i className="fa-solid icon fa-eye-slash"></i> : <i className="fa-solid icon fa-eye"></i>}</button><br />
                    </div><br />
                    <button className='eye2'>Sign in</button><br />
                    <Link to={"/create"}><button className='create'>Create Acount</button></Link>
                </form>

            </section>
        </div>

    );

};

export default Login;