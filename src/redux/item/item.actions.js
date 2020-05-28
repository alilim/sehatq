import { ItemActionTypes } from './item.type'

export const setCurrentItem = item => ({
  type: ItemActionTypes.SET_CURRENT_ITEM,
  payload: item
})

export const setCurrentCategory = category => ({
  type: ItemActionTypes.SET_CURRENT_CATEGORY,
  payload: category
})

export const setDetailItem = item => ({
  type: ItemActionTypes.SET_DETAIL_ITEM,
  payload: item
})

export const setLoveItem = item => ({
  type: ItemActionTypes.SET_LOVE_ITEM,
  payload: item
})

export const setLoveDetailItem = item => ({
  type: ItemActionTypes.SET_LOVE_DETAIL_ITEM,
  payload: item
})
