import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {UserDatas,beerSelected, shopSelected, consultShopInfo, lastBeersTried} from "../actions"
import "../style/shop-selected.css"

import LastBars from "./dumbComponent/LastBars"
import LastBeers from "./dumbComponent/LastBeers"

import { TweenMax, TimelineLite, Back, CSSPlugin, Power4 } from "gsap/TweenMax";
import { TimelineMax } from "gsap/all"; 

class ShopSelected extends Component {

    componentWillMount(){

        //DATA ENVOYE PAR LE PARENT
        this.props.shopSelected(Number(this.props.shopInfo));

        console.log('==========SHOPINFO==========')
        console.log(this.props.shopInfo)
        
        setTimeout(()=>{
            const {lastBeersTried} = this.props.shopSelectedReducer;
            this.props.lastBeersTried(lastBeersTried)
            console.log('==========lastBeersTried==========')
            console.log(this.props.shopSelectedReducer.name)
        },1)

        setTimeout(()=>{
            var tlTitle = new TimelineMax({paused: true})
            .fromTo(".img-beer", 0.7, { transformOrigin : "0% 50%", opacity: "0", x: "50%", z: "-40px", rotationY : "90deg"},{transformOrigin : "0% 50%", opacity: "1",x: "0%", z: "-40px", rotationY : "0deg"})
            tlTitle.play();
        },1)
    }

  render() {

    const shopName = this.props.shopSelectedReducer.name;
    const shopAdress = this.props.shopSelectedReducer.adress;
    const shopAdressLastBeers = this.props.shopSelectedReducer.lastBeersTried;

    const shopAdressApp = () =>{
        console.log('========shopAdress============')
        console.log(shopAdress.street+", "+shopAdress.ville)
        return shopAdress.street+", "+shopAdress.ville
    }
    
    return (
        <div className='shopPage customContainer'>
            <div className='row  m-neg-mid-static'>
                <div className='col-12'>
                    <div className='country-beer overflowH p-3 mx-2 vignet radius gradient2'>
                        <div className='z2 posrel fullH text-center compagnie-title title3'>
                            <img className="imgH" src={`/img/icons/map-ico.png`} /> 
                            <span className="pl-2">{shopAdressApp()}</span>
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
                            console.log('====================');
                            console.log('raw',Beer );
                            return <LastBeers key={i} lastBeer={Beer}/>
                        })}
                    </div>
                </div>
            </div>
        </div>

    )
  }
}


const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({UserDatas, consultShopInfo, shopSelected, beerSelected, lastBeersTried}, dispatch),
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