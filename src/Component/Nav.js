// // import React from 'react';
// // import './Style.css';


// // import { NavLink , BrowserRouter as Router} from "react-router-dom";

// // function Nav() {
// //   return (
// //     <>

// //     <div style={{width:"100%"}}>


// //       <div className="nav-bg">
// //         <div className='row'>
// //           <div className="col-12">

// //             <nav className="navbar navbar-expand-lg navbar-light">
// //               <div className="container-fluid">
// //                 <NavLink   to="/">

// //         <img src="/image/logo.png" alt="logo" className="navbar-logo" />
// //     </NavLink>
// //                 <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// //                   <span className="navbar-toggler-icon"></span>
// //                 </button>
// //                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
// //                   <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
// //                     <li className="nav-item">
// //                       <NavLink exact activeClassName='menu_active'
// //                        className="nav-link "  aria-current="page"   to="/">Home</NavLink>
// //                     </li>
// //                     <li className="nav-item">
// //                       <NavLink activeClassName='menu_active' className="nav-link "  aria-current="page"  to="/product">Product</NavLink>
// //                     </li>

// //                     <li className="nav-item">
// //                       <NavLink  activeClassName='menu_active' className="nav-link "   aria-current="page"  to="/service">Services</NavLink>
// //                     </li>

// //                     <li className="nav-item">
// //                       <NavLink activeClassName='menu_active' className="nav-link"   to="/portfolio">Portfolio</NavLink>
// //                     </li>

// //                     <li className="nav-item">
// //                       <NavLink  activeClassName='menu_active' className="nav-link "   to="/about">About Us</NavLink>
// //                     </li>

// //                     <li className="nav-item">
// //                     <NavLink activeClassName='menu_active' className="nav-link"   to='/contact'>Contact Us</NavLink>
// //                     </li>

// //                   </ul>


// //                 </div>
// //               </div>
// //             </nav>

// //           </div>
// //         </div>
// //       </div>
// //       </div>
// //     {/* <Router>

// //     <div className="maincontainer">
// //       <div className="logo-container">

// //       </div>
// //       <div className="navigation">
// //       <NavLink  activeClassName='menu_active' className="nav-link "   to="/about">About Us</NavLink>
// //       <NavLink  activeClassName='menu_active' className="nav-link "   to="/service">Services</NavLink>
// //       <NavLink  activeClassName='menu_active' className="nav-link "   to="/portfolio">portfolio</NavLink>
// //       <NavLink  activeClassName='menu_active' className="nav-link "   to="/contact">contact</NavLink>
// //       </div>
// //     </div>
// //     </Router> */}
// //     </>

// //   );
// // }
// // export default Nav;



// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//         display: "flex",

//   },
//   links: {
//     // display: "flex",
//     flexDirection: "row-reverse",
//     justifyContent: "right",
//     alignItems: "end",

//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     // flexGrow: 1,
//     flexDirection: "row-reverse",

//     // display:"flex",
//     justifyContent:"end",
//      alignItems:"end",
//     alignContent:"end",
//   },
// }));

import React, { useState } from 'react';
import "../App.css";
// import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';



function Navbar() {
    const [showLinks, setShowLinks] = useState(false)
    return (
        <div className="Navbar">
            <div className="leftside"></div>
             <img src="/image/logo.png" alt="logo" className="navbar-logo" />

            <div className="rightside">
                <div className="links" id={showLinks ?"hidden" :""}>
                    <a href="/">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/product">Product</a>
                    <a href="/services">Services</a>
                    <a href="/portfolio">Portfolio</a>
                    <a href="/contact">Contact Us</a>
                </div>
                <button onClick={()=> setShowLinks(!showLinks)} className="margin-right"> 
        <MenuIcon />
          </button>
            </div>
            
            
            
        </div>
        
        
    
    )
}

export default Navbar
