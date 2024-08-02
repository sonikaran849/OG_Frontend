import { api } from "../../config/apiConfig";
import { FIND_PRODUCTS_JACKETS_FAILURE, FIND_PRODUCTS_JACKETS_REQUEST, FIND_PRODUCTS_JACKETS_SUCCESS } from "./ActionType";





export const findProductsJackets = () => async(dispatch)=>{
    
    try {
        dispatch({type:FIND_PRODUCTS_JACKETS_REQUEST})
        const { data } = await api.get(
            `/api/products?category=${"mens_jackets"}`
        );
        
        dispatch({type:FIND_PRODUCTS_JACKETS_SUCCESS,payload:data,})
        
    } catch (error) {
        dispatch({type:FIND_PRODUCTS_JACKETS_FAILURE,payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,})
    }
}