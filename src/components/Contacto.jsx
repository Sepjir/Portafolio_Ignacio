import React from 'react'

const Contacto = () => {

  const enviar = (e) => {
    e.prevendDefault()
  }
  return (
    <div id='hablemos'>
        <h3 className='text-center'>¡Hablemos!</h3>
      <div className='container mt-5 d-flex justify-content-center'>
        <form action="https://formsubmit.co/e30f65684e4204c0e15298f2106b9730" method="POST" className='row g-3'>

          {/* Honeypot */}
          <input type="text" name='_honey' style={{display: 'none'}} />

          {/* disable captcha */}
          <input type="hidden" name='_captcha' value='false' />

          {/* enviar */}

          <input type="hidden" name='_next' value='https://velvety-chaja-09aead.netlify.app/' />
            <div className='col-12 col-sm-6'>
                <label className='form-label'>Correo*</label>
                <input type="email" name='email' className="form-control " placeholder='Correo' required/>
            </div>
            <div className="col-12 col-sm-6">
                <label className='form-label'>Asunto*</label>
                <input type="text" name='asunto' className="form-control" placeholder='Te quiero contratar' required/>
            </div>
            <div className="col-12 col-sm-6">
                <label className='form-label'>Mensaje*</label>
                <textarea type="text" name='texto' className="form-control" rows="3" placeholder='Mensaje' required/>
            </div>
            <div className="col-12">
            <button type='submit' onClick={e => enviar(e)} className="btn btn-outline-primary mt-2 mb-5">Enviar</button>
            </div>
        </form>
    </div>

    </div>
  )
}

export default Contacto