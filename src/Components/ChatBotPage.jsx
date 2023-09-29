// ChatBotPage.jsx
import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#111113',
  headerBgColor: '#e69f10',
  headerFontColor: '#fff',
  headerFontSize: '20px',
  botBubbleColor: '#6B6B70',
  botFontColor: '#C7C7CA',
  userBubbleColor: '#e69f10',
  userFontColor: '#111113',
};

function ChatBotPage() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='chatBot'>
      
      <Button variant="primary" onClick={handleShow}>
      <i className="fa-regular fa-message"></i><br />
      <p className="ti" >Consultanos</p>
      </Button>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          {/* <Offcanvas.Title>Realiza tu consulta a Mudancito</Offcanvas.Title> */}
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ThemeProvider theme={theme}>
          <ChatBot
              steps={[
                {
                  id: "1",
                  message: "Hola, ¿Qué tal? Soy Mudancito, tu asistente virtual. ¿Cuál es tu nombre?",
                  trigger: "2"
                },
                {
                  id: "2",
                  user: true,
                  validator: (value) => {
                    if (/^[a-zA-ZáÁéÉíÍóÓúÚüÜ\s]+$/.test(value)) {
                      return true;
                    }
                    else if (!value) {
                      return 'ingresa solo letras';
                    }
                  },
                  trigger: "3"
                },
                {
                  id: "3",
                  message: "Hola {previousValue}, es un gusto saludarte.",
                  trigger: "4A"
                },
                {
                  id: "4A",
                  message: "¿Hay algo que quisieras consultarme?",
                  
                  trigger: "5"
                },
                {
                  id: "4B",
                  message: "¿Deseas hacerme otra consulta?",         
                  trigger: "5"
                },
                {
                  id: "5",
                  options: [
                    { value: "y", label: "SI", trigger: "6A" },
                    { value: "n", label: "NO", trigger: "6B" },
                  ]
                },
                {
                  id: "6A",
                  message: "¡Perfecto! ¿Sobre qué tema necesitas ayuda?",
                  trigger: "seleccion"
                },
                {
                  id: "6B",
                  message: "Perfecto, en caso tengas alguna duda, no dudes en venir de nuevo a consultarme. Pasa un lindo día.",
                  end: true
                },
                {
                  id: "seleccion",
                  options: [
                    {value: "a", label: "Hacen transportes de Lima a otra ciudad?", trigger: "7A"},
                    {value: "b", label: "Cómo puedo obtener un presupuesto?", trigger: "7B"},
                    {value: "c", label: "Mis productos están asegurados?", trigger: "7C"},
                ]
                },
                {
                  id: "7A",
                  message: "Lo sentimos, por el momento solo hacemos traslados al interior de la ciudad de Lima y Lima provincias",
                  trigger: "4B"
                },
                {
                  id: "7B",
                  message: "Primero necesitas logearte, para ello dirígete a la opción 'Login' e inicia sesión con tus datos. En caso no te hayas registrado aún, podrás hacerlo ahí mismo en la opción 'Registro'.  Una vez que te hayas registrado o te hayas logeado serás redirigido a la sección cliente, en el apartado izquierdo encontrarás una opcion llamada 'HAZ TU PRESUPUESTO' en la cual podrás completar algunos campos para que tu mismo puedas cotizar el costo del traslado.",
                  trigger: "4B"
                },
                {
                  id: "7C",
                  message: "Somos una empresa que se preocupa por la seguridad de las pertenencias de nuestros usuarios, por ese motivo, todas las pertenencias de nuestros clientes que se encuentren a nuestro cargo gozarán de un seguro que cubrirá en su totalidad el valor de las pertenencias de las mismas.",
                  trigger: "4B"
                },
              ]}
            />
          </ThemeProvider>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default ChatBotPage;
