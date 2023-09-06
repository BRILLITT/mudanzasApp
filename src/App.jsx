import { HashRouter, Routes, Route } from "react-router-dom";
import "./Styles/App.css";
import Admin from "./Components/Admin";
import Customers from "./Components/Customers";
import Main from "./Components/Main";
import AboutUs from "./Components/AboutUs";
import Login from "./Components/Login";
import Services from "./Components/Services";
import ContactUs from "./Components/ContactUs";
import Home from "./Components/Home";
import images from "./Components/assets/images";
import Footer from "./Components/Footer";

function App() {


  return (
    <div className="App">

      <HashRouter>

        <Main/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/admin" element={<Admin />}/>
          <Route path="/customers" element={<Customers />}/>
          <Route path="/aboutus"  element={<AboutUs/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/services"  element={<Services/>}/>
          <Route path="/contactus"  element={<ContactUs/>}/>


        </Routes>
        <Footer/>
      </HashRouter>

     

    </div>
  )
}

export default App
