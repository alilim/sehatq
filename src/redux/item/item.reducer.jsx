import { ItemActionTypes } from './item.type'

const INIT_STATE =  {
  currentItem: null,
  currentCategory: null,
  detailItem: null
}

const itemReducer = (state = INIT_STATE, action) => {
  switch(action.type) {
    case ItemActionTypes.SET_CURRENT_ITEM :
      return {
        ...state,
        currentItem: action.payload
      }
    case ItemActionTypes.SET_CURRENT_CATEGORY :
      return {
        ...state,
        currentCategory: action.payload
      }
    case ItemActionTypes.SET_DETAIL_ITEM :
      return {
        ...state,
        detailItem: action.payload
      } 
    case ItemActionTypes.SET_LOVE_ITEM :
      const currentItems = Object.assign({}, state.currentItem)
      const currIdx = currentItems.item.findIndex(curr => curr.id === action.payload.id) 
      if(currIdx >= 0) {
        let currentItem = currentItems.item[currIdx]
        currentItem.loved = action.payload.value
        currentItems.item.splice(currIdx, 1, currentItem)
      }
      return {
        ...state,
        currentItem: currentItems
      }
    case ItemActionTypes.SET_LOVE_DETAIL_ITEM :
      return {
        ...state,
        detailItem: action.payload
      }
    default: 
      return state
  }
}

export default itemReducer