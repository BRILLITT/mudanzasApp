import React, { useEffect, useState } from 'react';
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
