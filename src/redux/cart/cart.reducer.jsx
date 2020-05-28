import { CartActionTypes } from './cart.type'

const INIT_STATE =  {
  cartItems: [],
}

const cartReducer = (state = INIT_STATE, action) => {
  switch(action.type) {
    case CartActionTypes.ADD_CART :
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload] 
      }
    default: 
      return state
  }
}

export default cartReducer