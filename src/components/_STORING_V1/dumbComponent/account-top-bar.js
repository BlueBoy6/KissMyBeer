import React from 'react'

const AccountTopBar = (props) => {

   const {user} = props;
   const userBar = user.map((user)=>{
    return (
        <div key={user.id} className='top-bar-account '>
            <div className='row p-1 justify-content-end'>
                <div className='dash-user-name col-4 p-2 align-self-center'>
                    <div className='subtit text-right'>
                        Salut {user.name} ! Une petite binch' ?
                    </div>
                </div>
                <div className='dash-user-avatar col-1 p-1'>
                    <div className='bckg-before gradient1'>
                        
                    </div>
                    <div className='mask'>
                        <img className='imgH' src={user.avatarimg}/>
                    </div>
                </div>
            </div>
        </div>
    )
   })
    

  return (
      <div className=' container fixed-top'>
          {userBar}
      </div>
  )
}


export default (AccountTopBar);
