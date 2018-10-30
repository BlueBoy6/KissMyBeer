import React from 'react'
import './style/general-style.css'

import MenuDriver from './components/Main'
import AccountTopBar from './components/dumbComponent/account-top-bar'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGhost } from '@fortawesome/free-solid-svg-icons'

library.add(faGhost)


const App = (props) => {

    

    return (
        <div>
            <AccountTopBar />
            <MenuDriver />
        </div>
    )
    
}


export default App