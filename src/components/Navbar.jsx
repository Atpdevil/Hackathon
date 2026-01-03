import React from "react";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-left">HACKATHON</div>

      <nav className="nav-right">
        <a href="#how">How It Works</a>
        <a href="#usecases">Use Cases</a>
        <a href="#register">Register</a>
        <a href="#faq">About</a>
      </nav>
    </header>
  );
}

export default Navbar;
