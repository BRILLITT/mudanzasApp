import { useEffect, useState } from 'react';
import { useNavigate, Link } from "react-router-dom";
import "../Styles/App.css";
import Login from './Login';
import { useSelector } from 'react-redux';
import Tools from './Tools';
import images from './assets/images';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Main = () => {
    const [look, setLook] = useState(false);
    const [saw, setSaw] = useState(false);
    const navigate = useNavigate();
    const constLogin = useSelector(state => state.dataSlice);

    // lineas 15,16 permitirán trabajarás con los datos del usuario registrado. 
    const registerList = useSelector(state => state.userRegisterSlice)
    const registeredUser = registerList.find(posi => (posi.gmail === constLogin.gmail));
    //console.log(registeredUser);

    useEffect(() => {
        if (!(constLogin?.name || registeredUser?.name)) {
            setLook(false);
        } else {
            setLook(true);
        }
    }, [constLogin]);

    const back = () => {
        navigate(-1);
    }

    const see = () => {
        setLook(!look);
    }

    const made = () => {
        setSaw(!saw);
    };

    return (
        <div className='div_main'>

            <Navbar collapseOnSelect expand="lg" className="navbar bg-dark">
                <Container  >
                    <Navbar.Brand href="#home" className="title" to={"/"} as={Link}>Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features" className="title" to={"/aboutus"} as={Link}>About Us</Nav.Link>
                            <Nav.Link href="#pricing" className="title" to={"/services"} as={Link} >Services</Nav.Link>
                            <Nav.Link href="#pricing" className="title" to={"/contactus"} as={Link} >Contact Us</Nav.Link>
                        
                        </Nav>
                        <Nav className='principal'>
                            {
                                (constLogin?.name || registeredUser?.name) ?
                                    <></>
                                    :
                                    <h1>{look ? <Login /> : <></>}</h1>
                            }
                            {


                                (constLogin?.name || registeredUser?.name) ?
                                    <div className='header_datos'>
                                        <button className='button' onClick={made}>
                                            <img className='miniImage' src={constLogin.imageUrl ? constLogin.imageUrl : images.incognito} alt="" />
                                        </button>
                                        <br />
                                        <h2>
                                            Hi {
                                                constLogin.email ?
                                                    (constLogin.name.slice(0, constLogin.name.indexOf(" ")))
                                                    :
                                                    (registeredUser.name.slice(0, registeredUser.name.indexOf(" ")))
                                            }
                                        </h2>
                                    </div>
                                    :
                                    <button className="title2" onClick={see}>Login</button>
                            }
                            {
                                (constLogin?.name || registeredUser?.name) ?
                                    <div>
                                        {saw ?
                                            <Tools />
                                            :
                                            <></>
                                        }
                                    </div>
                                    :
                                    <div><></></div>
                            }
                            <button className="title2" onClick={back}>Back</button>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Main;