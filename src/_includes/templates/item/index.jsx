import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import ImageComponent from '../../../components/image/image.component'
import ButtonComponent from '../../../components/button/button.component'
import TextComponent from '../../../components/text/text.component'

import { setDetailItem } from '../../../redux/item/item.actions'

import { ListContainer, ItemWrapper, ImageWrapper, ItemDetailContainer, ItemDetailTitle, ItemDetailPrice } from './item.style'

const ItemTemplates = ({data=[], setDetailItem}) => {
  const history = useHistory()

  const evLink = e => {
    let detail = e.target.getAttribute('data-detail') || {}
    detail = JSON.parse(detail)
    setDetailItem({  detail })
    history.push('/detail/'+detail.id)
  }

  return (
    <ListContainer>
      {
        data.length ? (
            data.map((_data,idx) => {
              return (
                <ItemWrapper key={idx}>
                  <ImageWrapper>
                    <ImageComponent mode='nav' src={_data.imageUrl} width='88px' height='auto' />
                  </ImageWrapper>
                  <ItemDetailContainer>
                    <ItemDetailTitle>{_data.title}</ItemDetailTitle>
                    <ItemDetailPrice>{_data.price}</ItemDetailPrice>
                    <ButtonComponent mode='default' data-detail={JSON.stringify(_data)} onClick={evLink}>Detail</ButtonComponent>
                  </ItemDetailContainer>
                </ItemWrapper>
              )
            })
        ) : <TextComponent color='#fff'>No Item</TextComponent>
      }
    </ListContainer>
  )
}


const mapDispatchToProps = dispatch => ({
  setDetailItem: item => dispatch(setDetailItem(item))
})

export default connect(null, mapDispatchToProps)(ItemTemplates)