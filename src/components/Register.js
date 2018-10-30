import React from 'react'
import { Link } from 'react-router-dom'


import {connect} from "react-redux"
import {bindActionCreators} from "redux"


const Register = () => {
  return (
    <div className='col-md-6 m-auto'>
    <div className='row '>
      <div className='col p-3'>
      <Link to='/'>
        <button type="submit" className="btn btn-primary btn-lg shadow">Revenir à l'accueil</button>
      </Link>
        
      </div>
    </div> 
    <div className='row justify-content-center'>
      <div className='col p-3'>
        <div className=' text-center title1'>
            Enregistrez-vous
        </div>
        <div className=' text-center legend'>
          Vous êtes à deux doigts de mousser !
        </div>
      </div>
    </div>

    <div className='row justify-content-center'>
      <div className='col p-3'>
      <form action='' method='post'>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Votre pseudo</label>
          <input type="text" name='pseudo' className="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Votre adresse mèl</label>
          <input type="email" name='email' className="form-control" id="exampleInputEmail1" placeholder="Votre adresse mèl"/>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Mot de passe</label>
          <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder="Mot de passe"/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Confirmez votre mot de passe</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirmez votre mot de passe"/>
        </div>
        <div className='justify-content-center'>
          <button type="submit" className="btn btn-primary btn-lg btn-block shadow">Connectez-vous</button>
        </div>
      </form>
    </div>
    </div>
    </div>
  )
}


function mapDispatchToProps (dispatch) {
  return bindActionCreators({}, dispatch)
}



export default connect(mapDispatchToProps)(Register)
