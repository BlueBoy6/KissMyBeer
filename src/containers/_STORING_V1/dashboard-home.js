import React, { Component } from 'react'
import {connect} from "react-redux"
import {bindActionCreators} from "redux"

import {consultBeerList, consultBeerBrands, consultShopList, dashboardMenu} from "../actions"

import SectionDashboard from '../components/section'
import PersonnalBar from '../components/dumbComponent/PersonnalBar'
import SearchBar from '../components/SearchBar'
import ResultSearch from '../components/ResultSearch'

import { Link } from 'react-router-dom'

import { TweenMax, TimelineLite, Back, CSSPlugin, Power4 } from "gsap/TweenMax";
import { TimelineMax } from "gsap/all"; 

class DashboardHome extends Component {
    

    componentWillMount() {
        this.props.consultBeerList(),
        this.props.consultBeerBrands(), 
        this.props.consultShopList()
    }


    render() {

        var tl = new TimelineMax({paused : true});
        // tl
        // .from(".dash-header", 0.4, {opacity : "0"})
        // .from(".dash-header .logo ", 0.4, {scale : 2,  ease: Back.easeOut.config(1.7)})
        // .from(".dash-header", 0.7, {height : "100vh"}, 1.4)
        // .staggerFrom(".container>div", 0.4, {opacity : "0", y: "-20px"}, 0.1);
        var beerFakeId = 3

        return (
            <div className='customContainer '>
                <div className='dash-requests z3 m-neg-mid'>
                    <SectionDashboard/>
                </div>
                <SearchBar />
                {this.props.beerSearchOneReducer.length > 0 && <ResultSearch /> }
                <PersonnalBar datas={this.props.userDatas}/>
                <div className='row'>
                    <div className='p-5'>
                    
                    </div>
                </div>
                
                
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({consultBeerList, consultBeerBrands,consultShopList, dashboardMenu}, dispatch),
});

const mapStateToProps = (state) => {
    return {
        beerList : state.beerList,
        beerBrandsList : state.beerBrandsList,
        shopList : state.shopList,
        userDatas : state.userDatas,
        menuDashboard : state.menuDashboard,
        beerSearchOneReducer : state.beerSearchOneReducer
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DashboardHome)