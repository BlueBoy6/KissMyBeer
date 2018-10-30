import React, { Component } from 'react'

import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {Link } from 'react-router-dom'
import {boucleDiv} from './functions-general'

import {consultBeerList, consultBeerBrands, consultShopList, dashboardMenu,beerSelected} from "../actions"



class ResultSearch extends Component {

    constructor(props){
        super(props)
        this.state = {
            beerClicked: false,
            idBeerToRedirect : null
        }
    }


    redirect(id){
        this.props.beerSelected(id)   
    }
    
    

    renderResults(){
        const {beerSearchOneReducer} = this.props
        
        return(
                <div className='row radius'>
                        {beerSearchOneReducer ? beerSearchOneReducer.map((beerResult, i)=>{
                            if(beerResult.imgtype === "png")
                            return(
                                <div key={i} className='result py-2 px-2 col-md-4 ' >
                                    <Link to={`/beer/${beerResult.id}`}>
                                        <div onClick={()=>this.redirect(beerResult.id)} className="p-5 gradient2 radius shadow"> 
                                            <div className='row'>
                                            <div className='col-md-12'>
                                                <div className='img-container '>
                                                    <img className="img effect" src="./img/material/water.png"/>
                                                    <img className="img beer" src={beerResult.img}/>
                                                </div>
                                                <div className='description col-12'>
                                                    <div className='brand text-center title2'>
                                                        {boucleDiv('shadowedWord z0', beerResult.brand, 4)}
                                                        <div className='z1'>
                                                            {beerResult.brand}
                                                        </div>
                                                    </div>
                                                    <div className='name text-center title3'>
                                                        {boucleDiv('shadowedWord z0', beerResult.name, 4)}
                                                        <div className='z1'>
                                                            {beerResult.name}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }) : ()=>{
                            return (
                                <div>Désolé nous n'avons rien trouvé en rapport avec votre recherche..</div>
                            )
                        }
                    }
                </div>
        )
    }

    render() {
        
    return (
        <div className='dash-results'>
            {this.renderResults()}
        </div>
        
    )
    }

    
}



const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({consultBeerList, 
        consultBeerBrands, 
        consultShopList, 
        dashboardMenu,
        beerSelected
    }, dispatch),
});

const mapStateToProps = (state) => {
    return {
        beerList : state.beerList,
        beerBrandsList : state.beerBrandsList,
        shopList : state.shopList,
        menuDashboard : state.menuDashboard,
        beerSearchOneReducer : state.beerSearchOneReducer
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (ResultSearch)