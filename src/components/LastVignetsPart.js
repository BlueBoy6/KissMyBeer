import React from 'react'
import {Link } from 'react-router-dom'

const LastVignetsPart = (props) => {


    const {datas} = props

    return (
        <div className='p-3 p-sm-5 gradient1 radius shadow mb-3'>
            <div className='pl-1 title3'>
                {props.title}
            </div>
            <div className='row'>
                {datas.map((item,i)=>{
                    if(i<=3) {
                        return(
                            <div key={i} className='col-6 col-sm-3 perspective'>
                                <Link to={`${item.link}`}>
                                    <div
                                        className='lastBar radius pointer-action  py-4 py-md-5 shadow my-1 text-center'
                                        style={{backgroundColor: "#ffffff",backgroundImage: `url(${item.img})`}}>
                                        <div className='name subtit z3'>
                                            {item.title}
                                        </div>
                                        <div className='textwhiteshadow z3'>
                                            {item.subtitle}
                                        </div>
                                        <div className='bckg-after'></div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }
                    
                })}
            </div>
        </div>
    )
}

export default LastVignetsPart
