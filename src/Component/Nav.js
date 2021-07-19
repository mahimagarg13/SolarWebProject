import React from 'react';
import './Style.css';


import { NavLink , BrowserRouter as Router} from "react-router-dom";

function Nav() {
  return (
    <>
    
    <div style={{width:"100vw"}}>

    
      <div className="nav-bg">
        <div className='row'>
          <div className="col-12">

            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <NavLink   to="/">
        
        <img src="/image/logo.png" alt="logo" className="navbar-logo" />
    </NavLink>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink exact activeClassName='menu_active'
                       className="nav-link "  aria-current="page"   to="/">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link "  aria-current="page"  to="/product">Product</NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink  activeClassName='menu_active' className="nav-link "   aria-current="page"  to="/service">Services</NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink activeClassName='menu_active' className="nav-link"   to="/portfolio">Portfolio</NavLink>
                    </li>

                    <li className="nav-item">
                      <NavLink  activeClassName='menu_active' className="nav-link "   to="/about">About Us</NavLink>
                    </li>

                    <li className="nav-item">
                    <NavLink activeClassName='menu_active' className="nav-link"   to='/contact'>Contact Us</NavLink>
                    </li>

                  </ul>
                      

                </div>
              </div>
            </nav>

          </div>
        </div>
      </div>
      </div>
    {/* <Router>

    <div className="maincontainer">
      <div className="logo-container">
        
      </div>
      <div className="navigation">
      <NavLink  activeClassName='menu_active' className="nav-link "   to="/about">About Us</NavLink>
      <NavLink  activeClassName='menu_active' className="nav-link "   to="/service">Services</NavLink>
      <NavLink  activeClassName='menu_active' className="nav-link "   to="/portfolio">portfolio</NavLink>
      <NavLink  activeClassName='menu_active' className="nav-link "   to="/contact">contact</NavLink>
      </div>
    </div>
    </Router> */}
    </>

  );
}
export default Nav;