import { combineReducers } from "redux";
import productsReducer from "./ProductReducer/productReducer";
import cartReducer from "./Cart/cartReducer";
const rootReducer = combineReducers({
    productsState : productsReducer,
    cartState : cartReducer
})
export default rootReducer