import React from 'react'
import { ReactComponent as ReactLogoAbout } from '../imgs/address-card-solid.svg'
import { ReactComponent as ReactLogoIdea } from '../imgs/lightbulb-solid.svg'
import { ReactComponent as ReactLogoBrain } from '../imgs/brain-solid.svg'
import { ReactComponent as ReactLogoDialogo } from '../imgs/message-solid.svg'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-dark fixed-top bg-primary mb-5">
      <div className="container-fluid justify-content-start">
          <a className='navbar-brand mx-auto' data-bs-toggle="tooltip" title="Sobre mi" href="#about" ><ReactLogoAbout style={{width: '26', fill: '#fff'}}></ReactLogoAbout></a>
          <a className='navbar-brand mx-auto' data-bs-toggle="tooltip" title="Mis Habilidades" href="#habilidades"><ReactLogoBrain style={{width: '26', fill: '#fff'}}></ReactLogoBrain></a>
          <a className='navbar-brand mx-auto' data-bs-toggle="tooltip" title="Mis Proyectos" href="#proyectos"> <ReactLogoIdea style={{width: '26', fill: '#fff'}}></ReactLogoIdea></a>
          <a className='navbar-brand mx-auto' data-bs-toggle="tooltip" title="Contacto" href="#hablemos"><ReactLogoDialogo style={{width: '26', fill: '#fff'}}/></a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar