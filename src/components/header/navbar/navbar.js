import React from "react";
import "./navbar.css";
import { NavLink } from "react-router";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-links">
        <div>
          <NavLink to="/Men" end>
          Masala chai
          </NavLink>
        </div>
        <div>
          <NavLink to="/Women" end>
          Ginger chai 
          </NavLink>
        </div>
        <div>
          <NavLink to="/kids" end>
          Cardamom chai
          </NavLink>
        </div>
        <div>
          <NavLink to="/New-&-featured" end>
          Tulsi Chai
          </NavLink>
        </div>
        <div>
          <NavLink to="/Gifts" end>
          Irani Chai 
          </NavLink>
        </div>
      </div>
      <div className="navbar-logo"></div>
      <div className="navbar-user-info">
        <i className="fas fa-search"></i>
        <i className="fas fa-shopping-cart"></i>
        <i className="fas fa-user"></i>
      </div>
    </div>
  );
};

export default Navbar;
