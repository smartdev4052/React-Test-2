import { useState } from "react";
import { Link } from "react-router-dom";

import './Header.scss';

const Header = ({

}) => {

  const [ currentNav, setCurrentNav ] = useState(0);

  return (
      <div className="header">
        <div>
          <div>
            <Link to="/">
              <img className="logo" src="https://www.pngfind.com/pngs/m/685-6854994_react-logo-no-background-hd-png-download.png" alt="Canonical" />
            </Link>
          </div>
          <a href="#navigation" title="menu">Menu</a>
          <a href="#navigation-closed" title="close menu">Close menu</a>
        </div>

        <nav aria-label="Example main navigation" >
          <ul className="nav_button_group">
            <li className={"p-navigation__item " + (currentNav === 0 ? "is-selected" : "")}>
              <Link to="/" onClick={() => setCurrentNav(0)}>Members</Link>
            </li>
            <li className={"p-navigation__item " + (currentNav === 1 ? "is-selected" : "")}>
              <Link to="/teams"  onClick={() => setCurrentNav(1)}>Teams</Link>
            </li>
            <li className={"p-navigation__item " + (currentNav === 2 ? "is-selected" : "")}>
              <Link to="/todos" onClick={() => setCurrentNav(2)}>Todo-list</Link>
            </li>
          </ul>
        </nav>
      </div>
  );
}

export default Header;