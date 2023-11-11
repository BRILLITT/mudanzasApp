import { useEffect, useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import './Styles/App.css';
import Admin from './Components/Admin';


import Customers from './Components/Customers';
import Main from './Components/Main';
import AboutUs from './Components/AboutUs';
import Services from './Components/Services';
import ContactUs from './Components/ContactUs';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Create from './Components/Create';
import ProtectedRoutes from './Components/ProtectedRoutes';
import LoadingScreen from './Components/LoadingScreen';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import ChatBotPage from './Components/ChatBotPage';


function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.addEventListener('load', () => {
      setIsLoading(false);
    });
  }, []);
  const userData = useSelector((state) => state.dataSlice);

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

  return (
    <div className="App">
      {isLoading ? <LoadingScreen /> : <></>}
      <HashRouter>
        <Main />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/create" element={<Create />}></Route>
         
          {/* se puso gmail en lugar de name de manera temporal */}
          <Route
            path="/customers"
            element={(userData.gmail || userData.email) ? <Customers /> : <Navigate to="/" />}
          />
          <Route element={<ProtectedRoutes />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
        {userData.name ? <></> : <Footer />}

        <ChatBotPage />
      </HashRouter>
      
    </div>
  );
}

export default App;
