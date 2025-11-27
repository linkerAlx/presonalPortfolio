import './App.css'
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Landingpg from './Pages/Landingpg.jsx';
import Aboutpg from "./Pages/Aboutpg.jsx";
import Skillspg from "./Pages/Skillspg.jsx";
import Servicespg from "./Pages/Servicepg.jsx";
import Portfoliopg from "./Pages/Portfoliopg.jsx";
import Contactpg from "./Pages/Contactpg.jsx";
import Blogs from './Pages/Blogs.jsx';
import { useState } from "react";

function App() {

  const [nightMode, setNightMode] = useState(false);

  return (
    <div
      className={`min-h-screen transition-all duration-500 
      ${nightMode ? "bg-gradient-to-r from-black to-[#1A4A83] text-white" : "bg-white text-black"}`}
    >
      <Navbar nightMode={nightMode} setNightMode={setNightMode} />

      <Routes>
        <Route path="/" element={<Landingpg/>} />
        <Route path="/Aboutpg" element={<Aboutpg />} />
        <Route path="/Skillspg" element={<Skillspg />} />
        <Route path="/Servicespg" element={<Servicespg />} />
        <Route path="/Portfoliopg" element={<Portfoliopg />} />
        <Route path="/Blogspg" element={<Blogs />} />
        <Route path="/Contactpg" element={<Contactpg />} />
      </Routes>
    </div>
  );
}

export default App;
