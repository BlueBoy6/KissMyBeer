import React, { Component } from 'react';
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {Link } from 'react-router-dom'
import {
    UserDatas, 
    consultBeerList,
    consultBeerBrands,
    consultShopNameList,
    beerSearchOne
} from "../actions"

import MapOSM from '../components/MapOSM'
import HeaderBackground from '../components/dumbComponent/HeaderBackground'
import SectionDashboard from '../components/section'
import PersonnalBar from '../components/dumbComponent/PersonnalBar'
import SearchBar from '../components/SearchBar'
import SearchSelection from '../components/SearchSelection'
import LastVignetsPart from '../components/LastVignetsPart'


import ResultSearch from '../components/ResultSearch'


class Dashboard extends Component {    
    constructor(props){
        super(props)
        this.state = {
            loaded: false,
            fromDashboard : false,
            categoryToSearch : false,
            beerBrandData : [],
            userGeoPositionX: false, 
            userGeoPositionY:false, 
            userGeoPositionAccuracy:false

        }
    }
    componentWillMount() {
        this.props.UserDatas(0)
        this.props.consultBeerList(),
        this.props.consultShopNameList(),
        this.props.consultBeerBrands()
    }

    sectionSelectedDashBoard(menuSelected){
        switch(menuSelected){
            case "beer" : return this.setState({ categoryToSearch : "beer" }) ;
            case "shop" : return this.setState({ categoryToSearch : "shop" }) ;
            case false : return this.setState({ categoryToSearch : false }) ;
        }
    }
    BeerSearchDataBack(data){
        if(data){
            this.props.beerSearchOne(data)
        }
    }
    resultSearch(){
        if(this.props.beerSearchOneReducer.length > 0){
            return <ResultSearch />
        }
    }


    purposeBySearch(){
        switch(this.state.categoryToSearch){
            case "beer" : return(
                <div className=''>
                    beer Attention
                </div>
            )
            case "shop" : return(
                <div className=''>
                    shop Attention
                </div>
            )
        }
    }

    geoloc(){
        var options = {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        };
        var geoSend = false;
        var geoX, geoY, geoAccuary;
          
        var success = (pos) => {
            if(pos.coords.latitude !== this.state.userGeoPositionX || pos.coords.longitude !== this.state.userGeoPositionY){
                this.setState({userGeoPositionX: pos.coords.latitude })
                this.setState({userGeoPositionY: pos.coords.longitude })
                this.setState({userGeoPositionAccuracy: pos.coords.accuracy })           
            }
        };
        
        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        };  

        switch(this.state.categoryToSearch){
            case "shop" : return navigator.geolocation.getCurrentPosition(success, error, options);
        }
    }

    render() {
        if(!this.state.loaded){
            window.scrollTo(0,0)
            this.setState({ loaded : true })
        }


        console.log('========positionX============')
        console.log(this.state.userGeoPositionX)

            

        return (
            
            <div className='dashboard container-fluid'>
                <HeaderBackground 
                    title=""
                    logo={true} 
                    imgBckg={false} 
                />
                <div className='customContainer '>
                    <div className='dash-requests z3 m-neg-mid pb-3'>
                        <SectionDashboard menuSelectedDataBack={this.sectionSelectedDashBoard.bind(this)}/>
                    </div>

                    {this.purposeBySearch()}
                    la :{this.geoloc()} {this.state.userGeoPositionX && this.state.categoryToSearch === "shop" ? this.state.userGeoPositionX : false}
                    <MapOSM/>
                    
                    {this.state.categoryToSearch === "beer" && <SearchSelection 
                        dataBack={this.BeerSearchDataBack.bind(this)}
                        index="3" 
                        className="mb-3 shadow" 
                        placeholder="Décapsuler votre recherche !"
                        addition={false} 
                        options={this.props.beerBrandsList}
                    /> }



                    {this.state.categoryToSearch === "beer" ? this.resultSearch() : this.props.beerSearchOne(false) }
                    <div className="add-buttons-container row mb-3">
                        <div className='col-6 perspective'>
                            <Link to={`/addBeer/`}>
                            <button className='btn btn-lg px-0 py-4 btn-block bckgcolor1 title3'>Ajouter une bière</button>
                            </Link>
                        </div>
                        <div className='col-6 perspective'>
                            <Link to={`/addShop/`}>
                            <button className='btn btn-lg px-0 py-4 btn-block bckgcolor1 title3'>Ajouter un lieux</button>
                            </Link>
                        </div>
                    </div>
                    <LastVignetsPart addButton={true} title="Derniers bars visités" datas={this.props.userDatasReducer.lastShops}/> 
                    <LastVignetsPart title="Dernières bièrres testées" datas={this.props.userDatasReducer.lastBeers}/> 
                </div>
                
            </div>
        )
        
    }

}


const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({
        UserDatas, 
        consultBeerList,
        consultBeerBrands, 
        consultShopNameList,
        beerSearchOne
    }, dispatch),
});

const mapStateToProps = (state) => {
    return {
        userDatasReducer : state.userDatasReducer,
        beerList : state.beerList,
        beerBrandsList : state.beerBrandsList,
        shopNameListReducer : state.shopNameListReducer,
        menuDashboard : state.menuDashboard,
        beerSearchOneReducer : state.beerSearchOneReducer
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Dashboard);