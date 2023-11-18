import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import "../Styles/Pre.css";
import images from './assets/images';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Presupuesto = () => {

    const [distancia, setDistancia] = useState('');
    const [number, setNumber] = useState(null);
    const [costoEstimado, setCostoEstimado] = useState(null);
    const [calleOrigen, setCalleOrigen] = useState(null);
    const [calleDestino, setCalleDestino] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [referencia, setReferencia] = useState(null);
    const [selectedServices, setSelectedServices] = useState([]);
    const [distritoOrigen, setDistritoOrigen] = useState(null);
    const [distritoDestino, setDistritoDestino] = useState(null);
    const plans = [
        {
            name: 'STANDAR',
            price: 200,
            description:
                `  Distancia: Hasta 25 kilómetros.
                  Volumen de carga: Hasta  3 a 6 metros cúbicos.
               Incluye:   
                - Transporte de muebles y pertenencias a la nueva ubicación. 
                - Ayuda en carga y descarga.
                - Embalaje básico de artículos frágiles.
                Observaciones:
                - Ideal para mudanzas pequeñas y medianas.
                - Recomendado para viviendas de tamaño promedio.
                OJO:Puedes añadir más kilometros de distancía de acuerdo a tu necesidad en el 
                botón inferior, recuerda que el costo es de S/5 /KM.  `

        },
        {
            name: 'PREMIUM',
            price: 250,
            description: `
                Distancia: Hasta 30 kilómetros.
                Volumen de carga: Hasta 10 a 15 metros cúbicos.
                Incluye:
                - Transporte de muebles y pertenencias a la nueva ubicación.
                - Ayuda en carga y descarga.
                - Embalaje profesional de artículos frágiles y delicados.
                - Desmontaje y montaje de muebles.
                 Observaciones:
                - Recomendado para mudanzas grandes o con gran cantidad de mobiliario.
                - Ideal para viviendas con varios dormitorios.
                OJO:Puedes añadir más kilometros de distancía de acuerdo a tu necesidad en el 
                botón inferior, recuerda que el costo es de S/5 por KM. `
        },
        {
            name: 'VIP',
            price: 300,
            description: `
                Distancia: Hasta 40 kilómetros.
                Volumen de carga: Hasta 20 a 30 metros cúbicos.
                Incluye:
                - Embalaje premium de todos los artículos, incluyendo objetos delicados.
                - Desmontaje y montaje de muebles.
                - Servicio de limpieza post mudanza.
                Observaciones:
                - Recomendado para mudanzas de lujo y clientes que buscan un servicio completo.
                - Perfecto para viviendas de gran tamaño y con muebles valiosos.
                OJO:Puedes añadir más kilometros de distancía de acuerdo a tu necesidad en el 
                botón inferior, recuerda que el costo es de S/5 por KM.`
        },
    ];

    const vehicles = [
        {
            name: 'Furgoneta Pequeña',
            price: 100,
            description: `
                Puedes Transportar:
                 Alrededor 3 a 6 metros cúbicos.
                 Carga estimada:
                - Algunas sillas.
                - Mesas pequeñas.
                - Electrodomésticos pequeños (microondas, tostadora, etc.).
                - Cajas y contenedores con artículos diversos.
            `
        },
        {
            name: 'Camión Mediano',
            price: 200,
            description: `
                Puedes Transportar:
                Alrededor: 10 a 15 metros cúbicos.
                Carga estimada:
                - Sofá mediano a grande.
                - Camas y colchones.
                - Muebles modulares.
                - Electrodomésticos (lavadora, nevera, etc.).
                - Cajas y contenedores con ropa, utensilios de cocina y otros objetos pequeños.
            `
        },
        {
            name: 'Camión Grande',
            price: 300,
            description: `
                Puedes Transportar:
                Alrededor 20 a 30 metros cúbicos.
                Carga estimada:
                - Múltiples sofás.
                - Muebles para varios dormitorios.
                - Muebles de salón y comedor.
                - Grandes electrodomésticos (nevera, lavadora, lavavajillas, etc.).
                - Gran cantidad de cajas con objetos variados.
            `
        },
    ];

    const services = [
        {
            name: 'Embalaje Especializado',
            price: 100,
            description: `       
                Descripción:
                -Nuestro equipo de expertos cuidará cada uno de tus objetos como si fueran tesoros. 
                -Ofrecemos un servicio de embalaje especializado que garantiza que tus pertenencias lleguen de manera segura a su destino. 
                -Desde la delicada vajilla hasta los muebles más grandes, todo estará perfectamente protegido y listo para el transporte sin preocupaciones.
                
                Beneficios:
                -Relájate mientras nosotros hacemos el trabajo pesado. 
                Nuestro servicio de embalaje te ahorra tiempo y asegura que tus posesiones más valiosas estén protegidas.
            `
        },
        {
            name: 'Montaje y Desmontaje de Muebles',
            price: 100,
            description: `
                Descripción:
                -¡No te preocupes por desmontar o montar esos muebles grandes y complicados!.Nuestro equipo altamente capacitado se encargará de todo. 
                desmontaremos tus muebles en tu antiguo lugar y los montaremos nuevamente en tu nuevo hogar, garantizando una transición sin contratiempos.

                Beneficios:
                -Hacemos que la mudanza sea aún más fácil para ti, con nuestro servicio de montaje y desmontaje, puedes concentrarte en instalarte en tu nuevo espacio mientras nosotros hacemos el trabajo pesado.
            `
        },
        {
            name: 'Limpieza Post-Mudanza',
            price: 100,
            description: `
                Descripción:
                -Sabemos que mudarse es agotador.Es por ello que queremos que te sientas verdaderamente en casa en tu nuevo espacio. 
                -Nuestro servicio de limpieza integral post-mudanza se encarga de dejar cada rincón de tu nuevo hogar o lugar de destino impecable y listo para recibirte.

                Beneficios:
                -Al llegar a tu nuevo hogar, te recibirás con un ambiente fresco y limpio. Asimismo, nos encargamos de la limpieza para que puedas concentrarte en establecerte cómodamente, 
                 Así como también garantizamos un espacio limpio y desinfectado para tu tranquilidad y bienestar.
            `
        },
    ];


    // Verificar si las claves existen en el localStorage
    useEffect(() => {
        const storedPlans = localStorage.getItem('plans');
        const storedVehicles = localStorage.getItem('vehicles');
        const storedServices = localStorage.getItem('services');

        if (!storedPlans) {
            localStorage.setItem('plans', JSON.stringify(plans));
        }

        if (!storedVehicles) {
            localStorage.setItem('vehicles', JSON.stringify(vehicles));
        }

        if (!storedServices) {
            localStorage.setItem('services', JSON.stringify(services));
        }
    }, []);

    // Leer los datos desde el localStorage
    const storedPlans = JSON.parse(localStorage.getItem('plans'));
    const storedVehicles = JSON.parse(localStorage.getItem('vehicles'));
    const storedServices = JSON.parse(localStorage.getItem('services'));



    const handlePlanSelect = (plan) => {
        setSelectedPlan(plan);
    };

    const handleVehicleSelect = (vehicle) => {
        setSelectedVehicle(vehicle);
    };

    const handleServiceToggle = (service) => {
        const serviceIndex = selectedServices.findIndex((s) => s.name === service.name);
        if (serviceIndex === -1) {
            setSelectedServices([...selectedServices, service]);
        } else {
            const updatedServices = [...selectedServices];
            updatedServices.splice(serviceIndex, 1);
            setSelectedServices(updatedServices);
        }
    };

    const calculateCost = () => {
        let totalCost = 0;

        if (selectedPlan) {
            totalCost += selectedPlan.price;
        }

        if (selectedVehicle) {
            totalCost += selectedVehicle.price;
        }

        totalCost += selectedServices.reduce((acc, service) => acc + service.price, 0);

        if (distancia) {
            const costoPorKilometro = 5; // Puedes ajustar este valor según tu contexto
            totalCost += parseFloat(distancia) * costoPorKilometro;
        }

        // if (accesoDificil) {
        //     totalCost += 300; // Puedes ajustar este valor según tu contexto
        // }

        // Crear un objeto con la información relevante
        const infoObj = {
            selectedPlan: selectedPlan?.name,
            selectedVehicle: selectedVehicle?.name,
            selectedServices: selectedServices.map(service => service.name),
            distancia: distancia,
            distritoDestino: distritoDestino,
            distritoOrigen: distritoOrigen,
            calleDestino: calleDestino,
            calleOrigen: calleOrigen,
            referencia:referencia,
            number:number,
            costoEstimado: totalCost
        };

        // Guardar el objeto en el localStorage
        localStorage.setItem('presupuestoInfo', JSON.stringify(infoObj));

        setCostoEstimado(totalCost);


    };

    return (
        <div className='presupuesto'>
            <h2 className='RE_PRE1'>Realiza tu presupuesto  </h2> <br /><br /><br /><br />
            <h2 className='RE_PRE2'>Selecciona tu Vehículo : </h2><br /><br /><br />
            <h2 className='RE_PRE3'>Servicios Adicionales: </h2>


            <div className='presupuesto_section1'>
                <h2 className='RE_PRE0' >Nuestros Servicios : </h2> <br /><br /><br /><br />


                <div className='presupuestos_cards'>
                    {storedPlans.map((plan, index) => (
                        <Card key={index} style={{ width: '18rem' }} className='presupuestos_cards1'>
                            <Card.Img variant="top" src={images[plan.name.toLowerCase()]} />
                            <Card.Body>
                                <Card.Title>SERVICIO {plan.name} </Card.Title>
                                <Card.Text>
                                    <b></b>
                                    {plan.description.split('\n').map((item, index) => (
                                        <span key={index}>
                                            {item}
                                            <br />
                                        </span>
                                    ))}
                                </Card.Text>
                            </Card.Body>
                            <ListGroup className="list-group-flush">
                                <ListGroup.Item className='item'>{plan.name} (Precio: S/{plan.price})</ListGroup.Item>
                            </ListGroup>
                            <Card.Body>
                                <div className='add_services'>
                                    <input
                                        type='radio'
                                        value={plan.name}
                                        checked={selectedPlan && selectedPlan.name === plan.name}
                                        onChange={() => handlePlanSelect(plan)}
                                    /> <label className='add_sec1' >Add</label>
                                </div>
                            </Card.Body>
                        </Card>


                    ))}



                </div>
            </div> <br />
            <div></div>
            <div className='presupuesto_section2'>
                <br />
                <br /><br />
                <div className='Autos'>

                    {storedVehicles.map((vehicle, index) => (
                        <Card key={index} style={{ width: '18rem' }} className='autos_card1'>
                            <Card.Body className='pre'>
                                <Card.Title className='presu_secti2_title'>{vehicle.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">
                                    {vehicle.description.split('\n').map((item, index) => (
                                        <span key={index}>
                                            {item}
                                            <br />
                                        </span>
                                    ))}
                                </Card.Subtitle>
                                <Card.Text>
                                    <b>Precio: </b>S/{vehicle.price}
                                </Card.Text>
                                <div className='add_services'>
                                    <input
                                        type='radio'
                                        value={vehicle.name}
                                        checked={selectedVehicle && selectedVehicle.name === vehicle.name}
                                        onChange={() => handleVehicleSelect(vehicle)}
                                    /> <label className='add_sec1'>Add</label>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div> <br /><br /><br /><br />
            <div className='presupuesto_section3'>

                <div className='servicios_adicionales'>
                    {storedServices.map((service, index) => (
                        <Card key={index} style={{ width: '18rem' }} className='servicios_adicionales_card'>
                            <Card.Img variant="top" src={images[service.name.split(' ')[0].toLowerCase()]} />

                            <Card.Body className='services_card2'>
                                <Card.Title>{service.name}</Card.Title>
                                <Card.Text className='services_card2'>
                                    {service.description.split('\n').map((item, index) => (
                                        <span key={index}>
                                            {item}
                                            <br />
                                        </span>
                                    ))}
                                </Card.Text>
                                <div className='Precio_servi_adi'>
                                    <p>Precio:s/100</p>

                                </div>
                                <div className='add_services2'>
                                    <input className='add_check'
                                        type='checkbox'
                                        checked={selectedServices.some((s) => s.name === service.name)}
                                        onChange={() => handleServiceToggle(service)}
                                    /> <label className='add_sec2'>Add</label>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div> <br /><br />
            <div className='Operacion_Presupuesto'> <br />


                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th colSpan={3}>Calcula Tu Presupuesto</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                    
                            <td colSpan={2}>  Distancia (kilómetros): 
                            <a  href="https://www.google.com/maps/dir///@-12.0274764,-77.0527169,17z/data=!3m1!5s0x9105cf27224fb47f:0xd5783640529e2313?entry=ttu" target='_blank'> Calcula tu distancia </a>
                           

                            </td>
                            <td><input className='label_presu3' placeholder='Precio: s/5 por KM' type="number" value={distancia} onChange={(e) => setDistancia(e.target.value)} /></td>

                        </tr>


                        <tr>

                            <td colSpan={2}>Distrito de Origen:<input className='label_presu2' type="text" value={distritoOrigen} onChange={(e) => setDistritoOrigen(e.target.value)} /></td>
                            <td colSpan={1}>Distrito de Destino:<input className='label_presu2' type="text" value={distritoDestino} onChange={(e) => setDistritoDestino(e.target.value)} /></td>

                        </tr>

                        <tr>

                            <td colSpan={2}>Calle/Número de Origen :<input className='label_presu2' type="text" value={calleOrigen} onChange={(e) => setCalleOrigen(e.target.value)} /></td>
                            <td colSpan={1}>Calle/Número de Destino :<input className='label_presu2' type="text" value={calleDestino} onChange={(e) => setCalleDestino(e.target.value)} /></td>

                        </tr>
                        <tr>

                            <td colSpan={2}>Número de Contacto :<input className='label_presu2' type="number" value={number} onChange={(e) => setNumber(e.target.value)} /></td>
                            <td colSpan={1}>Referencia del destino:<input className='label_presu2' type="text" value={referencia} onChange={(e) => setReferencia(e.target.value)} /></td>
                        </tr>
                        <tr>

                            <td colSpan={1}> <button className="Calcular_costo" onClick={calculateCost}>Calcular/Guardar</button> </td>
                            <td colSpan={2}>Costo Estimado:{costoEstimado !== null && <div>S/{costoEstimado}</div>}</td>
                        </tr>
                        <tr>

                            <td colSpan={3}> *La distancia calculada debe ser igual a la primera opción que le aprece en el google maps
                            de detectar el ingreso errado del calculo del kilometraje se le realizará el cobro adicional correspondiente*</td>
                           
                        </tr>

                    </tbody>
                </Table>



            </div>

            <br /><br /><br /><br />
        </div>
    );
};

export default Presupuesto;
