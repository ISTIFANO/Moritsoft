import React from 'react';
import { Home } from '../src/components/index';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>  
        <Route path="/" element={<Home />} />
        {/* <Route path="/Login" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
