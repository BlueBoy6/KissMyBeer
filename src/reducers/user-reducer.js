import {ACCOUNT} from "../actions/action-types"

export function userDatasReducer (state=[], action){
    switch(action.type){
        case ACCOUNT.USERDATA :
            return action.payload;           
    }
    return state;
}