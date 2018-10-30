import {COUNTRY} from "../actions/action-types"

export function countriesListFrenchReducer (state=[], action){
    switch(action.type){
        case COUNTRY.NAME_LIST_FRENCH :
            return action.payload;              
    }
    return state;
}

