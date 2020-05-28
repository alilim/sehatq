import React, { useState } from 'react'
import { connect } from 'react-redux'

import SingleLayouts from '../../_includes/layouts/single'

import ItemTemplates from '../../_includes/templates/item'

import { SearchContainer } from './search.style'

const SearchIndex = ({currentItem}) => {
  const [ valueSearch, setValueSearch ] = useState('')

  const data = (valueSearch !== '')  ?  (currentItem?.item?.length ?  (
    currentItem.item.filter(item => (item.title && item.title.toLowerCase().indexOf(valueSearch.toLowerCase()) !== -1))
  ) : [] ) : []
  
  return (
    <SingleLayouts title='Search' subtitle={valueSearch ? 'Result Search for `'+valueSearch+'`' :  'Input text for Searching'} header='search' setValueSearch={setValueSearch}>
      <SearchContainer>
        <ItemTemplates data={data}/>
      </SearchContainer>
    </SingleLayouts>
  )
}

const mapStateToProps = state => ({
  currentItem: state.item.currentItem
})

export default connect(mapStateToProps)(SearchIndex)

