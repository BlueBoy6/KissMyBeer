import React from 'react'
import { Link } from 'react-router-dom'


const Login = () => {
  return (
    <div className='col-md-6 m-auto'> 
    <div className='row'>
      <div className='p-3'>
      <Link to='/'>
        <button type="submit" className="btn btn-primary btn-lg shadow">Revenir à l'accueil</button>
      </Link>
        
      </div>
    </div>
    <div className='row justify-content-center'>
      <div className='p-3 col'>
        <div className=' text-center title1'>
            Connexion
        </div>
        <div className=' text-center legend'>
          Vous êtes à deux doigts de mousser !
        </div>
      </div>
    </div>

    <div className='row justify-content-center'>
      <div className='p-3 col'>
      <form>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Votre pseudo</label>
          <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Mot de passe</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Mot de passe"/>
        </div>
        <div className=''>
          <button type="submit" className="btn btn-success btn-lg btn-block shadow">Connectez-vous</button>
        </div>
      </form>
    </div>
    </div>
    </div>
  )
}

export default Login
