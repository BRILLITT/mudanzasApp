import { HashRouter, Routes, Route } from "react-router-dom";
import "./Styles/App.css";
import Admin from "./Components/Admin";
import Customers from "./Components/Customers";
import Main from "./Components/Main";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import ContactUs from "./Components/ContactUs";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import Create from "./Components/Create";
import ProtectedRoutes from "./Components/ProtectedRoutes";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Main />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/create" element={<Create />}></Route>
          <Route path="/customers" element={<Customers />} /> 
          <Route element={<ProtectedRoutes />}>
            <Route path="/admin" element={<Admin />} />
          </Route>
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;
