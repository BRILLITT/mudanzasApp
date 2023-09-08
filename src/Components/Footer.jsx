import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Footer.css"
import Home from './Home';
import Services from './Services';
import ContactUs from './ContactUs';
const Footer = () => {
    return (
        <div className='footer1'>
            <footer className='aboutus_footer' >
                <div>
                    
                </div>
                <div>
                    <i className=" icon fa-solid fa-van-shuttle"></i>
                    <p>Con más de 10 años de experiencia en el transporte de carga y mudanza a tiempo completo. Contamos con diversos tipos de camiones tipo furgón y con baranda de diferentes tamaños ideales para: mudanzas y transporte de carga en general. Nuestros valores son: Responsabilidad y puntualidad.</p>
                </div>
          
                <div>
                    <h1>VISITA NUESTRO CANAL</h1><br/>
                    <iframe width="400" height="315" src="https://www.youtube.com/embed/0o1iRla5ff8" title="TOSCANOS | EMPRESA QUE OFRECE SERVICIOS DE MUDANZAS EN LIMA | 50 IDEAS DE NEGOCIOS RENTABLES EN PERÚ"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
                </div>
                <div >
                   
                    <h1>ENLACES</h1><br/><br/>
                    <div className='footer1_link'>
                    <p><i className="icon fa-solid fa-house"></i> <Link className="link" to={"/"} element={<Home />}>Home</Link></p>
                    <p><i className="icon fa-solid fa-bell-concierge"></i> <Link className="link" to={"/services"} element={<Services />}>Services</Link></p>
                    <p><i className="icon fa-solid fa-address-book"></i><Link className="link" to={"/contactus"} element={<ContactUs />}>Contact Us</Link></p>
                    </div>
                </div>
            </footer>
            <section className='footer2'>
            <h1> Diseño System PE.</h1>
            </section>
        </div>
    );
};

export default Footer;