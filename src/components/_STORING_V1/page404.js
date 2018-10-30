import React from 'react'
import { Link } from 'react-router-dom'

const page404 = () => {
  return (
    <div>
        <div className='lostMessage  p-5 mx-auto'>
            Hey dude You lose yourself ? 
        </div>
        <Link to="/dashboard" >
            <button>
                Go back to home !
            </button>
        </Link>
    </div>
  )
}

export default page404
