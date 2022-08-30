import { CART_ADD_ITEM, CART_REMOVE_ITEM } from "../constants/cartConstants.js";

export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) { 
        case CART_ADD_ITEM:
            const existedItems = state.cartItems.find(
              (x) => x.productId === action.payload.productId
            );
            if (existedItems) {
                return {
                  ...state,
                  cartItems: state.cartItems.map((x) =>
                    x.productId === action.payload.productId
                      ? action.payload
                      : x
                  ),
                };
            } else { 
                return {
                  ...state,
                  cartItems: [...state.cartItems, action.payload],
                };

            }
        case CART_REMOVE_ITEM:
            return {
              ...state,
              cartItems: state.cartItems.filter(
                (x) => x.productId !== action.payload.productId
              ),
            };

        default:
            return state
    }
};