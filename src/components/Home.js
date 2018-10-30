import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <div className='container-fluid'>
    
    <div className='row justify-content-center'>
      <div className='col-md-6 p-3'>
          <div className='title1 text-center'>Bièrre-jour !</div>
          <div className='part-login-register'>
          <div className='part-register mt-1'>
              <div className='text-center  p-3 mt-2'>
                  Pas encore membre ? remédions à cela !
              </div>
                <Link className='btn btn-primary btn-lg btn-block shadow ' to='/register'>
                    Inscrivez-vous !
                </Link>
              
          </div>

          
          <div className='part-login mt-1'>
              <div className='text-center p-3 mt-2'>
                  Vous faites déjà parti des membres ?
              </div>
              <Link className='btn btn-success btn-lg btn-block shadow ' to='/Login'>
                  Connectez-vous !
              </Link>
          </div>
          </div>
      </div>
  </div>
</div>
  </div>
)

export default Home
