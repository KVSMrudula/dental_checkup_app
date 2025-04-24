import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DoctorSection from './components/DoctorSection'; // ✅ Importing Doctor section
import CheckupRequestForm from './pages/CheckupRequestForm';
import CheckupResults from './pages/CheckupResults';

import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <HeroSection />
      <DoctorSection /> {/* ✅ Added right after hero */}
      <Routes>
        <Route path="/request" element={<CheckupRequestForm />} />
        <Route path="/results" element={<CheckupResults />} />
      </Routes>
    </Router>
  );
}

export default App;
