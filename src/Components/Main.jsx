import React, { useEffect, useState } from 'react';
import {useNavigate,Link} from "react-router-dom";
import "../Styles/App.css";
import Login from './Login';
import { useSelector } from 'react-redux';
import Tools from './Tools';
const Main = () => {
    const[look,setLook]=useState(false);
    const[saw,setSaw]=useState(false);
    const navigate=useNavigate();
    const constLogin=useSelector(state=>state.dataSlice);

    useEffect(()=>{
        if(!constLogin.name) {
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
console.log(saw);


    return (

        <div>
            
            <header className='header1'>
              <Link className="title1" to={"/"}>Home</Link><br/>
              <Link className="title" to={"/aboutus"}>About Us</Link><br/>
              <Link className="title" to={"/services"}>Services</Link><br/>
              <Link  className="title"to={"/contactus"}>Contact Us</Link><br/>
              {constLogin.name ?<></>:<h1>{look?<Login/>:<></>}</h1>}
             
              {constLogin.name ?<div className='header_datos'>
                <button className='button' onClick={made}><img className='' src={constLogin.imageUrl} alt="" /></button>
              <br/><h2>Hi {constLogin.name.slice(0,constLogin.name.indexOf(" "))}</h2></div>: <button onClick={see}>Login</button>}
              
              {constLogin.name?<div>{saw?<Tools/>:<></>}</div>:<></>}
              
              <button className="header1_button" onClick={back}>Back</button>
            </header>
         
        </div>
    );
};

export default Main;