import {BEER, ACTIONS} from "../actions/action-types"

// FONCTION DE RECUPERATION REDUCER

export function beerConsult (state=[], action){
    switch(action.type){
        //  Si l'action de
        case BEER.LIST :
            return action.payload;              
    }
    return state;
}

export function beerBrandsReducer (state=[], action){
    switch(action.type){
        case BEER.BRANDS :
            return action.payload;           
    }
    return state;
}
export function beersModelOfBrandReducer (state=[], action){
    switch(action.type){
        case BEER.MODELS_OF_BRAND :
            return action.payload;           
    }
    return state;
}

// renvoi les datas provenant de la recherche
export function beerSearchOneReducer(state=[], action){
    switch(action.type){
        case BEER.SEARCH_ONE :
            return action.payload;              
    }
    return state;
}
// envoi les datas lorsqu'une bière est sélectionné
export function beerSelectedReducer(state=[], action){
    switch(action.type){
        case BEER.SELECTED :
            return action.payload;              
    }
    return state;
}

export function lastBeersTriedReducer(state=[], action){
    switch(action.type){
        case BEER.TRIED :
            return action.payload;              
    }
    return state;
}
export function companyBeerReducer(state=[], action){
    switch(action.type){
        case BEER.COMPANY :
            return action.payload;              
    }
    return state;
}
export function categoryBeerReducer(state=[], action){
    switch(action.type){
        case BEER.CATEGORY :
            return action.payload;              
    }
    return state;
}

