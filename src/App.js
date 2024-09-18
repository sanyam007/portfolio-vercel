import { NavBar } from './Components/NavBar';
import { Banner } from './Components/Banner';
import { Skills } from './Components/Skills';
import { Projects } from './Components/Projects';
import { Footer } from './Components/Footer';
import { Contact } from './Components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route , useLocation} from 'react-router-dom';
import React, { useRef } from 'react';
import './App.css';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar />
      <AppContent />
    </div>
    </Router>
  );
}

function AppContent() {
  const location = useLocation(); // Correctly use inside Router context

  return (
    <>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>

      <Footer className={location.pathname === '/contact' ? 'contact-footer' : 'footer'} />
    </>
  );
}


export default App;
