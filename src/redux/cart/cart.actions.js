import { CartActionTypes } from './cart.type'

export const addCart = cart => ({
  type: CartActionTypes.ADD_CART,
  payload: cart
})

