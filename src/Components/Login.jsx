import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import "../Styles/Login.css";
const Login = () => {

const [gmail,setGmail]=useState("");
const[password,setPassword]=useState("")
const[show,setShow]=useState(false);
const[user,setUser]=useState({});
const submit=(e)=>{
    console.log("hola")
    e.preventDefault();
    const users={
        id:Date.now(),
        gmail:gmail,
        password:password,
    }
    console.log(users);
setUser(users);
}



const showyou=()=>{ 
   setShow(!show);
}

    return (
        <div   className='login'>
          <section className='login1' >
            <form onSubmit={submit}>
            <br/><br/>
                <label  htmlFor="gmail"/>Enter your Email<label/><br/>
                <input  className='email1 input' placeholder="email address"  type="gmail" id="gmail" value={gmail} onChange={e=>setGmail(e.target.value)}/><br/>
                <label  htmlFor="password">Enter your password</label><br/>
                <div>
                <input placeholder="password" className="input" type={ show?"text":"password"} id="password" value={password} onChange={e=>setPassword(e.target.value)} />
                <button className='eye' onClick={showyou}>{show?<i className="fa-solid icon fa-eye-slash"></i>:<i className="fa-solid icon fa-eye"></i>}</button><br />
                </div><br/>
                <button className='eye2' onClick={submit}>Sign in</button><br />
                <Link to={"/create"}><button className='create'>Create Acount</button></Link>

            </form>

          </section>
        </div>

    );
    
};

export default Login;