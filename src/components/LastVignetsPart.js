import React from 'react'
import {Link } from 'react-router-dom'
import SearchSelection from './SearchSelection'

const LastVignetsPart = (props) => {


    const {datas, addItem} = props
    console.log('=========datas in vignet===========')
    console.log(datas)

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
            {addItem && (
                <div className='row'>
                <div className='col-12 col-sm-3'>
                    <button onClick={(e)=>{this.addShop(e)}} className="btn pointer-action btn-block py-3 bckgcolor1 btn-lg shadow sameH100">
                        <img className="icon-add" src="/img/icons/plus-ico.png"/>
                    </button>
                </div>
                <div className='col-12 col-sm-7 btnD disactive'>
                    <SearchSelection 
                        dataBack={props.dataBack}
                        index="1" 
                        className="shadow z3" 
                        placeholder="Dans quel bar avez-vous consommé cette bière"
                        addition={false} 
                        options={props.options}
                    />
                </div>
                <div className='col-12 col-sm-2 btnD disactive'>
                    <button className="btn pointer-action btn-block py-3 bckgcolor1 btn-lg shadow sameH100">
                        <div className='title3'>
                            Ajouter !
                        </div>
                    </button>
                </div>
            </div>
            )}
        </div>
    )
}

export default LastVignetsPart
