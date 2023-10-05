import { useState } from 'react';
import "../Styles/Pre.css";
import images from './assets/images';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

const Presupuesto = () => {

    const [distancia, setDistancia] = useState('');
    const [accesoDificil, setAccesoDificil] = useState(false);
    const [costoEstimado, setCostoEstimado] = useState(null);

    const [selectedPlan, setSelectedPlan] = useState(null);
    const [selectedVehicle, setSelectedVehicle] = useState(null);
    const [selectedServices, setSelectedServices] = useState([]);

    const plans = [
        {
            name: 'STANDAR',
            price: 200,
            description: `
                Incluye:
                - Transporte de muebles y pertenencias a la nueva ubicación.
                - Ayuda en carga y descarga.
                - Embalaje básico de artículos frágiles.

                Observaciones:
                - Ideal para mudanzas pequeñas y medianas.
                - Recomendado para viviendas de tamaño promedio.
            `
        },
        {
            name: 'PREMIUM',
            price: 250,
            description: `
                Incluye:
                - Transporte de muebles y pertenencias a la nueva ubicación.
                - Ayuda en carga y descarga.
                - Embalaje profesional de artículos frágiles y delicados.
                - Desmontaje y montaje de muebles.

                Observaciones:
                - Recomendado para mudanzas grandes o con gran cantidad de mobiliario.
                - Ideal para viviendas con varios dormitorios.
            `
        },
        {
            name: 'VIP',
            price: 300,
            description: `
                Incluye:
                - Embalaje premium de todos los artículos, incluyendo objetos delicados.
                - Desmontaje y montaje de muebles.
                - Servicio de limpieza post mudanza.

                Observaciones:
                - Recomendado para mudanzas de lujo y clientes que buscan un servicio completo.
                - Perfecto para viviendas de gran tamaño y con muebles valiosos.
            `
        },
    ];

    const vehicles = [
        {
            name: 'Furgoneta Pequeña',
            price: 100,
            description: `
                Puedes Transportar:
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
                Nuestro equipo de expertos cuidará cada uno de tus objetos como si fueran tesoros. 
                Ofrecemos un servicio de embalaje especializado que garantiza que tus pertenencias lleguen de manera segura a su destino. 
                Desde la delicada vajilla hasta los muebles más grandes, todo estará perfectamente protegido y listo para el transporte sin preocupaciones.
                
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
                ¡No te preocupes por desmontar o montar esos muebles grandes y complicados! 
                Nuestro equipo altamente capacitado se encargará de todo. 
                Desmontaremos tus muebles en tu antiguo lugar y los montaremos nuevamente en tu nuevo hogar, 
                garantizando una transición sin contratiempos.

                Beneficios:
                -Hacemos que la mudanza sea aún más fácil para ti. 
                -Con nuestro servicio de montaje y desmontaje, puedes concentrarte en instalarte en tu nuevo espacio mientras nosotros hacemos el trabajo pesado.
            `
        },
        {
            name: 'Limpieza Post-Mudanza',
            price: 100,
            description: `
                Descripción:
                Sabemos que mudarse es agotador. 
                Es por ello que queremos que te sientas verdaderamente en casa en tu nuevo espacio. 
                Nuestro servicio de limpieza integral post-mudanza se encarga de dejar cada rincón de tu nuevo hogar o lugar de destino impecable y listo para recibirte.

                Beneficios:
                -Al llegar a tu nuevo hogar, te recibirás con un ambiente fresco y limpio. 
                -Asimismo, nos encargamos de la limpieza para que puedas concentrarte en establecerte cómodamente, 
                -Así como también garantizamos un espacio limpio y desinfectado para tu tranquilidad y bienestar.
            `
        },
    ];

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
            const costoPorKilometro = 7; // Puedes ajustar este valor según tu contexto
            totalCost += parseFloat(distancia) * costoPorKilometro;
        }

        if (accesoDificil) {
            totalCost += 300; // Puedes ajustar este valor según tu contexto
        }

        setCostoEstimado(totalCost);
    };

    return (
        <div className='presupuesto'>
            <div className='presupuesto_section1'>
                <h2 >Selecciona tu plan: </h2>
                <div className='presupuestos_cards'>
                    {plans.map((plan, index) => (
                        <Card key={index} style={{ width: '18rem' }} className='presupuestos_cards1'>
                            <Card.Img variant="top" src={images[plan.name.toLowerCase()]} />
                            <Card.Body>
                                <Card.Title>Plan {plan.name} </Card.Title>
                                <Card.Text>
                                    <b>Incluye:</b><br />
                                    {plan.description}
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
                                /> <label  className='add_sec1' >Add</label>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
            <div className='presupuesto_section2'>
                <h2>Selecciona Tu vehículo :</h2>
                <div className='Autos'>
                    {vehicles.map((vehicle, index) => (
                        <Card key={index} style={{ width: '18rem' }} className='autos_card1'>
                            <Card.Body>
                                <Card.Title className='presu_secti2_title'>{vehicle.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{vehicle.description}</Card.Subtitle>
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
            </div>
            <div className='presupuesto_section3'>
                <h3>Selecciona los Servicios Adicionales:</h3>
                <div className='servicios_adicionales'>
                    {services.map((service, index) => (
                        <Card key={index} style={{ width: '18rem' }} className='servicios_adicionales_card'>
                            <Card.Img variant="top" src={images[service.name.split(' ')[0].toLowerCase()]} />

                            <Card.Body>
                                <Card.Title>{service.name}</Card.Title>
                                <Card.Text>
                                    {service.description}
                                </Card.Text>
                                <div className='add_services2'>
                                <input className='add_check'
                                    type='checkbox'
                                    checked={selectedServices.some((s) => s.name === service.name)}
                                    onChange={() => handleServiceToggle(service)}
                                /> <label  className='add_sec2'>Add</label>
                                </div>
                            </Card.Body>
                        </Card>
                    ))}
                </div>
            </div>
            <div className='Operacion_Presupuesto'>

                <label className='label_presu'> Distancia (kilómetros):  </label>
                <input type="number" value={distancia} onChange={(e) => setDistancia(e.target.value)} /><br />


                <label className='label_presu'>Tipo de Servicio: </label><br />


                <label className='label_presu'>Acceso Difícil: </label>
                <input type="checkbox" checked={accesoDificil} onChange={() => setAccesoDificil(!accesoDificil)} /><br />

                <button className="Calcular_costo" onClick={calculateCost}>Calcular Costo</button>
                <br />
                {costoEstimado !== null && <div>Costo Estimado: S/{costoEstimado}</div>}
                <br />
            </div>
        </div>
    );
};

export default Presupuesto;
