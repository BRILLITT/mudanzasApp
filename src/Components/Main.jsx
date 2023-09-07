import React, { useState } from 'react';
import {useNavigate,Link} from "react-router-dom";
import "../Styles/App.css";
import Login from './Login';
const Main = () => {
    const[look,setLook]=useState(false);
    const navigate=useNavigate();
    const back=()=>{
        alert("return back");
        navigate(-1);
    }
    const see=()=>{
        setLook(!look);
    }

    return (

        <div>
            
            <header className='header1'>
              <Link className="title1" to={"/"}>Home</Link><br/>
              <Link className="title" to={"/aboutus"}>About Us</Link><br/>
              <Link className="title" to={"/services"}>Services</Link><br/>
              <Link  className="title"to={"/contactus"}>Contact Us</Link><br/>
              <h1>{look?<Login/>:"Login"}</h1>
              <button onClick={see}>Login</button>
              <button className="header1_button" onClick={back}>Back</button>

            </header>
         
        </div>
    );
};

export default Main;