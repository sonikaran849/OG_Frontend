import { api } from "../../config/apiConfig";
import { FIND_PRODUCTS_JEANS_FAILURE, FIND_PRODUCTS_JEANS_REQUEST, FIND_PRODUCTS_JEANS_SUCCESS } from "./ActionType";




export const findProductsJeans = () => async(dispatch)=>{
    
    try {
        dispatch({type:FIND_PRODUCTS_JEANS_REQUEST})
        const { data } = await api.get(
            `/api/products?category=${"mens_jeans"}`
        );
        dispatch({type:FIND_PRODUCTS_JEANS_SUCCESS,payload:data,})
        
        
    } catch (error) {
        dispatch({type:FIND_PRODUCTS_JEANS_FAILURE,payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,})
    }
}