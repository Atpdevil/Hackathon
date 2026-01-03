import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Winners from "./pages/Winners";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/winners" element={<Winners />} />
      </Routes>
    </>
  );
}

export default App;
