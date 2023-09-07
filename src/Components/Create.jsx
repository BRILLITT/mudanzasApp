
import { Link } from 'react-router-dom';
import "../Styles/Create.css";
import { useState } from 'react';
const Create = () => {
    const [name, setName] = useState("");
    const [gmail, setGmail] = useState("");
    const [password, setPassword] = useState("");

    const submit = () => {
        alert(`Hola ${name} tu Registro a sido un registro exitoso`);
    }

    return (
        <div className='Create'>
            <section>
                <form onSubmit={submit}>
                    <label htmlFor="name">Put your Name</label>
                    <input placeholder=" Name" id="name" value={name} type="text" onChange={e => setName(e.target.value)} />
                    <label htmlFor="gmail">Put your Name</label>
                    <input placeholder=" Email" id="gmail" value={gmail} type="gmail" onChange={e => setName(e.target.value)} />
                    <label htmlFor="password">Put your Name</label>
                    <input  placeholder=" Password" id="password" value={password} type="password" onChange={e => setPassword(e.target.value)} />
                 <button>Create Acount</button>
                </form>
                <div>
                <h1>Connect With </h1><br/>
                
                <div >
                <i className="icon1 fa-brands fa-facebook"></i>
                <i className="icon2 fa-brands fa-google"></i>
                <i className="icon3 fa-brands fa-instagram"></i>
                <i className="icon4 fa-solid fa-m"></i>
                </div>
                </div>

            </section>
        </div>
    );
};

export default Create;