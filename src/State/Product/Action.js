import { api } from "../../config/apiConfig";
import { FIND_PRODUCT_BY_ID_FAILURE, FIND_PRODUCT_BY_ID_REQUEST, FIND_PRODUCT_BY_ID_SUCCESS, FIND_PRODUCTS_FAILURE, FIND_PRODUCTS_REQUEST, FIND_PRODUCTS_SUCCESS } from "./ActionType";


export const findProducts = (reqData) =>async (dispatch) =>{
    
    const {
        colors,
        sizes,
        minPrice,
        maxPrice,
        minDiscount,
        category,
        stock,
        sort,
        pageNumber,
        pageSize,
    } = reqData;
    
    try {
        dispatch({type:FIND_PRODUCTS_REQUEST})
        const { data } = await api.get(
            `/api/products?category=${category}&size=${sizes}&color=${colors}&minPrice=${minPrice}&
            maxPrice=${maxPrice}&minDiscount=${minDiscount}&sort=${sort}&pageNumber=${pageNumber}&pageSize=${pageSize}`
          );

        dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data,})
        
    } catch (error) {
        dispatch({type:FIND_PRODUCTS_FAILURE,payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,})
    }
}

export const findProductsHomepage = (reqData) => async(dispatch)=>{
    const { 
        category
    } = reqData;
    
    try {
        dispatch({type:FIND_PRODUCTS_REQUEST})
        const { data } = await api.get(
            `/api/products?category=${category}`
        );
        dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data,})
        
    } catch (error) {
        dispatch({type:FIND_PRODUCTS_FAILURE,payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,})
    }
}


export const findProductsRef = () => async(dispatch)=>{
    
    try {
        dispatch({type:FIND_PRODUCTS_REQUEST})
        const { data } = await api.get(
            `/api/products`
        );
        dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data,})
        
        
    } catch (error) {
        dispatch({type:FIND_PRODUCTS_FAILURE,payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,})
    }
}


export const findProductsById = (reqData) =>async (dispatch) =>{
    dispatch({type:FIND_PRODUCT_BY_ID_REQUEST})
    const productId = reqData.productId;
    try {
        const {data} = await api.get(`/api/products/id/${productId}`)
        dispatch({type:FIND_PRODUCT_BY_ID_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:FIND_PRODUCT_BY_ID_FAILURE,payload:error.message})
    }
}

export const findProductsTees = () => async(dispatch)=>{
    
    try {
        dispatch({type:FIND_PRODUCTS_REQUEST})
        const { data } = await api.get(
            `/api/products?category=${"mens_tees"}`
        );
        
        dispatch({type:FIND_PRODUCTS_SUCCESS,payload:data,})
        
        
    } catch (error) {
        dispatch({type:FIND_PRODUCTS_FAILURE,payload:
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message,})
    }
}

