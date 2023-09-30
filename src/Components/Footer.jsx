import React from 'react';
import { Link } from 'react-router-dom';
import "../Styles/Footer.css"
import Home from './Home';
import Services from './Services';
import ContactUs from './ContactUs';
import { CarouselItem, Col, Row } from 'react-bootstrap';
const Footer = () => {
    return (
        <div  >
            <footer  className='footer1'>
                <Row>
                    <Col className='footer_1_card'>
                    <Row><h1 className='footer_2_card2'>SOBRE NOSOTROS</h1><br/></Row>
                    <Row><i className=" icon_footer1 fa-solid fa-van-shuttle"></i></Row><br />
                    <Row> <p>Con más de 10 años de experiencia en el transporte de carga y mudanza a tiempo completo. Contamos con diversos tipos de camiones tipo furgón y con baranda de diferentes tamaños ideales para: mudanzas y transporte de carga en general. Nuestros valores son: Responsabilidad y puntualidad.</p></Row>
                        
                       
                    </Col>
            
                    <Col className='footer_2_card'>
                        <Row><h1 className='footer_2_card2'>VISITA NUESTRO CANAL</h1><br/></Row>
                        <Row><iframe width="350px" height="315px" src="https://www.youtube.com/embed/0o1iRla5ff8" title="TOSCANOS | EMPRESA QUE OFRECE SERVICIOS DE MUDANZAS EN LIMA | 50 IDEAS DE NEGOCIOS RENTABLES EN PERÚ"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe></Row>
                        
                        
                    </Col>

                    <Col className='enlaces' >
                        <Row><h1 className='footer_2_card2'>ENLACES</h1><br/><br/></Row>
                        <Row>  <div className='footer1_link'>
                        <p><i className="icon fa-solid fa-house"></i> <Link className="link" to={"/"} element={<Home />}>Home</Link></p>
                        <p><i className="icon fa-solid fa-bell-concierge"></i> <Link className="link" to={"/services"} element={<Services />}>Services</Link></p>
                        <p><i className="icon fa-solid fa-address-book"></i><Link className="link" to={"/contactus"} element={<ContactUs />}>Contact Us</Link></p>
                        </div></Row>
                    
                        
                      
                    </Col>
                </Row>
            </footer>
           
        </div>
    );
};

export default Footer;