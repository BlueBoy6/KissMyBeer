import React from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {beerSelected} from "../../actions"

import {Link } from 'react-router-dom'
import {redirect} from '../functions-general'

const LastBeers = (props) => {

    const {lastBeer} = props


    function redirect(id){beerSelected(id)}

    return (
        <div key={lastBeer.id} className='col-3 p-1 perspective'>
            <Link to={`/beer/${lastBeer.id}`}>
                <div
                onClick={()=>redirect(lastBeer.id)}
                style={{backgroundImage: 'url(' + lastBeer.img + ')'}}
                className='lastBeer subtit radius pointer-action py-md-5 shadow my-1 text-center bckgw'>
                    <div className='name subtit z3'>
                        {lastBeer.brand}
                    </div>
                    <div className='bckg-after'></div>
                </div>
            </Link>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({beerSelected}, dispatch),
});

export default connect(mapDispatchToProps) (LastBeers)

