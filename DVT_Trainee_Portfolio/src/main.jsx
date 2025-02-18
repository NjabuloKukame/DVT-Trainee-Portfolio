import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles.css'
import Home from './Home.jsx'
import About from './About.jsx';
import Search from './Search.jsx';
import Login from './Login.jsx';
import Portfolio from './Portfolio.jsx';
import UserPortfolio from './UserPortfolio.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/userportfolio" element={<UserPortfolio />} />
      </Routes>
    </Router>
  </StrictMode>
)
 