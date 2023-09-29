import React from 'react';
import images from "../Components/assets/images";
import '../Styles/Home.css';
import Carousel from 'react-bootstrap/Carousel';

import Card from 'react-bootstrap/Card';
const Home = () => {
    return (
        <div className='home'>

            <section className='home1'>

                <h1 className='home_title'>Committed to the safety of your belongings.</h1>
            </section>
            <section className='home_2'>
                <h1 className='home2_title'>TRANSPORTAMOS TUS COSAS CON SEGURIDAD Y CONFIANZA  </h1>
                <div className='cards'>
                    <Card style={{ width: '18rem' }} className='card1_home'>
                        <Card.Img variant="top" src={`${images.carga}`} />
                        <Card.Body className='card1_home_title'>
                            <i className="fa-solid fa-box-archive  icon_card"></i>
                            <Card.Title className='home_mu'>MUDANZAS</Card.Title>
                            <Card.Text >
                                Servicio de Mudanza en casas, oficinas y departamentos. Contamos con camiones tipo furgónde distinta capacidad y en distintos tamaños. Hacemos mudanzas en todo lima y provincia.
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }} className='card1_home'>
                        <Card.Img variant="top" src={`${images.transporte}`} />
                        <Card.Body className='card1_home_title'>
                            <i className="fa-solid fa-box-archive  icon_card"></i>
                            <Card.Title className='home_mu'>TRANSPORTE DE CARGA</Card.Title>
                            <Card.Text>
                                Ofrecemos servicio de transporte de materiales de construcción, materiales de ferretería, maquinarias, artículos para el hogar y empresas. Servicio según requerimiento de punto a punto.
                            </Card.Text>

                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }} className='card1_home'>
                        <Card.Img variant="top" src={`${images.embalaje}`} />
                        <Card.Body className='card1_home_title'>
                            <i className="fa-solid fa-tape  icon_card"></i>
                            <Card.Title className='home_mu'>SERVICIO DE EMBALAJE</Card.Title>
                            <Card.Text>
                                Queremos que tus pertenencias lleguen a su destino sin contratiempos,es por eso que contamos con servicio de embalaje que te garantizara un transporte seguro.  </Card.Text>

                        </Card.Body>
                    </Card>

                </div>
            </section>
            <section className='home_3'>
                <div className='home_3_content'>
                    <div className='home_3_content_title'>
                        <p>Opiniones y Clientes</p>
                        <h1>TESTIMONIOS Y CLIENTES</h1>
                    </div>

                    <div className='home_3_content_text'>
                        <p><i className="fa-solid fa-quote-left icon"></i>
                            Contrate sus servicios de mudanza y me brindaron un buen servicio a un precio accesible”.<br /> <span>Lidia Medina</span></p>
                        <p><i className="fa-solid fa-quote-left icon"></i> Trasladaron los materiales de construcción para la construcción de mi taller y lo hicieron rápido y sin contratiempos” <br /> <span>Martín Vizcarra</span></p>
                        <p><i className="fa-solid fa-quote-left icon"></i> Los chicos tuvieron cuidado con mis cosas y fueron amables en especial el sr Eduardo, buen servicio ”. <br /> <span>Jorge Salas</span></p>
                    </div>
                </div>
            </section>
            <section className='home_4'>
              
       <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block"
          src={images.wraper}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={images.wraper}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block"
          src={images.wraper}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

            </section>

            <footer>

            </footer>

        </div>
    );
};


export default Home;