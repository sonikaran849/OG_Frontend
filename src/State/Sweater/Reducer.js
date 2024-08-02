import { FIND_PRODUCTS_SWEATERS_FAILURE, FIND_PRODUCTS_SWEATERS_REQUEST, FIND_PRODUCTS_SWEATERS_SUCCESS } from "./ActionType"


const initialState={
    products:[],
    product:null,
    loading:false,
    error:null,
}

export const sweaterReducer = (state=initialState, action)=>{

    switch(action.type){
        case FIND_PRODUCTS_SWEATERS_REQUEST:
            return {...state, loading:true, error:null,products:[]}
            
        case FIND_PRODUCTS_SWEATERS_SUCCESS:
            return {...state, loading:false, error:null, products:action.payload}
        
        case FIND_PRODUCTS_SWEATERS_FAILURE:
            return {...state, loading:false, products:[],error:action.payload}
        
        default:
            return state;
    }
}