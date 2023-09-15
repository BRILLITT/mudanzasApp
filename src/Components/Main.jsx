import  { useEffect, useState } from 'react';
import {useNavigate,Link} from "react-router-dom";
import "../Styles/App.css";
import Login from './Login';
import { useSelector } from 'react-redux';
import Tools from './Tools';
import images from './assets/images';
const Main = () => {
    const[look,setLook]=useState(false);
    const[saw,setSaw]=useState(false);
    const navigate=useNavigate();
    const constLogin=useSelector(state=>state.dataSlice);
    
    // lineas 15,16 permitirán trabajarás con los datos del usuario registrado. 
    const registerList = useSelector(state => state.userRegisterSlice)
    const registeredUser = registerList.find(posi =>(posi.gmail===constLogin.gmail));
    //console.log(registeredUser);

    useEffect(()=>{
        if(!(constLogin?.name || registeredUser?.name )) {
            setLook(false);
        } else {
            setLook(true);
        }      
    },[constLogin]);

    const back=()=>{
        navigate(-1);
    }

    const see=()=>{
        setLook(!look);
    }

    const  made=()=>{
    setSaw(!saw);
    };

    return (
        <div>
            <header className='header1'>
              <Link className="title1" to={"/"}>Home</Link><br/>
              <Link className="title" to={"/aboutus"}>About Us</Link><br/>
              <Link className="title" to={"/services"}>Services</Link><br/>
              <Link  className="title"to={"/contactus"}>Contact Us</Link><br/>
              {
                (constLogin?.name || registeredUser?.name ) ?
                    <></>
                    :
                    <h1>{look?<Login/>:<></>}</h1>
              }
              {

                
                (constLogin?.name || registeredUser?.name ) ?
                <div className='header_datos'>
                    <button className='button' onClick={made}>
                        <img className='miniImage' src={constLogin.imageUrl? constLogin.imageUrl: images.incognito} alt="" />
                    </button>
                    <br/>
                    <h2>
                        Hi {
                        constLogin.email? 
                            (constLogin.name.slice(0,constLogin.name.indexOf(" ")))
                            :
                            (registeredUser.name.slice(0,registeredUser.name.indexOf(" ")))   
                            }
                    </h2>
                </div>
                : 
                <button onClick={see}>Login</button>
              }
              {
                (constLogin?.name || registeredUser?.name ) ?
                <div>
                    {saw?
                        <Tools/>
                        :
                        <></>
                    }
                </div>
                :
                <div><></></div>
              } 
              <button className="header1_button" onClick={back}>Back</button>
            </header>
        </div>
    );
};

export default Main;