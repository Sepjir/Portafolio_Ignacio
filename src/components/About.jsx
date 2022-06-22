import React from 'react'

const About = ({text}) => {
  return (
    <div className='container'>
        <h3 id='about' className='text-center'>Sobre mi...</h3>
        <div className="row justify-content-center">
          <div className='container mt-2 col-10 col-sm-8'>
            <p>Mi nombre es <strong>Ignacio Moenen</strong>, soy <strong>Ingeniero en Administración de Empresas</strong> de profesión, y hace un poco más de 4 años decidí emprender mi propio negocio, una web informativa de videojuegos llamada <strong>Cajadebotin.com.</strong></p>
            <p>Aquí me tocó aprender muchas cosas por mi mismo, ya que fui el <strong>SEO, Redactor y soporte WEB</strong> durante todo este tiempo, cosa que me acercó de alguna forma al area del <strong>desarrollo y al mundo de TI</strong></p>
            <p>Por lo que decidí profesionalizar mis conocimientos estudiando en un bootcamp en <strong>Desarrollo Fullstack en Javascript</strong> el cual hace poco termine, pero se que esto es apenas el inicio de esta aventura.</p>
            <p>Actualmente me encuentro perfeccionando mis conocimientos y aprendiendo <strong>ReactJS</strong> donde se me ha abierto un mundo completo de como desarrollar aplicaciones entretenidas, y que podrás ver más abajo en mis <strong>proyectos</strong></p>
            <p>También estoy buscando mi primera oportunidad laboral en TI, poseo conocimientos en lenguaje <strong>Javascript, ReactJS y diferentes frameworks y librerías</strong></p>
          </div>
        </div>
        <div className="row justify-content-center">
        <div className="col-12 col-sm-8">
          <h3 className='text-center'>Curriculum</h3>
            <iframe className='mt-2' title='CV Ignacio' src='https://www.cajadebotin.com/wp-content/uploads/2022/06/Curriculum-Ignacio-Moenen-2022-2.pdf' width="100%" height="500px"></iframe>
        </div>
        </div>
    </div>
  )
}

export default About