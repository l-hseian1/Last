import { HashLink } from "react-router-hash-link";
import "./Navbar.css";
import { useState } from "react";
import { NavItemes } from "./NavItemes";
import { HiX } from "react-icons/hi";
import { TfiAlignRight } from "react-icons/tfi";

const handleScroll = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [toggelIcon, setToggelIcon] = useState(false);

  const handelToggelIcon = () => {
    setToggelIcon(!toggelIcon);
  };

  const toggleTheme = () => {
    setIsDarkMode((prevState) => !prevState);
    document.body.classList.toggle("dark-mode");
  };

  const handleMenuItemClick = (id) => {
    handleScroll(id);
    setToggelIcon(false);
  };

  return (
    <nav className={`NavbarItems ${isDarkMode ? "dark-mode" : ""}`}>
      <h1 className={`navbar-logo ${isDarkMode ? "dark-mode" : ""}`}>Lama</h1>
      <ul className={`navbar-menu ${toggelIcon ? "active" : ""}`}>
        {NavItemes.map((item, index) => (
          <li
            key={index}
            className={item.cName}
            onClick={() => handleMenuItemClick(item.id)}
          >
            <HashLink to={item.id}>{item.title}</HashLink>
          </li>
        ))}
      </ul>
      <div onClick={toggleTheme} className={`${isDarkMode ? "dark-mode" : ""}`}>
        <img
          src={`${isDarkMode ? "/images/Sun.png" : "/images/moon.png"}`}
          alt="Theme Toggle"
        />
      </div>
      <div className="menu-icons" onClick={handelToggelIcon}>
        {toggelIcon ? <HiX size={30} /> : <TfiAlignRight size={30} />}
      </div>
    </nav>
  );
};

export default Navbar;