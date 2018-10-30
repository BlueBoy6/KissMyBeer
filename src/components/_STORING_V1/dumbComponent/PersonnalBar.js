import React from 'react'
import {connect} from "react-redux"
import {max} from "../functions-general"

import LastBars from "./LastBars"
import LastBeers from "./LastBeers"


const PersonnalBar = (props) => {

    //console.log('test in personal bar :', props)

    
    const {datas} = props
    const userPresentation = datas.map((user)=>{
        return (
 
                <div key={user.id} className='col-12 '>
                    {/* Ici se trouvera les infos diverses en row */}
                    <div className='row no-gutters'>
                    <div className='py-2 col-12 '>    
                        <div className='p-5 gradient1 radius shadow'>
                            <div className='row'>
                                <div className='title3'>
                                    Dernières bières testées
                                </div>
                            </div>
                            <div className='row'>
                                {user.lastBeers.slice(user.lastBeers.length-(user.lastBeers.length - 4 >= 1  ? 4 : 0), user.lastBeers.length).map((beerIndex, i)=>{
                                    const {beerList} = props
                                    const lastBeer = beerList[beerIndex]
                                    return <LastBeers key={i} lastBeer={lastBeer}/>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='py-2 col-12 '>
                        <div className='p-5 gradient1 radius shadow'>
                            <div className='row'>
                                <div className='title3'>
                                    Dernièrs bars visités
                                </div>
                            </div>
                            <div className='row no-gutters'>

                                {user.lastBars.slice(user.lastBars.length-(user.lastBars.length - 4 >= 1  ? 4 : 0), user.lastBars.length).map((barIndex, i)=>{
                                    const {shopList} = props
                                    let lastBar = shopList[barIndex]
                                    return <LastBars key={i} lastBar={lastBar} />
                                })}
                            </div>
                        </div>
                    </div>
                    
                </div>
                </div>
        )
    })
  return (
      <div className='dash-personnal row no-gutters'>
            {userPresentation}
        </div>
  )
}

const mapStateToProps = (state) => {
    return {
        beerList : state.beerList,
        shopList : state.shopList,
    }
}

export default connect(mapStateToProps) (PersonnalBar);
