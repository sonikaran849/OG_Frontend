import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { thunk } from "redux-thunk";
import { authReducer } from "./Auth/Reducer";
import { customerProductReducer } from "./Product/Reducer";
import {cartReducer} from "./Cart/Reducer";
import { orderReducer } from "./Order/Reducer";
import { jeansReducer } from "./Jeans/Reducer";
import { jacketsReducer } from "./Jacket/Reducer";
import { sweaterReducer } from "./Sweater/Reducer";

const rootReducers = combineReducers({
    auth:authReducer,
    customersProduct:customerProductReducer,
    cart:cartReducer,
    order:orderReducer,
    jeans:jeansReducer,
    jackets:jacketsReducer,
    sweaters:sweaterReducer,
})

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk))