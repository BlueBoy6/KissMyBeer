import { combineReducers } from 'redux';
import {beerBrandsReducer, 
        beersModelOfBrandReducer,
        beerConsult, 
        beerSearchOneReducer,
        beerSelectedReducer,
        lastBeersTriedReducer,
        categoryBeerReducer,
        companyBeerReducer,
    }  from './beer-reducer'
import {countriesListFrenchReducer}  from './country-reducer'

import {shopNameListReducer, 
        shopInfoReducer,
        shopSelectedReducer
}  from './shops-reducer'
import {userDatasReducer}  from './user-reducer'
import {menuDashboard}  from './menu-dashboard-reducer'

// REDUCERS 

const rootReducer = combineReducers({
    beerList : beerConsult,
    beerBrandsList : beerBrandsReducer,
    lastBeersTriedReducer : lastBeersTriedReducer,
    shopNameListReducer : shopNameListReducer,
    shopInfoReducer : shopInfoReducer,
    userDatasReducer : userDatasReducer,
    menuDashboard : menuDashboard,
    beerSearchOneReducer : beerSearchOneReducer,
    beerSelectedReducer : beerSelectedReducer,
    shopSelectedReducer : shopSelectedReducer,
    beersModelOfBrandReducer : beersModelOfBrandReducer,
    categoryBeerReducer : categoryBeerReducer,
    companyBeerReducer : companyBeerReducer,
    countriesListFrenchReducer : countriesListFrenchReducer
    
});

export default rootReducer;


