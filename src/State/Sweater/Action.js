import { api } from "../../config/apiConfig";
import { FIND_PRODUCTS_SWEATERS_FAILURE, FIND_PRODUCTS_SWEATERS_REQUEST, FIND_PRODUCTS_SWEATERS_SUCCESS } from "./ActionType";





export const findProductsSweaters = () => async(dispatch)=>{
    
    try {
        dispatch({type:FIND_PRODUCTS_SWEATERS_REQUEST})
        const { data } = await api.get(
            `/api/products?category=${"mens_sweater"}`
        );
        dispatch({type:FIND_PRODUCTS_SWEATERS_SUCCESS,payload:data,})
        
        
    } catch (error) {
        dispatch({type:FIND_PRODUCTS_SWEATERS_FAILURE,payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,})
    }
}