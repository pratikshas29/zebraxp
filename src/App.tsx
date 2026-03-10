import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Tenets from './pages/Tenets';
import Offering from './pages/Offering';
import Layout from './pages/Layout';

function App() {
  return (
    <BrowserRouter>
        <Routes>
		
      <Route element={<Layout />}>
      	<Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs  />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/tenets" element={<Tenets />} />
        <Route path="/offering" element={<Offering />} />
      </Route>
        </Routes>
    </BrowserRouter>
  );
}
export default App;
