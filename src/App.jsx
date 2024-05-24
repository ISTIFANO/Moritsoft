import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, Services } from '../src/components/index'; // Importez le composant Services depuis son emplacement correct
import Nosrealisations from '../src/components/Nosrealisations'; //
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/nosrealisations" element={<Nosrealisations />} />
        </Routes>  
        </Router>
  );
}

export default App;
