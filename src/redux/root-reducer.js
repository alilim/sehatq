import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import userReducer from './user/user.reducer'
import itemReducer from './item/item.reducer'
import cartReducer from './cart/cart.reducer'

const persistConfig = {
  key: 'root',
  storage, 
  whitelist: ['user', 'item', 'cart']
}

const appReducer = combineReducers({
  user: userReducer,
  item: itemReducer,
  cart: cartReducer
});

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGGED_OUT') {
    storage.removeItem('persist:root')
    state = undefined
  }

  return appReducer(state, action)
}

export default persistReducer(persistConfig, rootReducer)
