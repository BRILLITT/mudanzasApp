import React from 'react';
import Pre from "../Styles/Pre.css";
import images from './assets/images';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import ListGroup from 'react-bootstrap/ListGroup';
import { useState } from 'react';
const Presupuesto = () => {

    const [volumen, setVolumen] = useState('');
    const [distancia, setDistancia] = useState('');
    const [tipoServicio, setTipoServicio] = useState('');
    const [accesoDificil, setAccesoDificil] = useState(false);
    const [costoEstimado, setCostoEstimado] = useState(null);

    const calcularCosto = () => {

        // Factor de costo por kilómetro
        const costoPorKilometro = 7; // Puedes ajustar este valor según tu contexto

        let costoTotal = 0;
        // Calcular costo en base al volumen


        // Calcular costo en base a la distancia
        if (distancia) {
            costoTotal += parseFloat(distancia) * costoPorKilometro;
        }
        // Calcular costo adicional por tipo de servicio
        if (tipoServicio === 'Embalaje') {
            costoTotal += 30; // Puedes ajustar este valor según tu contexto
        } else if (tipoServicio === 'Estándar') {
            costoTotal += 200; // Puedes ajustar este valor según tu contexto
        } else if (tipoServicio === 'Premium') {
            costoTotal += 250; // Puedes ajustar este valor según tu contexto
        } else if (tipoServicio === 'Mudanza Vip') {
            costoTotal += 300; // Puedes ajustar este valor según tu contexto
        }

        // Calcular costo adicional por acceso difícil
        if (accesoDificil) {
            costoTotal += 300; // Puedes ajustar este valor según tu contexto
        }
        setCostoEstimado(costoTotal);
    };


    return (
        <div className='presupuesto'>
            <h2>Selecciona tu plan </h2>

            <div className='presupuestos_cards'>

                <Card style={{ width: '18rem' }} className='presupuestos_cards1'>
                    <Card.Img variant="top" src={images.se1} />
                    <Card.Body>
                        <Card.Title>Plan 1: Mudanza Estándar</Card.Title>
                        <Card.Text>
                            <b>Incluye:</b><br />
                            -Transporte de muebles y pertenencias a la nueva ubicación.<br />
                            -Ayuda en carga y descarga.<br />
                            -Embalaje básico de artículos frágiles.<br />
                            <b>Observaciones:</b><br />
                            -Ideal para mudanzas pequeñas y medianas.<br />
                            -Recomendado para viviendas de tamaño promedio.<br />
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className='item'>Vehículo (Furgoneta Pequeña): Aproximadamente 5-7 metros cúbicos.</ListGroup.Item>
                        <ListGroup.Item className='item'>Precio: s/200 (precio base).</ListGroup.Item>

                    </ListGroup>
                    <Card.Body>
                        <Card.Link href="#" className='link_card'>Add Plan</Card.Link>

                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='presupuestos_cards1'>
                    <Card.Img variant="top" src={images.se3} />
                    <Card.Body>
                        <Card.Title>Plan 2: Mudanza Premium</Card.Title>
                        <Card.Text>
                            <b>Incluye:</b><br />
                            -Transporte de muebles y pertenencias a la nueva ubicación.<br />
                            -Ayuda en carga y descarga..<br />
                            -Embalaje profesional de artículos frágiles y delicados.<br />
                            -Desmontaje y montaje de muebles.<br />
                            <b>Observaciones:</b><br />
                            -Recomendado para mudanzas grandes o con gran cantidad de mobiliario.<br />
                            -Ideal para viviendas con varios dormitorios.<br />
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item className='item'>Vehículo (Camión Mediano):  Entre 12-20 metros cúbicos.</ListGroup.Item>
                        <ListGroup.Item className='item'>Precio: s/250 (precio base + adicional por tamaño y capacidad del camión).</ListGroup.Item>

                    </ListGroup>
                    <Card.Body>
                        <Card.Link className='link_card' href="#">Add Plan</Card.Link>

                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='presupuestos_cards1'>
                    <Card.Img variant="top" src={images.se2} />
                    <Card.Body>
                        <Card.Title>Plan 3: Mudanza VIP</Card.Title>
                        <Card.Text>
                            <b>Incluye:</b><br />
                            -Embalaje premium de todos los artículos, incluyendo objetos delicados.<br />
                            -Desmontaje y montaje de muebles.<br />
                            -Servicio de limpieza post mudanza.<br />
                            <b>Observaciones:</b><br />
                            -Recomendado para mudanzas de lujo y clientes que buscan un servicio completo.<br />
                            -Perfecto para viviendas de gran tamaño y con muebles valiosos.<br />
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">

                        <ListGroup.Item className='item'> Vehículo (Camión Grande):25 metros cúbicos o más.</ListGroup.Item>
                        <ListGroup.Item className='item'>Precio: s/300 (precio base + adicional por tamaño y capacidad del camión).</ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                        <Card.Link className='link_card' href="#">Add Plan</Card.Link>

                    </Card.Body>
                </Card>
            </div> 
            <h2>Realiza Tu presupuesto </h2><br />
            <h3>Selecciona el tipo de vehicule
            </h3>
            <div className='Autos'>
                
                <Card style={{ width: '18rem' }} className='autos_card1'>
                    <Card.Body>
                        <Card.Title>Furgoneta Pequeña</Card.Title>
                        <i class=" autos-icon fa-solid fa-car-side"></i>
                        <Card.Subtitle className="mb-2 text-muted">Aproximadamente 5-7 metros cúbicos.</Card.Subtitle>
                        <Card.Text>
                        <b>Puedes Transportar: </b><br />
                            -Algunas sillas.<br />
                            -Mesas pequeñas.<br />
                            -Electrodomésticos pequeños (microondas, tostadora, etc.).<br />
                            -Cajas y contenedores con artículos diversos.<br />
                            <b>Precio: </b>s/100<br />
                        </Card.Text>
                        <Card.Link className='vehicule' href="#">Add Vehicule</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='autos_card1'>
                    <Card.Body >
                        <Card.Title>Camión Mediano</Card.Title>
                        <i class=" autos-icon fa-solid fa-truck"></i>
                        <Card.Subtitle className="mb-2 text-muted">Entre 12-20 metros cúbicos.</Card.Subtitle>
                        <Card.Text>
                        <b>Puedes Transportar: </b><br />

                            -Sofá mediano a grande.<br />
                            -Camas y colchones.<br />
                            -Muebles modulares.<br />
                            -Electrodomésticos (lavadora, nevera, etc.).<br />
                            -Cajas y contenedores con ropa, utensilios de cocina y otros objetos pequeños.<br />
                            <b>Precio: </b>s/200<br />
                        </Card.Text>
                        <Card.Link href="#"className='vehicule'>Add Vehicule</Card.Link>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='autos_card1'>
                    <Card.Body >
                        <Card.Title>Camión Grande</Card.Title>
                        <i class=" autos-icon fa-solid fa-truck-moving"></i>
                        <Card.Subtitle className="mb-2 text-muted">Entre 25 metros cúbicos o más.</Card.Subtitle>
                        <Card.Text>
                        <b>Puedes Transportar: </b><br />
                            -Múltiples sofás.<br />
                           -Muebles para varios<br /> 
                           dormitorios.<br />
                            -Muebles de salón y comedor.<br />
                            -Grandes electrodomésticos (nevera, lavadora, lavavajillas, etc.).<br />
                            -Gran cantidad de cajas con objetos variados.<br />
                            <b>Precio: </b>s/300<br />
                        </Card.Text>
                        <Card.Link href="#" className='vehicule'>Add Vehicule</Card.Link>
                       
                    </Card.Body>
                </Card>


            </div >
            <h3>Selecciona el Distrito</h3><br /><br />
            <div className='Aplicacción_cordenadas'>
                
            </div><br /><br />
           
            <h3>Selecciona los Servicios Adicionales</h3><br />
            <div className='servicios_adicionales'>
                 <Card style={{ width: '18rem' }} className='servicios_adicionales_card' >
      <Card.Img variant="top" src={images.Servi} />
      <Card.Body>
        <Card.Title>Servicio de Embalaje Especializado</Card.Title>
        <Card.Text>
        <b>Descripción: </b> Nuestro equipo de expertos cuidará cada uno de tus objetos como si fueran tesoros. Ofrecemos un servicio de embalaje especializado que garantiza que tus pertenencias lleguen de manera segura a su destino. Desde la delicada vajilla hasta los muebles más grandes, todo estará perfectamente protegido y listo para el transporte sin preocupaciones.<br/>
       <b>Beneficios:</b>  Relájate mientras nosotros hacemos el trabajo pesado. Nuestro servicio de embalaje te ahorra tiempo y asegura que tus posesiones más valiosas estén protegidas.<br/>
        </Card.Text>
        <Button variant="primary" className='servicios_adicionales_but'>Go </Button>
      </Card.Body> 
    </Card>
    <Card style={{ width: '18rem' }} className='servicios_adicionales_card'>
      <Card.Img variant="top" src={images.carga} />
      <Card.Body>
        <Card.Title>Montaje y Desmontaje de Muebles:</Card.Title>
        <Card.Text>
        <b>Descripción: </b> ¡No te preocupes por desmontar o montar esos muebles grandes y complicados! Nuestro equipo altamente capacitado se encargará de todo. Desmontaremos tus muebles en tu antiguo lugar y los montaremos nuevamente en tu nuevo hogar, garantizando una transición sin contratiempos.<br/>
        <b>Beneficios:</b>  Hacemos que la mudanza sea aún más fácil para ti. Con nuestro servicio de montaje y desmontaje, puedes concentrarte en instalarte en tu nuevo espacio mientras nosotros hacemos el trabajo pesado.<br/>
        </Card.Text>
        <Button variant="primary" className='servicios_adicionales_but'>Go </Button>
      </Card.Body> 
    </Card>
    <Card style={{ width: '18rem' }} className='servicios_adicionales_card'>
      <Card.Img variant="top" src={images.Servi} />
      <Card.Body>
        <Card.Title>Limpieza Post-Mudanza:</Card.Title>
        <Card.Text>
        <b>Descripción: </b>  Sabemos que mudarse es agotador,Es por ello que queremos que te sientas verdaderamente en casa en tu nuevo espacio. Nuestro servicio de limpieza integral post-mudanza se encarga de dejar cada rincón de tu nuevo hogar o lugar de destino impecable y listo para recibirte.<br/>
        <b>Beneficios:</b>Al llegar a tu nuevo hogar, te recibirás con un ambiente fresco y limpio., asi mismo nos encargamos de la limpieza para que puedas concentrarte en establecerte cómodamente asi como también garantizamos un espacio limpio y desinfectado para tu tranquilidad y bienestar.<br/>
        </Card.Text>
        <Button variant="primary" className='servicios_adicionales_but'>Go </Button>
      </Card.Body> 
    </Card>
    </div><br /><br /><br /><br /> 
            <div className='Aplicacción_cordenadas'>
          
            </div>
            <div>
                <label>Distancia (kilómetros): </label>
                <input type="number" value={distancia} onChange={(e) => setDistancia(e.target.value)} />
            </div>
            <div>
                <label>Tipo de Servicio: </label>
                <select value={tipoServicio} onChange={(e) => setTipoServicio(e.target.value)}>
                    <option value="">Selecciona</option>
                    <option value="estandar">Estándar</option>

                    <option value="estandar">Premiun</option>
                    <option value="estandar">Mudanza Vip</option>
                    <option value="embalaje">Embalaje</option>
                </select>
            </div>
            <div>
                <label>Acceso Difícil: </label>
                <input type="checkbox" checked={accesoDificil} onChange={() => setAccesoDificil(!accesoDificil)} />
            </div>
            <button onClick={calcularCosto}>Calcular Costo</button><br />
            {costoEstimado !== null && <div>Costo Estimado: S/{costoEstimado}</div>}<br />
        </div>
    );
};

export default Presupuesto;