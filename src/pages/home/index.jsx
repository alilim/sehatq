import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import SingleLayouts from '../../_includes/layouts/single'

import { setCurrentItem, setCurrentCategory} from '../../redux/item/item.actions'

import NavPartials from './partials/nav'
import LatestPartials from './partials/latest'

import { HomeContainer } from './home.style'

const HomeIndex = ({currentUser, currentItem, setCurrentItem, setCurrentCategory }) => {
  const [ isFirstLoad, setFirstLoad ] = useState(true)
  const [ isLoading, setLoading ] = useState()

  useEffect(() => {
    evBind()
  })

  const evBind = () => {
    if(isFirstLoad) {
      // ReactGA.pageview(window.location.pathname + window.location.search)
      if(!currentItem) {
        setLoading(true)
        async function f() {
          try {
            const response = await fetch('https://private-4639ce-ecommerce56.apiary-mock.com/home', {method: 'GET'})
            const result = await response.json()
            if(result[0]?.data?.category) {
              const categories = result[0].data.category
              setCurrentCategory({
                category: categories
              })
            }
            if(result[0]?.data?.productPromo) {
              const items = result[0].data.productPromo
              setCurrentItem({
                item: items
              })
            }
            setLoading(false)
          } catch(err) {
            setLoading(false)
          }
        }
        f()
      }else {
        setLoading(false)
      }
      setFirstLoad(false)
    } 
  }


  return (
    <SingleLayouts title={currentUser?.name ? `Hi ${currentUser.name}` : 'Discover'} subtitle='Welcome to SehatQ'>
      <HomeContainer>
        <NavPartials isLoading={isLoading} />
        <LatestPartials isLoading={isLoading} />
      </HomeContainer>
    </SingleLayouts>
  )
}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
  currentItem: state.item.currentItem
})

const mapDispatchToProps = dispatch => ({
  setCurrentItem: item => dispatch(setCurrentItem(item)),
  setCurrentCategory: category => dispatch(setCurrentCategory(category))
})

export default connect(mapStateToProps, mapDispatchToProps)(HomeIndex)