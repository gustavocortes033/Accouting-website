import React from 'react';
import GlobalStyle from './globalStyles';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import { Navbar } from "./components/indes";




function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
       <Route path="/" element={<Home />} />
       </Routes>
    </Router>
    
  );
}

export default App;
