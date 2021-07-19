import React from 'react';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import './Component/Style.css';
import Nav from './Component/Nav';
import Home from './Component/Home';
import Service from './Component/Service';
import Portfolio from './Component/Portfolio';
import Product from './Component/Product';
import Contact from './Component/Contact';
import About from './Component/About';
import Footer from './Component/Footer';
// import Newsletter from './Component/Newsletter';
import  { Switch , Route , BrowserRouter } from "react-router-dom";

function App() {
  return (<>
    <BrowserRouter>
      <Nav/>
      <Switch>
      <Route exact path= "/" component={Home} />
      <Route exact path= "/product" component={Product} />
      <Route exact path= "/service" component={Service} />
      <Route exact path= "/portfolio" component={Portfolio} />
      <Route exact path= "/about" component={About} />
      <Route exact path= "/contact" component={Contact} />

      </Switch>
      {/* <Newsletter /> */}
      <Footer />
    </BrowserRouter>
  </>
  );
};

export default App;
