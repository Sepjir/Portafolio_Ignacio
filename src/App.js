import React from "react";
import Navbar from "./components/Navbar";
import Titulo from "./components/Titulo";
import Card from "./components/Card";
import About from "./components/About";
import Contacto from "./components/Contacto";
import Habilidades from "./components/Habilidades";
import Footer from "./components/Footer";
import { arr2, arr } from "./variables";



import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <div>
      <Navbar/>
      <Titulo/>
      <hr className="container mt-5 w-75"/>
      <About/>
      <hr className="container mt-5 w-75"/>
      <Habilidades arr2={arr2} arr={arr}/>
      <hr className="container mt-5 w-75"/>
      <Card/>
      <hr className="container mt-5 w-75"/>
      <Contacto/>
      <div className="mt-5"></div>
      <Footer/>
    </div>
  );
}

export default App;
