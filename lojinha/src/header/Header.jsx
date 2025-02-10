import "./Header.css"; // Importando o CSS
import Logo from "./Logo";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); //Altera o estado do menu
    console.log("clicou!");
  };

  return (
    <header className="header">
      <div className="logo-container">
        <Logo />
      </div>
      <nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <ul className={isMenuOpen ? "active" : ""}>
          <li className="li-hover">
            <a href="#">Sobre nós</a>
          </li>
          <li className="li-hover">
            <a href="#">Contato</a>
          </li>
          <li className="li-hover">
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
