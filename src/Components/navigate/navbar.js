import React from "react";
// Import the Link component
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor: '#D6A3B2'}}>
        <div className="container-fluid">
          <Link to='/'>
            <img src="./jdspalogo.png" width={120} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <Link className="nav-link" to='/'>
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/experiences'>
                  Experiencias
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/products'>
                  Productos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
