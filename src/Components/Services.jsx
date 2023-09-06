import React from 'react';
import "../Styles/Services.css"
import images from './assets/images';
const Services = () => {
    return (
        <div className='services'>
            <section className='Services_1'>

                <div className='Services_content'>
                    <h1>Transport Always on Time</h1>
                    <p>We services</p>
                </div>
            </section>
            <section className='Services_2'>
                <div>
                    <img src={images.servi2} alt="" />
                    <h2>MUDANZAS</h2>
                    <p>
                        Servicio de Mudanza en casas, oficinas y departamentos. Contamos con camiones cerrados y seguros, además opcionalmente cuenta con personal con experiencia para el traslado y empaquetado de objetos.
                    </p>
                </div>
                <div>
                    <img src={images.servi3} alt="" />
                    <h2>TRANSPORTE DE CARGA</h2>
                    <p>
                        Servicio de Mudanza en casas, oficinas y departamentos. Contamos con camiones cerrados y seguros, además opcionalmente cuenta con personal con experiencia para el traslado y empaquetado de objetos.
                    </p>
                </div>
                <div>
                    <img src={images.servi4} alt="" />
                    <h2>SERVICIO DE EMBALAJE</h2>
                    <p>
                        Queremos que tus pertenencias lleguen a su destino sin ningún contratiempo, es por eso que contamos con servicio de embalaje que te garantizará un transporte seguro.      </p>
                </div>
            </section>
            <section className='Services_3'>
               <h1>We Services</h1>
                <div className='aboutus3_content'>
                    <div>
                        <i className="fa-solid icon fa-truck-ramp-box"></i>
                        <p>
                            <span>TRANSPORTE DE CARGA</span> <br /><br /> Contamos con camiones de distinto tamaño y capacidad para el transporte de todo tipo de materiales como: Materiales de construcción, ferretería, artículos del hogar, electrodomésticos, etc.

                            Este es un servicio según requerimiento de punto a punto.
                        </p>
                        <img src={images.se1} alt="" />
                    </div>
                    <div>
                        <i className="icon fa-solid fa-map-location-dot"></i>
                        <p>
                            <span>TRANSPORTE DE CARGA </span><br /><br />
                            En todo momento tiene contacto con nuestro personal de atención al cliente sobre el estado de su servicio de carga. Se envía fotos antes y durante él envió, además 500 metros antes que el transportista llegue a su destino se comunicara para coordinar la recepción.

                            Servicio los 7 días de la semana:
                            Prestamos nuestros servicios los 7 días de la semana y feriados.
                        </p>
                        <img src={images.se2} alt="" />
                    </div>
                    <div>
                        <i className=" icon fa-solid fa-caravan"></i>
                        <p>
                            <span>
                                RASTREO DE PEDIDOS</span> <br /><br />
                           En todo momento tiene contacto con nuestro personal de atención al cliente sobre el estado de su servicio de carga. Se envía fotos antes y durante él envió, además 500 metros antes que el transportista llegue a su destino se comunicara para coordinar la recepción.
                            <br />
                            Servicio los 7 días de la semana:
                            Prestamos nuestros servicios los 7 días de la semana y feriados.
                           
                        </p>
                        <img src={images.se3} alt="" /> 
                    </div>
                </div>
            </section>
            <section className='aboutus_4'>
                <i>Empresa peruana que le ofrece soluciones en el transporte de carga y mudanza</i>
                <h1>TRANSPORTAMOS TUS COSAS CON SEGURIDAD Y CONFIANZA</h1>
            </section>


        </div>
    );
};

export default Services;