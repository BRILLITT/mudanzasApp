import React from 'react';
import images from './assets/images';

const Home = () => {
    return (
        <div className='home'>
            <section className='home_img'>
                <h1 className='home_title'>Committed to the safety of your belongings.</h1>
            </section>
            <section className='home_2'>
                <h1 className='home2_title'>TRANSPORTAMOS TUS COSAS CON SEGURIDAD Y CONFIANZA  </h1>
                <div className='cards'>
                    <div className='home2_card1'>
                        <img className="home2_card1_img" src={images.carga} alt="" />
                        <div className='home2_card2_img'></div>
                        <div className='home2_card2_content1'>
                            <i class="fa-solid fa-box-archive  icon_card"></i>
                            <p className='home2_card1_title1'> MUDANZAS</p>
                            <p>
                                Servicio de Mudanza en casas, oficinas y departamentos. Contamos con camiones tipo furgónde distinta capacidad y en distintos tamaños. Hacemos mudanzas en todo lima y provincia.</p>

                        </div>
                    </div>
                    <div className='home2_card2'>

                        <img className="home2_card1_img1" src={images.transporte} alt="" />
                        <div className='home2_card2_content2'>
                            <i class="fa-solid fa-van-shuttle icon_card"></i>
                            <p className='home2_card1_title2'>
                                TRANSPORTE DE CARGA</p>
                            <p>
                                Ofrecemos servicio de transporte de materiales de construcción, materiales de ferretería, maquinarias, artículos para el hogar y empresas. Servicio según requerimiento de punto a punto.</p>
                        </div>
                    </div>
                    <div className='home2_card3' >
                        <img className="home2_card1_img2" src={images.embalaje} alt="" />
                        <div className='home2_card2_content3'>

                            <i class="fa-solid fa-tape  icon_card"></i>
                            <p className='home2_card1_title3'>
                                SERVICIO DE EMBALAJE</p>
                            <p>
                                Queremos que tus pertenencias lleguen a su destino sin contratiempos,es por eso que contamos con servicio de embalaje que te garantizara un transporte seguro.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='home_3'>
                <div className='home_3_content'>
                    <div className='home_3_content_title'>
                        <p>Opiniones y Clientes</p>
                        <h1>TESTIMONIOS Y CLIENTES</h1>
                    </div>
                
                <div className='home_3_content_text'>
                 <p><i class="fa-solid fa-quote-left icon"></i>
                        Contrate sus servicios de mudanza y me brindaron un buen servicio a un precio accesible”.<br/> <span>Lidia Medina</span></p>
                        <p><i class="fa-solid fa-quote-left icon"></i> Trasladaron los materiales de construcción para la construcción de mi taller y lo hicieron rápido y sin contratiempos” <br/> <span>Martín Vizcarra</span></p>
                        <p><i class="fa-solid fa-quote-left icon"></i> Los chicos tuvieron cuidado con mis cosas y fueron amables en especial el sr Eduardo, buen servicio ”. <br/> <span>Jorge Salas</span></p>
                </div>
                </div>
            </section>
            <section className='home_4'>

            </section>
            <section className='home_5'>

            </section>
            <section className='home_6'>

            </section>
            <footer>

            </footer>

        </div>
    );
};

export default Home;