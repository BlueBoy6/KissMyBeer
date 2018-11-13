import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {Link } from 'react-router-dom'
import {UserDatas, beerSelected, shopListByFilterId, consultShopNameList} from "../actions"
import "../style/beer-selected.css"

import LastBars from "./dumbComponent/LastBars"
import HeaderBackground from './dumbComponent/HeaderBackground'

import SearchSelection from './SearchSelection'
import LastVignetsPart from './LastVignetsPart'

import { TweenMax, TimelineLite, Back, CSSPlugin, Power4 } from "gsap/TweenMax";
import { TimelineMax } from "gsap/all"; 

class BeerSelected extends Component {

    constructor(props){
        super(props)
        this.state = {
            addShop : false,
            loaded :false
        }
    }

    componentWillMount(){
        
        let urlID = this.props.match.params.id
        //DATA ENVOYE PAR L'URL'
        this.props.beerSelected(Number(urlID))

        setTimeout(()=>{
            const {lieux} = this.props.beerSelectedReducer;
            this.props.shopListByFilterId(lieux)
        },1)

        setTimeout(()=>{

            var tlTitle = new TimelineMax({paused: true})
            
            var winWidth = window.innerWidth;
            if(winWidth > 800){
                tlTitle
                    .fromTo(".img-beer", 0.7, { transformOrigin : "0% 50%", opacity: "0", x: "50%", z: "-40px", rotationY : "90deg"},{transformOrigin : "0% 50%", opacity: "1",x: "0%", z: "0px", rotationY : "0deg"})
                    .staggerFrom(".beer-description .vignet", 0.3, {scale : "0.8" , opacity: "0"},"0.1")
                    .staggerFrom("compagnie-recomended>.col-12>.row>.col-4 .vignet", 0.3, {scale : "0.8" , opacity: "0"},"0.1")
                tlTitle.play();
            }else if(winWidth < 799){
                tlTitle
                    .fromTo(".img-beer", 0.7, { transformOrigin : "50% 0%", opacity: "0", x: "-50%", z: "-40px", rotationY : "-90deg"},{transformOrigin : "50% 50%", opacity: "1",x: "0%", scale : "0.9", y: '30px', z: "-40px", rotationY : "0deg"})
                    .staggerFrom(".beer-description>.vignet", 0.3, {scale : "0.8" , opacity: "0"})
                tlTitle.play();
            }
        },1)

    }

    addShop = (e) => {
        const {addShop} = this.state
        document.querySelectorAll('.btnD.disactive').forEach((btn)=>{
            btn.classList.remove("disactive")
            btn.classList.add("active")
            console.log('===========BTN=========')
            console.log(btn)
        })

        this.props.consultShopNameList()
    }
    ShopSelected = (d) => {
        console.log('==========databack==========')
        console.log(d)
    }

  render() {
    if(!this.state.loaded){
        window.scrollTo(0,0)
        this.setState({ loaded : true })
    }
    

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
    const {shopInfoReducer, shopNameListReducer} = this.props
    var shopNameListComplete = this.props.Reducer
    var brandName = name+" "+brand;
    console.log('====================')
    console.log(shopInfoReducer)



    return (
        <div className='dashboard container-fluid'>
            <HeaderBackground 
                title={[brand,name]}
                logo={false}
                fullHeight={true}
                textCentered={true}
                titleSize="1" 
                imgBckg={imgBckg} 
            />
            <div className='beerPage customContainer'>
                <div className='row'>

                    <div className='col-12 col-sm-3 beer-img-present perspective'>
                        <img src={img} className="img img-beer opa0"/>
                    </div>

                    <div className='col-12 col-sm-9'>
                        <div className='row my-3 beer-description'>

                            {/* PARTIE DU PAYS */}
                            <div className='country-beer col-4 vignet align-items-center'>
                                <div className='z2 posrel gradient3 py-3 shadow fullH text-center compagnie-title title3 radius'>
                                    <img className="imgH picto-vignet" src={`https://www.countryflags.io/${countryId}/flat/64.png`} /> 
                                    <div className="nameCountry">{country}</div>
                                </div>
                            </div>

                            {/* PARTIE DE LA CATEGORIE DE LA BIERE */}
                            <div className='category-beer col-4 vignet align-items-center'>
                                <div className='z2 posrel gradient3 py-3 shadow fullH text-center compagnie-title title3 radius'>
                                    <img className="imgH picto-vignet" src={`/img/icons/${categorie}-beer-ico.png`} /> 
                                    <div className="nameCategorie">{categorie}</div>
                                </div>
                            </div>

                            {/* PARTIE DU POURCENTAGE ALCOOL DE LA BIERE */}
                            <div className='category-beer col-4 vignet  align-items-center'>
                                <div className='z2 posrel gradient3 py-3 shadow fullH text-center compagnie-title title3 radius'>
                                    <img className="imgH picto-vignet" src={`/img/icons/percent-ico.png`} /> 
                                    <div className=" nameCategorie">{alcool}%</div>
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

                                <div className='row company'>
                                    {compagnie && compagnie.map((compagnie, i)=>{
                                        return (
                                            <div key={i} className='col-4 vignet '>
                                                <div className='textwhiteshadow text-center gradient3 radius shadow py-3 title3'>
                                                    {compagnie}
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
                {/* <LastVignetsPart title="Vous avez testé cette bière" datas={shopInfoReducer} addItem={false} />  */}

                <div className='row my-3 radius gradient2 p-3'>
                    <div className='col-12 perspective'>
                        <div className='title3 mb-3'>
                            Vous avez consommé cette bière dans ces bars :
                        </div>
                        <div className='row mb-3'>
                            {shopInfoReducer && shopInfoReducer.map((lastShop,i)=>{
                                return <LastBars key={i} lastBar={lastShop[0]} />
                            })}
                        </div>

                        <div className='row'>
                            <div className='col-12 col-sm-3'>
                                <button onClick={(e)=>{this.addShop(e)}} className="btn pointer-action btn-block py-3 bckgcolor1 btn-lg shadow sameH100">
                                    <img className="icon-add" src="/img/icons/plus-ico.png"/>
                                </button>
                            </div>
                            <div className='col-12 col-sm-7 btnD disactive'>
                                <SearchSelection 
                                    dataBack={this.ShopSelected.bind(this)}
                                    index="1" 
                                    className="shadow z3" 
                                    placeholder="Dans quel bar avez-vous consommé cette bière"
                                    addition={false} 
                                    options={this.props.shopNameListReducer}
                                />
                            </div>
                            <div className='col-12 col-sm-2 btnD disactive'>
                                <button onClick={(e)=>{}} className="btn pointer-action btn-block py-3 bckgcolor1 btn-lg shadow sameH100">
                                    <div className='title3'>
                                        Ajouter !
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div> 

                <div className='row mb-3'>
                    <div className='col p-0 justify-content-center mx-auto'>
                        <Link to='/'>
                            <button type="submit" className="btn btn-block py-3 bckgcolor1 btn-lg shadow">Revenir à l'accueil</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({UserDatas, 
        shopListByFilterId, 
        beerSelected, 
        consultShopNameList}, dispatch),
});

const mapStateToProps = (state) => {
    return {
        userDatas : state.userDatas,
        beerSelectedReducer : state.beerSelectedReducer,
        shopList : state.shopList,
        shopInfoReducer : state.shopInfoReducer,
        shopNameListReducer : state.shopNameListReducer
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (BeerSelected);