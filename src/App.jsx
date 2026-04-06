import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import BookAppointment from './BookAppointment';
import ViewAppointments from './ViewAppointments';
import Navbar from './Navbar';
import Footer from './Footer';

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <HashRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/view-appointments" element={<ViewAppointments />} />
      </Routes>
      <Footer />
      {loading && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-500 bg-opacity-50">
          <div className="text-lg font-bold text-white">Loading...</div>
        </div>
      )}
      {error && (
        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-red-500 bg-opacity-50">
          <div className="text-lg font-bold text-white">{error.message}</div>
        </div>
      )}
    </HashRouter>
  );
}

export default App;