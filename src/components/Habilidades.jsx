import React from 'react'

const Habilidades = ({arr2, arr}) => {
  return (
    <div id='habilidades'>
        <h3 className='container text-center'>Habilidades y Herramientas...</h3>
        <div className="container mt-3">
          <div className="row justify-content-center">
            <div className="col-6 col-sm-3">
            <ul>
              {
                arr ? (
                  arr.map((item, index) => (
                      <li key={index}><strong>{item}</strong></li>
                  ))
                ) : null
              }
              </ul>
            </div>
            <div className="col-6 col-sm-3">
              <ul>
                {
                  arr2 ? (
                    arr2.map((item, index) => (
                      <li key={index}><strong>{item}</strong></li>
                    ))
                  ) : null
                }
              </ul>
            </div>
          </div>
        </div>
        
    </div>
  )
}

export default Habilidades