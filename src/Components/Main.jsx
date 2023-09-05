import React from 'react';
import {useNavigate,Link} from "react-router-dom";
import "../App.css";
const Main = () => {

    const navigate=useNavigate();
    const back=()=>{
        alert("return back");
        navigate(-1);
    }

    return (

        <div>
            <header className='header1'>
              <Link className="title1" to={"/"}>Home</Link><br/>
              <Link className="title" to={"/aboutus"}>About Us</Link><br/>
              <Link className="title" to={"/services"}>Services</Link><br/>
              <Link  className="title"to={"/contactus"}>Contact Us</Link><br/>
              <Link className="title" to={"/login"}>Login</Link>  <br/>
              <button className="header1_button" onClick={back}>Back</button>

            </header>
         
        </div>
    );
};

export default Main;