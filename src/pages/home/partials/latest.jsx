import React from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'

import ImageComponent from '../../../components/image/image.component'
import IconComponent from '../../../components/icon/icon.component'
import ButtonComponent from '../../../components/button/button.component'
import TextComponent from '../../../components/text/text.component'
import { ContentLoaderItem } from '../../../components/loader/loader.component'

import { setDetailItem, setLoveItem } from '../../../redux/item/item.actions'

import { LatestContainer, LatestListContainer, LatestItemWrapper, ImageWrapper, ItemWrapper, ItemWrapperTitle } from '../home.style'

const LatestPartials = ({isLoading, currentItem, setDetailItem, setLoveItem}) => {
  const history = useHistory()

  const evLink = e => {
    let detail = e.target.getAttribute('data-detail') || {}
    detail = JSON.parse(detail)
    setDetailItem({  detail })
    history.push('/detail/'+detail.id)
  }

  const evLove = e => {
    const id = e.target.getAttribute('data-id')
    let value = parseInt(e.target.getAttribute('data-value'))
    value = value ? 0 : 1
    setLoveItem({ id, value })
  }

  return (
    <LatestContainer>
      {
        (isLoading || isLoading === undefined) ? <ContentLoaderItem /> : ( 
          currentItem?.item?.length ? (
            <LatestListContainer>
              {
                currentItem.item.map((item, idx) => {
                  return (
                    <LatestItemWrapper key={idx}>
                      <ItemWrapper>
                        <ImageWrapper>
                          <ImageComponent mode='product' src={item.imageUrl} width='100%' height='auto' />
                        </ImageWrapper>
                        <ItemWrapperTitle>
                          <IconComponent name={item.loved ? 'love' : 'love-black'} width='24px' data-id={item.id} data-value={item.loved} onClick={evLove}/>
                          {item.title}
                          <ButtonComponent mode='default' data-detail={JSON.stringify(item)} onClick={evLink}>Detail</ButtonComponent>
                        </ItemWrapperTitle>
                      </ItemWrapper>
                    </LatestItemWrapper>
                  )
                })
              }
            </LatestListContainer>

          ) :  <TextComponent color='#fff'>No Item</TextComponent>)
      }
    </LatestContainer>  
  )
}


const mapStateToProps = state => ({
  currentItem: state.item.currentItem
})

const mapDispatchToProps = dispatch => ({
  setDetailItem: item => dispatch(setDetailItem(item)),
  setLoveItem: item => dispatch(setLoveItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(LatestPartials)
