import React from 'react'
import {Link } from 'react-router-dom'

const LastBars = (props) => {

    const {lastBar} = props

    return (
        <div key={lastBar.id} className='col-3 p-1 perspective'>
            <Link to={`/shop/${lastBar.id}`}>
                <div
                    className='lastBar radius pointer-action py-md-5 shadow my-1 text-center'
                    style={{backgroundImage: `url(${lastBar.img})`}}>
                    <div className='name subtit z3'>
                        { lastBar.name }
                    </div>
                    <div className='bckg-after'></div>
                </div>
            </Link>
        </div>
    )
}

export default LastBars
