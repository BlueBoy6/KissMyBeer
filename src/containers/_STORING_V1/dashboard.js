import React, { Component } from 'react';
import {connect} from "react-redux"
import {bindActionCreators} from "redux"
import {UserDatas, beerSelected,shopSelected} from "../actions"
import HeaderBackground from '../components/dumbComponent/HeaderBackground'
import DashboardHome from './dashboard-home'
import BeerSelected from '../components/BeerSelected'
import ShopSelected from '../components/ShopSelected'


class Dashboard extends Component {    
    constructor(props){
        super(props)
        this.state = {
            fromDashboard : false
        }
    }
    componentWillMount() {
        let urlID = this.props.match.params.id
        let urlCategory = this.props.match.params.cat
        this.props.UserDatas()
        if(urlID !== undefined){
            switch(urlCategory){
                case "beer" : return this.props.beerSelected(urlID);
                case "shop" : return this.props.shopSelected(urlID);
            }
            
        }
        
    }


    dashboardOrBeer(cat, id){
        if(cat !== undefined && id !== undefined){
            return true
        }else{
            return false
        }
        
    }


    render() {
    
        const { beerSelectedReducer, shopSelectedReducer } = this.props;

        let urlID = this.props.match.params.id
        let urlCategory = this.props.match.params.cat

        if(shopSelectedReducer.adress){
            var shopAdress = shopSelectedReducer.adress.ville;
            var shopName = shopSelectedReducer.name;
        }

        const myHeader = (cat, id) => {
            var titleHeader = () => {
                if(cat){
                    switch(cat){
                        case "beer" : return [beerSelectedReducer.brand, beerSelectedReducer.name];
                        case "shop" : return [shopName, shopAdress];
                    }
                }else{
                    return false
                }
            };
            var logoHeader = () => {
                if(cat !== undefined && id !== undefined){
                    return false
                }else{
                    return true
                }
            };
            var imgBckg = () => {
                if(cat !== undefined){
                    switch(cat){
                        case "beer" : return beerSelectedReducer.imgBckg;
                        case "shop" : return shopSelectedReducer.img;
                    }
                }else{
                    return false
                }
            } ;

            return (
                <HeaderBackground 
                    title={titleHeader() }
                    logo={logoHeader()} 
                    imgBckg={imgBckg() } 
                />
            )
        }

        const dashboardOrSelected = () => {
            if(urlID !== undefined && urlCategory == "beer"){
                return <BeerSelected beerInfo={urlID} />
            }else if(urlID !== undefined && urlCategory == "shop"){
                return <ShopSelected shopInfo={urlID} />
            }else{
                return <DashboardHome /> 
            }
        }

        return (
            <div className='dashboard container-fluid'>
                {myHeader(urlCategory, urlID)}

                {dashboardOrSelected()}
                
            </div>
        )
        
    }

}


const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({UserDatas, beerSelected, shopSelected}, dispatch),
});

const mapStateToProps = (state) => {
    return {
        userDatas : state.userDatas,
        shopSelectedReducer : state.shopSelectedReducer,
        beerSelectedReducer : state.beerSelectedReducer
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Dashboard);