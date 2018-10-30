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
 
                <div key={user.id}>
                    {/* Ici se trouvera les infos diverses en row */}
                    <div className='row'>
                    <div className='mb-3 col-12 '>    
                        <div className='p-3 p-sm-5 gradient1 radius shadow'>
                            <div className='pl-1 title3'>
                                Dernières bières testées
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


                    
                    {/* <div className='mb-3 col-12 '>
                        <div className='p-3 p-sm-5 gradient1 radius shadow'>
                            <div className='pl-1 title3'>
                                Dernièrs bars visités
                            </div>
                            <div className='row'>
                                {user.lastBars.slice(user.lastBars.length-(user.lastBars.length - 4 >= 1  ? 4 : 0), user.lastBars.length).map((barIndex, i)=>{
                                    const {shopNameListReducer} = props
                                    let lastBar = shopNameListReducer[barIndex]
                                    return <LastBars key={i} lastBar={lastBar} />
                                })}
                            </div>
                        </div>
                    </div> */}
                    
                </div>
                </div>
        )
    })
  return (
      <div className='dash-personnal'>
            {userPresentation}
        </div>
  )
}

const mapStateToProps = (state) => {
    return {
        beerList : state.beerList,
        shopNameListReducer : state.shopNameListReducer,
    }
}

export default connect(mapStateToProps) (PersonnalBar);
