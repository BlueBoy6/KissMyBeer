import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {Link } from 'react-router-dom'
import {UserDatas,beerSelected, shopSelected, shopListByFilterId, lastBeersTried} from "../actions"
import "../style/shop-selected.css"

import LastBars from "./dumbComponent/LastBars"
import LastBeers from "./dumbComponent/LastBeers"
import HeaderBackground from './dumbComponent/HeaderBackground'


import { TweenMax, TimelineLite, Back, CSSPlugin, Power4 } from "gsap/TweenMax";
import { TimelineMax } from "gsap/all"; 

class ShopSelected extends Component {

    componentWillMount(){

        let urlID = this.props.match.params.id

        //DATA ENVOYE PAR LE PARENT
        this.props.shopSelected(Number(urlID));
        
        setTimeout(()=>{
            const {lastBeersTried} = this.props.shopSelectedReducer;
            this.props.lastBeersTried(lastBeersTried)
        },1)

        setTimeout(()=>{
            var tlTitle = new TimelineMax({paused: true})
            .fromTo(".img-beer", 0.7, { transformOrigin : "0% 50%", opacity: "0", x: "50%", z: "-40px", rotationY : "90deg"},{transformOrigin : "0% 50%", opacity: "1",x: "0%", z: "-40px", rotationY : "0deg"})
            tlTitle.play();
        },1)
    }

  render() {
    window.scrollTo(0,0)

    const shopName = this.props.shopSelectedReducer.name;
    const shopAdress = this.props.shopSelectedReducer.street;
    const shopCity = this.props.shopSelectedReducer.ville;
    const shopImg = this.props.shopSelectedReducer.img;
    const shopAdressLastBeers = this.props.shopSelectedReducer.lastBeersTried;

    const header = () => {
        return <HeaderBackground 
            title={[shopName, shopCity]}
            logo={false} 
            imgBckg={shopImg} 
        />
    }
    
    return (
        <div className='dashboard container-fluid'>
            {header()}
            <div className='shopPage customContainer'>
                <div className='row  m-neg-mid-static'>
                    <div className='col-12'>
                        <div className='country-beer overflowH p-3 mx-2 vignet radius gradient2'>
                            <div className='z2 posrel fullH text-center compagnie-title title3'>
                                <img className="imgH" src={`/img/icons/map-ico.png`} /> 
                                <span className="pl-2">{shopAdress}, {shopCity}</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* On sort de la partie présentation général */}
                <div className='row my-3 radius gradient2 p-3'>
                    <div className='col-12'>

                        <div className='row'>
                            <div className='col-12 p-2'>
                                <div className='title3'>
                                    Vous y avez essayé:
                                </div>
                            </div>
                        </div>

                        <div className='row'>
                            {this.props.lastBeersTriedReducer.map((Beer, i)=>{
                                return <LastBeers key={i} lastBeer={Beer}/>
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <div className='row mb-3'>
                <div className='col justify-content-center mx-auto'>
                    <Link to='/'>
                        <button type="submit" className="btn btn-block gradient2-action btn-lg shadow">Revenir à l'accueil</button>
                    </Link>
                </div>
            </div>
        </div>

    )
  }
}


const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({UserDatas, shopListByFilterId, shopSelected, beerSelected, lastBeersTried}, dispatch),
});

const mapStateToProps = (state) => {
    return {
        userDatas : state.userDatas,
        shopSelectedReducer : state.shopSelectedReducer,
        shopInfoReducer : state.shopInfoReducer,
        lastBeersTriedReducer : state.lastBeersTriedReducer
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (ShopSelected);