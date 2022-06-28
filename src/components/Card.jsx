import React from 'react'
import img1 from '../imgs/tetris-reactjs.jpg'
import img2 from '../imgs/bodeapp.jpg'
import img3 from '../imgs/finanzas-react.png'

const Card = () => {
  return (
    <div id='proyectos' className='container mt-2'>
        <h3 className='text-center'>Proyectos</h3>
        <div className="row mt-5">
                <div className="card col-12 col-md-4 mx-auto mt-3 ">
                    <img src={img1} className="card-img-top img-fluid text-center mt-1" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">Tetris React</h5>
                            <p className="card-text">Aplicación construida en <strong>ReactJS y Styled Components</strong>, siguiendo algunas directrices de Internet, el juego de Tetris es completamente funcional, y cada 10 lineas completas aumenta su velocidad y nivel.</p>
                            <a target='_blank' rel="noreferrer nopener" href="https://amazing-semolina-200866.netlify.app/" className="btn btn-outline-primary">Juega Ahora</a>
                            <a target='_blank' rel="noreferrer nopener" href="https://github.com/Sepjir/ReactJS-Tetris" className="btn btn-outline-success mx-1">Repositorio</a>
                        </div>
                </div>
                        <div className="card col-12 col-md-4 mx-auto mt-3 ">
                            <img src={img2} className="card-img-top img-fluid text-center mt-1" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">BodeApp</h5>
                                    <p className="card-text">Aplicación para manejo de inventario estatico, la cual está construida con <strong> ExpressJS, Handlebars, JsonWebToken y PostgreSQL</strong>, y que presenté como prueba final de Desafío Latam</p>
                                    <p>Para iniciar sesión utilizar las siguientes credenciales:</p>
                                    <p>Mail: invitado@invitado.cl</p>
                                    <p>Pass: 123456</p>
                                    <a target='_blank' rel="noreferrer nopener" href="https://proyecto-fullstack-bodeapp.herokuapp.com/" className="btn btn-outline-primary">Probar</a>
                                    <a target='_blank' rel="noreferrer nopener" href="https://github.com/Sepjir/Proyecto_Fullstack_BodeApp" className="btn btn-outline-success mx-1">Repositorio</a>
                                </div>
                        </div>

                        <div className="card col-12 col-md-4 mx-auto mt-3 ">
                            <img src={img3} className="card-img-top img-fluid text-center mt-1" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">Finanzas Personales</h5>
                                    <p className="card-text">Aplicación financiera que lleva registros de <strong>Ingresos </strong> y <strong>Egresos</strong> de dinero, y un balance con registro de usuarios <strong> La aplicación web está construida en ExpressJS, ReactJS y PostgreSQL para la persistencia de datos</strong>, y que presenté como prueba para Alkemy</p>
                                    <p>Para iniciar sesión utilizar las siguientes credenciales:</p>
                                    <p>Mail: invitado@invitado.cl</p>
                                    <p>Pass: 123456</p>
                                    <a target='_blank' rel="noreferrer nopener" href="https://sensational-quokka-997c04.netlify.app/" className="btn btn-outline-primary">Probar</a>
                                    <a target='_blank' rel="noreferrer nopener" href="https://github.com/Sepjir/alkemy-challenge" className="btn btn-outline-success mx-1">Repositorio</a>
                                </div>
                        </div>

        </div>

    </div>
  )
}

export default Card