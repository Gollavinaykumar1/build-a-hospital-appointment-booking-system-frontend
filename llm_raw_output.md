# Frontend LLM Output

=== FILE: src/App.jsx ===
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
=== END ===

=== FILE: src/main.jsx ===
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
=== END ===

=== FILE: src/index.css ===
@tailwind base;
@tailwind components;
@tailwind utilities;
=== END ===

=== FILE: src/api.js ===
import axios from 'axios';
const BASE_URL = 'https://example.com/api';

const api = axios.create({
  baseURL: BASE_URL,
});

export const bookAppointment = async (data) => {
  try {
    const response = await api.post('/appointments', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const viewAppointments = async () => {
  try {
    const response = await api.get('/appointments');
    return response.data;
  } catch (error) {
    throw error;
  }
};
=== END ===

=== FILE: package.json ===
{
  "name": "hospital-appointment-booking-system",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "axios": "^0.27.2",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.3.0",
    "tailwindcss": "^3.1.8"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^1.11.0",
    "vite": "^3.1.0"
  }
}
=== END ===

=== FILE: vite.config.js ===
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',
  },
});
=== END ===

=== FILE: index.html ===
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Hospital Appointment Booking System</title>
  <link rel="stylesheet" href="index.css" />
</head>
<body>
  <div id="root"></div>
  <script type="module" src="main.jsx"></script>
</body>
</html>
=== END ===

=== FILE: tailwind.config.js ===
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
=== END ===

=== FILE: postcss.config.js ===
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
=== END ===