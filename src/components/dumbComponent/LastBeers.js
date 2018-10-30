import React from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {beerSelected} from "../../actions"

import {Link } from 'react-router-dom'

const LastBeers = (props) => {

    const {lastBeer} = props

    return (
        <div key={lastBeer.id} className='col-6 col-sm-3 perspective'>
            <Link to={`/beer/${lastBeer.id}`}>
                <div
                style={{backgroundImage: 'url(' + lastBeer.img + ')'}}
                className='lastBeer subtit radius pointer-action py-4 py-md-5 shadow my-1 text-center bckgw'>
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

