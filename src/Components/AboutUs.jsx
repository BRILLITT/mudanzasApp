import "../Styles/Aboutus.css";
import images from './assets/images';

const AboutUs = () => {
    return (
        <div className='aboutus'>
            <section className='aboutus_1'>
                <div className='aboutus1_content'>
                    <h1>About Us</h1>
                    <p>Transport Always on Time</p>
                </div>
            </section>
            <section className='aboutus_2'>
            <iframe width="500px" height="400px"id="aboutus_2_video1"  src="https://www.youtube.com/embed/_ccBfDgGTRk" title="Mudanzas Internacionales"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                <div className='aboutus2_content'>
                    <h1>Transport Always on Time</h1>
                    <p><i className="fa-solid fa-quote-left icon" ></i>Contamos con amplia experiencia en el transporte de carga y mudanza a tiempo completo y ponemos a su disposición camiones tipo furgón y con baranda de diferentes tamaños ideales para: Mudanzas y transporte de carga en general. Nuestros valores son: Responsabilidad y resolución de problemas.
                    </p>
                </div>
            </section>
            <section className='aboutus_3'>
                <img className="aboutus_3_img"src={images.team} alt="" />
                <div className='aboutus3_content'>
                    <p>Nuestros pilares<br/>
                    <h1>MISIÓN, VISIÓN E HISTORIA</h1>
                    </p>
                     <p><span>Visión:</span><br/><i className="fa-solid fa-quote-left icon" ></i> Ser una empresa de transporte de carga y mudanza reconocido en la capital por su eficiencia y fácil acceso que brinda un servicio de calidad.
                     <br/><br/><span>Misión:</span><br/><i className="fa-solid fa-quote-left icon" ></i> Brindar un servicio de carga eficiente y ser la solución para las personas y empresas que busquen transportar sus bienes.
                    <br/><br/>
                    <span>Historia:</span><br/><i className="fa-solid fa-quote-left icon" ></i> Empresa peruana con 10 años en el mercado comenzó sus operaciones en el 2010 con 3 camiones brindando servicio de carga a microempresarios. En el 2013 adquirieron 3 camiones tipo furgón para brindar el servicio de mudanzas. En la actualidad MovilPack cuenta con más de 20 unidades móviles con una capacidad de carga diaria de hasta 120 toneladas. La responsabilidad y el buen servicio son hasta el día de hoy nuestros principales pilares.
                    </p>

                </div>
            </section>
            <section className='aboutus_4'>
                <i>Empresa peruana que le ofrece soluciones en el transporte de carga y mudanza</i>
                <h1>TRANSPORTAMOS TUS COSAS CON SEGURIDAD Y CONFIANZA</h1>
            </section>

            

        </div>
    );
};

export default AboutUs;