import React from 'react';
import { useState } from 'react';
import "../Styles/Contactus.css";
const ContactUs = () => {

    const [name, setName] = useState("");
    const [gmail, setGmail] = useState("");
    const [asunto, setAsunto] = useState("");
    const [message, setMessage] = useState("");


    const submit = (e) => {
        e.preventDefault();
        alert(`Hola ${name} tus datos han sido enviados correctamente`);
        const date = {
            id: Date.now(),
            name: name,
            gmail: gmail,
            asunto: asunto,
            message: message,
        }
        console.log(date);
    }

    return (
        <div className='constactus'>
          
            <section className='Contactus_1'>
                <p>Comunícate con nosotros</p><h1>Contact Us</h1>
            </section>
            <section className='Contactus_2'>
                <div>
                    <i className="icon fa-solid fa-map"></i>
                    <p><span>OFICINA </span><br />
                        <p><i className="icon fa-solid fa-location-dot"></i> Av. Gran Chimú 1300, Zarate
                            San Juan de Lurigancho. Lima, Perú</p></p>
                </div>
                <div>
                    <i className="icon fa-solid fa-mobile-screen-button"></i>
                    <p><span>CENTRAL</span><br />
                        <p> <i className=" icon fa-solid fa-phone"></i>  (+51) 902 819 629 <br />
                            Lun a Dom 9 AM – 7 PM</p></p>
                </div>
                <div>
                    <i className="icon fa-solid fa-envelope"></i>
                    <p><span>EMAIL</span><br />
                        <p><i className="icon fa-regular fa-envelope-open"></i>  info@movilpackperu.com</p></p>
                </div>

            </section>
            <section className='Contactus_3' >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7804.000280533851!2d-77.00119597824411!3d-12.043510890849717!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c7c7e4aa0e3b%3A0xf7584c48cc3137ac!2sMobiliaria%20art%20%26%20decort!5e0!3m2!1ses-419!2spe!4v1694007710238!5m2!1ses-419!2spe" width="100%" height="800" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </section>
            <section className='Contactus_4' >
                
                
                <form onSubmit={submit}>
                <h2>ENVÍANOS UN CORREO ELECTRÓNICO</h2>
                <p>Los campos obligatorios están marcados *</p>
                    <label  htmlFor="name">Put your Name:(obligatorio) </label><br />
                    <input className='input' required type="text" placeholder={"*name"} id="name" value={name} onChange={e => setName(e.target.value)} /><br />
                    <label htmlFor="email">Put your gmail:(obligatorio)  </label><br />
                    <input className='input' placeholder={"*gmail"} required type="gmail" value={gmail} id="email" onChange={e => setGmail(e.target.value)} /><br />
                    <label htmlFor="asunto">Put your asunto:</label><br />
                    <input className='input' placeholder={"asunto"} type="text" value={asunto} id="asunto" onChange={e => setAsunto(e.target.value)} /><br />
                    <label htmlFor="message">Put your message:</label><br />
                    <textarea placeholder={"enter your message"} name="message" id="message" value={message} onChange={e => setMessage(e.target.value)} cols="30" rows="10" ></textarea><br />
                    <button >Submit</button>
                </form>

            </section>
            <section className='aboutus_4'>
                <i>Empresa peruana que le ofrece soluciones en el transporte de carga y mudanza</i>
                <h1>TRANSPORTAMOS TUS COSAS CON SEGURIDAD Y CONFIANZA</h1>
            </section>



        </div>
    );
};

export default ContactUs;