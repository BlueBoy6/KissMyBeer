import {SHOP} from "../actions/action-types"

export function shopNameListReducer (state=[], action){
    switch(action.type){
        case SHOP.NAME :
            return action.payload;           
    }
    return state;
}
export function shopInfoReducer (state=[], action){
    switch(action.type){
        case SHOP.INFO :
            return action.payload;           
    }
    return state;
}
export function shopSelectedReducer (state=[], action){
    switch(action.type){
        case SHOP.SELECTION :
            return action.payload;           
    }
    return state;
}
