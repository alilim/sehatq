import React from 'react'
import { connect } from 'react-redux'

import SingleLayouts from '../../_includes/layouts/single'

import ItemTemplates from '../../_includes/templates/item'

import { HistoryContainer } from './history.style'

const HistoryIndex = ({cartItems}) => {
  return (
    <SingleLayouts title='Purchase History' subtitle={cartItems.length ? `${cartItems.length} Item${cartItems.length <=1 ? '' : 's'} purchasing` : `0 Item purchasing`} header='product'>
      <HistoryContainer>
        <ItemTemplates data={cartItems} />
      </HistoryContainer>
    </SingleLayouts>
  )
}

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
})

export default connect(mapStateToProps)(HistoryIndex)