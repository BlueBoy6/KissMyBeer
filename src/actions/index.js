import {BEER, SHOP, ACCOUNT, DASHBOARD, COUNTRY} from "./action-types"

import axios from 'axios'

import beerList from '../datas/beerbdd/beer'
import lieux from '../datas/beerbdd/lieux'
import user from '../datas/user/user'
import category from '../datas/beerbdd/categorie'
import company from '../datas/beerbdd/compagnie'
import sectionsOfMenuDashBoard from '../datas/sections/sections-dashboard'


export function consultBeerBrands(){
    return function(dispatch){
        var beersBrandList = [];
        beerList.map((beer) => {
            beersBrandList.includes(beer.brand) ? false : beersBrandList.push(beer.brand);
        })
        dispatch({
            type : BEER.BRANDS,
            payload : beersBrandList
        })
    }
}
export function consultBrandModels(brand){
    return function(dispatch){
        var beersBrandModels = []
        var beersBrand = beerList.filter(beer => beer.brand === brand)
        beersBrand.map(beer => beersBrandModels.push(beer.name))
        dispatch({
            type : BEER.MODELS_OF_BRAND,
            payload : beersBrandModels
        })
    }
}
export function companyList(){
    return function(dispatch){
        var companyList = []
        company.map(company => companyList.push(company.name))
        dispatch({
            type : BEER.COMPANY,
            payload : companyList
        })
    }
}
export function categoryList(){
    return function(dispatch){
        var companyList = []
        category.map(category => companyList.push(category.name))
        dispatch({
            type : BEER.CATEGORY,
            payload : companyList
        })
    }
}
export function consultBeerList(){
    return function(dispatch){
        const beers = beerList;
        dispatch({
            type : BEER.LIST,
            payload : beers
        })
    }
}
export function beerSearchOne(userSearch){
    return function(dispatch){
        const beers = beerList
        const searchBrand = beers.filter(beer => beer.brand === userSearch)
        if(searchBrand.length !== 0){
            dispatch({
                type : BEER.SEARCH_ONE,
                payload : searchBrand
            })
        }else{
            const searchName = beers.filter(beer => beer.name  === userSearch)
            if(searchName.length !== 0){
                dispatch({
                    type : BEER.SEARCH_ONE,
                    payload : searchName
                })
            }else{
                dispatch({
                    type : BEER.SEARCH_ONE,
                    payload : false
                })
            }
        }
    }
}

////////////////////////////////// SHOPS 

export function consultShopNameList(){
    return function(dispatch){
        var names = [];
        lieux.map((shop)=>{
            names.push(shop.name)
        })
        dispatch({
            type : SHOP.NAME,
            payload : names
        })
    }
}
export function shopSelected(id){
    return function(dispatch){
        dispatch({
            type : SHOP.SELECTION,
            payload : lieux[id]
        });
        dispatch({
            type : BEER.SELECTED,
            payload : []
        })
    }
}
export function shopListByFilterId(tabShops){
    return function(dispatch){
        if(tabShops){
            var shopsFinded = tabShops.map((indexShop)=>{
                return lieux.filter( shop => shop.id === indexShop)
            })
            dispatch({
                type : SHOP.INFO,
                payload : shopsFinded
            })
        }else{
            dispatch({
                type : SHOP.INFO,
                payload : false
            })
        }
    }
}

////////////////////////////////// USER ACTIONS
export function UserDatas(id){
    return function(dispatch){
        var lastShops = []
        var favShops = []
        var lastBeers = []
        var favBeers = []

        var lastShopsFiltered = user[id].lastBars.map((indexShop)=>{
            return lieux.filter( shop => shop.id === indexShop)
        })
        lastShopsFiltered.flat().map((shop)=>{
            lastShops.push({
                title : shop.name,
                subtitle : shop.city,
                img : shop.img,
                link : `/${shop.urlCategory}/${shop.id}`
            })
        })

        var favShopsFiltered = user[id].favBars.map((indexShop)=>{
            return lieux.filter( shop => shop.id === indexShop)
        })
        favShopsFiltered.flat().map((shop)=>{
            favShops.push({
                title : shop.name,
                subtitle : shop.city,
                img : shop.img,
                link : `/${shop.urlCategory}/${shop.id}`
            })
        })
        

        var lastBeersFiltered = user[id].lastBeers.map((indexBeer)=>{
            return beerList.filter( beer => beer.id === indexBeer)
        })
        lastBeersFiltered.flat().map((beer)=>{
            lastBeers.push({
                title : beer.brand,
                subtitle : beer.name,
                img : beer.img,
                link : `/${beer.urlCategory}/${beer.id}`
            })
        })

        var favBeersFiltered = user[id].favBeers.map((indexShop)=>{
            return beerList.filter( beer => beer.id === indexShop)
        })
        favBeersFiltered.flat().map((beer)=>{
            favBeers.push({
                title : beer.brand,
                subtitle : beer.name,
                img : beer.img,
                link : `/${beer.urlCategory}/${beer.id}`
            })
        })
        dispatch({
            type : ACCOUNT.USERDATA,
            payload : {
                name : user[id].name,
                avatar:  user[id].avatarimg,
                favShops : favShops.flat(),
                favBeers : favBeers.flat(),
                lastShops : lastShops.flat(),
                lastBeers : lastBeers.flat(),

            }
        });

        // dispatch({
        //     type : SHOP.FILTERED,
        //     payload : shopsFinded
        // })
    }
}

////////////////////////////////// MENU 
export function dashboardMenu(){
    return function(dispatch){
        dispatch({
            type : DASHBOARD.MENU,
            payload : sectionsOfMenuDashBoard
        })
    }
}
export function dashboardMenuSelected(indexSection){
    return function(dispatch){
        dispatch({
            type : DASHBOARD.MENU_SELECTED,
            payload : indexSection
        })
    }
}

////////////////////////////////// BEER ACTIONS
export function beerSelected(index){
    return function(dispatch){
        if(index !== false){ 
            var beerSelected = beerList[index]
            dispatch({
                type : BEER.SELECTED,
                payload : beerSelected
            });
            // dispatch({
            //     type : SHOP.SELECTION,
            //     payload : []
            // })
        }else{
            dispatch({
                type : BEER.SELECTED,
                payload : []
            })
        }
    }
}
export function lastBeersTried(index){
    return function(dispatch){
        //var beerSelected = beerList[index]
        var lastBeersTried = []
        index.map((index)=>{
            lastBeersTried.push(beerList[index])
        })
        dispatch({
            type : BEER.TRIED,
            payload : lastBeersTried
        })
    }
}

export function countriesListFrench(){
    return function(dispatch){
        axios.get(`https://restcountries.eu/rest/v2/`)
            .then(function(response){
                var nameCountriesInFrench = []
                const nameCountries = response.data.map((nameCountry)=>{
                    nameCountriesInFrench.push(nameCountry.translations.fr)
                })

                dispatch({
                    type : COUNTRY.NAME_LIST_FRENCH,
                    payload : nameCountriesInFrench
                })
            })
            .catch(function(error){
                console.log('=========AXIOS REPONSE FAIL===========')
                console.log(error)
            })
    }
}
