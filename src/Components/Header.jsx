import React from "react";
import HeaderCSS from "./Header.module.css";
import pokeLogo from "../img/International_Pokémon_logo.svg.png";

const Header = () => {
  return (
    <>
      <div className={HeaderCSS.headerStyle}>
        <img src={pokeLogo} alt="Pokemon Logo" className={HeaderCSS.logo}/>
      </div>
    </>
  );
};

export default Header;
