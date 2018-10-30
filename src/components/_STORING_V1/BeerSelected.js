import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {UserDatas, beerSelected, consultShopInfo} from "../actions"
import "../style/beer-selected.css"

import LastBars from "./dumbComponent/LastBars"

import { TweenMax, TimelineLite, Back, CSSPlugin, Power4 } from "gsap/TweenMax";
import { TimelineMax } from "gsap/all"; 

class BeerSelected extends Component {

    componentWillMount(){
        
        //DATA ENVOYE PAR LE PARENT
        this.props.beerSelected(Number(this.props.beerInfo))


        setTimeout(()=>{
            const {lieux} = this.props.beerSelectedReducer;
            this.props.consultShopInfo(lieux)
        },1)

        setTimeout(()=>{
            var tlTitle = new TimelineMax({paused: true})
            .fromTo(".img-beer", 0.7, { transformOrigin : "0% 50%", opacity: "0", x: "50%", z: "-40px", rotationY : "90deg"},{transformOrigin : "0% 50%", opacity: "1",x: "0%", z: "-40px", rotationY : "0deg"})
            tlTitle.play();
        },1)

            
    }


  render() {



    const {
        brand,
        name,
        categorie,
        country,
        alcool, 
        countryId,
        compagnie,
        img, 
        imgBckg} = this.props.beerSelectedReducer

    // DATA BIEN RECU DE LA PART DU REDUCER
    const {shopInfoReducer} = this.props
    var brandName = name+" "+brand;




    return (
        <div className='beerPage customContainer'>
            <div className='row'>

                <div className='col-sm-3 beer-img-present perspective'>
                    <img src={img} className="img img-beer opa0"/>
                </div>

                 <div className='col-sm-9'>
                    <div className='row my-3 beer-description'>

                        {/* PARTIE DU PAYS */}
                        <div className='country-beer overflowH p-3 mx-2 vignet radius'>
                            <div className='bckg-before gradient2 z0'></div>
                            <div className='z2 posrel fullH text-center compagnie-title title3'>
                                <img className="imgH" src={`https://www.countryflags.io/${countryId}/flat/64.png`} /> 
                                <span className="pl-2 nameCountry">{country}</span>
                            </div>
                        </div>

                        {/* PARTIE DE LA CATEGORIE DE LA BIERE */}
                        <div className='category-beer overflowH p-3 mx-2 vignet radius '>
                            <div className='bckg-before gradient2 z0'></div>
                            <div className='z2 posrel fullH text-center compagnie-title title3'>
                                <img className="imgH" src={`/img/icons/${categorie}-beer-ico.png`} /> 
                                <span className="pl-2 nameCategorie">{categorie}</span>
                            </div>
                        </div>

                        {/* PARTIE DU POURCENTAGE ALCOOL DE LA BIERE */}
                        <div className='category-beer overflowH p-3 mx-2 vignet radius '>
                            <div className='bckg-before gradient2 z0'></div>
                            <div className='z2 posrel fullH text-center compagnie-title title3'>
                                <span className="pl-2 nameCategorie">{alcool}% d'alcool</span>
                            </div>
                        </div>

                    </div>
                    <div className='row my-3 compagnie-recomended'>

                        <div className=' col-12'>

                            <div className='row'>
                                <div className='col-12 p-2'>
                                    <div className='title3'>
                                        La compagnie recommandée :
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                {compagnie && compagnie.map((compagnie, i)=>{
                                    return (
                                        <div key={i} className='col-4 px-2'>
                                            <div className='overflowH p-3 vignet radius'>
                                                <div className='bckg-before gradient3 z0'></div>
                                                <div className='bckg-after texture1 z1'></div>
                                                <div className='z2 text-center compagnie-title title3'>
                                                    {compagnie}
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>

                        </div>
                    </div>{/* End compagnie recommandé row */}
                </div>{/* End col-9 right */}

            </div>


            {/* On sort de la partie présentation général */}
            <div className='row my-3 radius gradient2 p-3'>
                <div className='col-12'>

                    <div className='row'>
                        <div className='col-12 p-2'>
                            <div className='title3'>
                                Vous avez consommé cette bière dans ces bars :
                            </div>
                        </div>
                    </div>

                    <div className='row'>
                        {shopInfoReducer && shopInfoReducer.map((lastShop,i)=>{
                            return <LastBars key={i} lastBar={lastShop[0]} />
                        })}
                    </div>
                </div>
            </div> 
        </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({UserDatas, consultShopInfo, beerSelected}, dispatch),
});

const mapStateToProps = (state) => {
    return {
        userDatas : state.userDatas,
        beerSelectedReducer : state.beerSelectedReducer,
        shopList : state.shopList,
        shopInfoReducer : state.shopInfoReducer
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (BeerSelected);