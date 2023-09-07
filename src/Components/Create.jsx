
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
                    <input required placeholder=" Name" id="name" value={name} type="text" onChange={e => setName(e.target.value)} />
                    <label htmlFor="gmail">Put your Email</label>
                    <input required placeholder="email" id="gmail" value={gmail} type="gmail" onChange={e => setGmail(e.target.value)} />
                    <label htmlFor="password">Put your Name</label>
                    <input required placeholder="Password" id="password" value={password} type="password" onChange={e => setPassword(e.target.value)} />
                 <button >Create Acount</button>
                </form>
                <div>
                <h1>Connect With </h1><br/>
                
                <div >
                <button><i className="icon1 fa-brands fa-facebook"></i></button>
                <button><i className="icon2 fa-brands fa-google"></i></button>
                <button><i className="icon3 fa-brands fa-instagram"></i></button>
                <button><i className="icon4 fa-solid fa-m"></i></button>
                </div>
                </div>

            </section>
        </div>
    );
};

export default Create;