import React from 'react'

import {Switch, Link } from 'react-router-dom'

import { TweenMax, TimelineLite, Back, CSSPlugin, Power4 } from "gsap/TweenMax";
import { TimelineMax } from "gsap/all"; 

const HeaderBackground = (props) => {

  const { title, logo, imgBckg} = props
  
  var tlTitle = new TimelineMax({paused: true})

  
  setTimeout(()=>{
    tlTitle
      .fromTo(".dash-header .bckg-main", 0.3, {opacity: "0", scale : "1.1"},{opacity: "1", scale : "1"})
      .fromTo(".dash-header .beerName .title1", 0.3, {opacity: "0", x : "30px"},{opacity: "1", x : "0px"})
      .fromTo(".dash-header .beerName .title3", 0.3, {opacity: "0", x : "30px"},{opacity: "1", x : "0px"})
  },10)
  

  

  var tlBckg = new TimelineMax({paused: true})
    .fromTo(".dash-header .bckg-before", 0.3, {opacity: "1"},{opacity: "0" })

  

  if(title){
    setTimeout(()=>{
      tlTitle.play();
      tlBckg.play();
      console.log('ANIMATION EXPECTED', )
    },10) 
  }else{
    tlTitle.reverse();
    tlBckg.reverse();
  }

 


  const headerWall = () => {
      return "/img/material/corona_beer.jpeg"
  }

  //console.log('img BCKG FROM HEADER',  imgBckg)

  const headerWallBeerSelected = () => {
    if(imgBckg !== true){
      return imgBckg
      //console.log('img BCKG FROM HEADER',  imgBckg)
    }
  }
  




  return (
    <div  className='dash-header row'>
      <div className='dash-catch-phrase z3 col-12 align-self-center'>
      <Link to="/dashboard"> <button style={{position: "fixed", zIndex : "999"}}>CLICK BACK</button> </Link>
        {/* Si nous sommes dans la page d'une bière */}
        {title && (
          <div className='row'>
          <div className='container'>
           {/* PARTIE DE LA MARQUE ET NOM */}
            <div className='col-sm-9 offset-sm-3'>
                <div className='beerName'>
                    <div className='z1 title1 opa0'>
                        {title[0]}
                    </div>
                    <div className='z1 title3 opa0'>
                        {title[1]}
                    </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Si nous sommes dsur le dashboard */}
        {logo && (<div className='logo col-3 m-auto'>
            <img className='img' src="./img/logo.png"/>
        </div>)}
      </div>
      <div style={{backgroundImage: 'url(' + headerWall() + ')'}} className='bckg-before z0'></div>
      <div style={{backgroundImage: 'url(' + headerWallBeerSelected() + ')'}} className='bckg-main z0'></div>
      <div className='bckg-after z0'></div>
    </div>
  )
}

export default HeaderBackground
