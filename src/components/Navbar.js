import { Link } from "react-router-dom";
import "./NavbarStyles.css";

import React, { useState } from 'react';

import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  //   React useStateHook, bir fonksiyon bileşenindeki durumu izlememize izin verir.
  // Durum genellikle bir uygulamada izlenmesi gereken verileri veya özellikleri ifade eder.

  // click -> Şu anki durum (İsimler farklı olabilir)
  // setClick -> Durumu güncelleyen bir fonksiyon
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const [color, setColor] = useState(false);
  const changeColor = () => {
    if(window.scrollY >= 1){ // sayfa 100 pikselden fazla(veya eşit) aşağı kaydırılırsa background-color değişecek
      setColor(true);
    }
    else{
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={ color ? "header header-bg" : "header"}>
      <Link to="/">
        <h1>Portfolio</h1>
      </Link>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <div className="hamburger" onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{ color: "#FFF" }}/>) : (<FaBars size={20} style={{ color: "#FFF" }}/>)}
      </div>
    </div>
  )
}

export default Navbar
