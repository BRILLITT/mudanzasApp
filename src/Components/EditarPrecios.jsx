import { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import "../Styles/EditarPrecios.css" ;
import Table from 'react-bootstrap/Table';

const EditarPrecios = () => {
  const [nuevosPlanes, setNuevosPlanes] = useState([]);
  const [nuevosVehiculos, setNuevosVehiculos] = useState([]);
  const [nuevosServicios, setNuevosServicios] = useState([]);
  const [refreshValue, setRefreshValue] = useState(0);

  // esto sirve para cargar y/o leer informacion del localstorage
  useEffect(() => {
    const storedPlans = JSON.parse(localStorage.getItem('plans')) || [];
    const storedVehicles = JSON.parse(localStorage.getItem('vehicles')) || [];
    const storedServices = JSON.parse(localStorage.getItem('services')) || [];

    setNuevosPlanes(storedPlans);
    setNuevosVehiculos(storedVehicles);
    setNuevosServicios(storedServices);
  }, [refreshValue]);

  const handlePriceChange = (index, price, tipo) => {
    const updatedData = [...tipo];
    updatedData[index].price = parseFloat(price);
    if (tipo === nuevosPlanes) {
      setNuevosPlanes(updatedData);
    } else if (tipo === nuevosVehiculos) {
      setNuevosVehiculos(updatedData);
    } else if (tipo === nuevosServicios) {
      setNuevosServicios(updatedData);
    }
  };

  const handleDescriptionChange = (index, description, tipo) => {
    const updatedData = [...tipo];
    updatedData[index].description = description;
    if (tipo === nuevosPlanes) {
      setNuevosPlanes(updatedData);
    } else if (tipo === nuevosVehiculos) {
      setNuevosVehiculos(updatedData);
    } else if (tipo === nuevosServicios) {
      setNuevosServicios(updatedData);
    }
  };

  const guardarCambios = () => {
    // Guardar los nuevos datos en el localStorage
    localStorage.setItem('plans', JSON.stringify(nuevosPlanes));
    localStorage.setItem('vehicles', JSON.stringify(nuevosVehiculos));
    localStorage.setItem('services', JSON.stringify(nuevosServicios));

    alert('Cambios guardados exitosamente');
  };

  const setearValoresPorDefecto = () => {
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

    localStorage.setItem('plans', JSON.stringify(plans));
    localStorage.setItem('vehicles', JSON.stringify(vehicles));
    localStorage.setItem('services', JSON.stringify(services));

    alert('Los valores por defecto han sido restablecidos');
    setRefreshValue(refreshValue + 1);
  }

  return (
    <div  className='ediciones_services'>
        <Table striped bordered hover>
        <thead>
        <tr>
          <th colSpan={3}>Edición de Servicios</th>
         
         
        </tr>
      </thead>
      <thead>
        <tr>
          <th>Tipos de Servicios</th>
          <th>Vehículos</th>
          <th>Servicios</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td> {nuevosPlanes.map((plan, index) => (
            <div key={index}>
             <td><h4>{plan.name}</h4></td> <br />
             <td><label>Price:</label></td> <br />
              <td><input
                type="number"
                value={plan.price}
                onChange={(e) => handlePriceChange(index, e.target.value, nuevosPlanes)}
              /></td> <br />
              <td><label>Description:</label></td> <br />
             <td> <textarea
                value={plan.description}
                onChange={(e) => handleDescriptionChange(index, e.target.value, nuevosPlanes)}
              /></td>
            </div>
          ))}
          </td>
          <td> {nuevosVehiculos.map((vehicle, index) => (
            <div key={index}>
             <td><h4>{vehicle.name}</h4></td> <br />
             <td><label>Price:</label></td> <br />
              <td> <input
                type="number"
                value={vehicle.price}
                onChange={(e) => handlePriceChange(index, e.target.value, nuevosVehiculos)}
              /></td> <br />
              <td><label>Description:</label></td> <br />
             <td>  <textarea
                value={vehicle.description}
                onChange={(e) => handleDescriptionChange(index, e.target.value, nuevosVehiculos)}
              /></td>
            </div>
          ))}</td>
          <td>  {nuevosServicios.map((service, index) => (
            <div key={index}>
             <td><h4>{service.name}</h4></td> <br />
             <td><label>Price:</label></td> <br />
              <td><input
                type="number"
                value={service.price}
                onChange={(e) => handlePriceChange(index, e.target.value, nuevosServicios)}
              /></td> <br />
              <td><label>Description:</label></td> <br />
             <td><textarea
                value={service.description}
                onChange={(e) => handleDescriptionChange(index, e.target.value, nuevosServicios)}
              /></td>
            </div>
          ))}</td>
        
        </tr>
        
      </tbody>
      <tbody>
        <tr>
          <td colSpan={2}> <Button onClick={guardarCambios}>Guardar Cambios</Button> </td>
          <td colSpan={1}> <Button onClick={setearValoresPorDefecto}>Valores por defecto</Button></td>
          
        
        </tr>
        
      </tbody>
    </Table>
      
      
    </div>
  );
};

export default EditarPrecios;
