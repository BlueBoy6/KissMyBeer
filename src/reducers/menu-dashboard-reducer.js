import {DASHBOARD} from "../actions/action-types"

export function menuDashboard (state=[], action){
    switch(action.type){
        //  Si l'action de
        case DASHBOARD.MENU :
            return action.payload;           
        case DASHBOARD.MENU_SELECTED :
            return state.filter((menuItem)=>{
                if(menuItem.id === action.payload){
                    return true
                }else{
                    return false
                }
            });           
    }
    return state;
}