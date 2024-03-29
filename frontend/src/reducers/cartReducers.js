import * as constants from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [], shippingAddress: {} }, action) => {
  switch (action.type) {
    case constants.CART_ADD_ITEM:
      const item = action.payload;
      const existItem = state.cartItems.find(x => x.product === item.product);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(x =>
            // replace item in cart with new item that has updated qty
            x.product === existItem.product ? item : x
          )
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item]
        }
      }

    case constants.CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(x => x.product !== action.payload) //payload = item id to remove
      }

    case constants.CART_SAVE_SHIPPING_ADDRESS:
      return {
        ...state,
        shippingAddress: action.payload
      }

    case constants.CART_SAVE_PAYMENT_METHOD:
      return {
        ...state,
        paymentMethod: action.payload
      }
    
    case constants.CART_CLEAR_ITEMS:
      return {
        ...state,
        cartItems: []
      }

    default:
      return state
  }
}