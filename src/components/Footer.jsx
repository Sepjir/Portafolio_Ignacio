import React from 'react'
import {ReactComponent as ReactIconUp} from '../imgs/chevron-up-solid.svg'
import {ReactComponent as ReactIconGithub} from '../imgs/github-brands.svg'
import {ReactComponent as ReactIconLinkedin} from '../imgs/linkedin-brands.svg'

const Footer = () => {
  return (
    <div>
        <nav className="navbar navbar-dark bg-primary fixed-bottom">
        <div className="container-fluid justify-content-end">
          <a className='mx-auto' href="#top" data-bs-toggle="tooltip" title="Arriba"><ReactIconUp style={{width: '26', fill: '#fff'}}/></a>
          <a className='navbar-brand' data-bs-toggle="tooltip" title="Mi Github ;)" target='_blank' rel="noreferrer noopener" href="https://github.com/Sepjir"> <ReactIconGithub style={{width: '26', fill: '#fff'}}/></a>
          <a className='navbar-brand' data-bs-toggle="tooltip" title="Mi Linkedin :D" target='_blank' rel="noreferrer noopener" href="https://www.linkedin.com/in/ignacio-moenen/"><ReactIconLinkedin style={{width: '26', fill: '#fff'}}/></a>
        </div>
      </nav>
    </div>
  )
}

export default Footer