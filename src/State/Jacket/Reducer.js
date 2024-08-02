import { FIND_PRODUCTS_JACKETS_FAILURE, FIND_PRODUCTS_JACKETS_REQUEST, FIND_PRODUCTS_JACKETS_SUCCESS } from "./ActionType"


const initialState={
    products:[],
    product:null,
    loading:false,
    error:null,
}

export const jacketsReducer = (state=initialState, action)=>{

    switch(action.type){
        case FIND_PRODUCTS_JACKETS_REQUEST:
            return {...state, loading:true, error:null,products:[]}
            
        case FIND_PRODUCTS_JACKETS_SUCCESS:
            return {...state, loading:false, error:null, products:action.payload}
        
        case FIND_PRODUCTS_JACKETS_FAILURE:
            return {...state, loading:false, products:[],error:action.payload}
        
        default:
            return state;
    }
}