import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Facebook from 'react-sharingbuttons/dist/buttons/Facebook'
import Twitter from 'react-sharingbuttons/dist/buttons/Twitter'
import Email from 'react-sharingbuttons/dist/buttons/Email'

import SingleLayouts from '../../_includes/layouts/single'

import { addCart } from '../../redux/cart/cart.actions'
import { setLoveDetailItem, setLoveItem } from '../../redux/item/item.actions'

import ImageComponent from '../../components/image/image.component'
import ButtonComponent from '../../components/button/button.component'
import IconComponent from '../../components/icon/icon.component'
import TextComponent from '../../components/text/text.component'

import 'react-sharingbuttons/dist/main.css'

import { DetailContainer, DetailWrapper, DetailImageContainer, ImageWrapper, DetailItemContainer, DetailTitleWrapper, DetailTitle, DetailDescription, DetailActionContainer, DetailPrice, ShareContainer } from './detail.style'

const DetailIndex = ({detailItem, addCart, setLoveItem, setLoveDetailItem}) => {
  const history = useHistory()
  const shareUrl = 'https://www.sehatq.com'
  const shareText = 'Visit us here!'
  const shareSubject = 'Hi'
  const [ isOpenShare, setOpenShare ] = useState(false)

  const evBuy = e => {
    let detail = e.target.getAttribute('data-detail') || {}
    detail = JSON.parse(detail)
    addCart(detail)
    history.push('/history')
  }

  const evLove = e => {
    let detail = e.target.getAttribute('data-detail') || {}
    detail = JSON.parse(detail)
    const newValue = detail.loved ? 0 : 1
    detail.loved = newValue
    setLoveItem({ id: detail.id, value: newValue })
    setLoveDetailItem({detail})
  }

  const evShare = e => {
    setOpenShare(!isOpenShare)
  }

  return (
    <SingleLayouts title='Detail' subtitle={detailItem?.detail?.title || ''} header='product'>
      <DetailContainer>
        {
          detailItem?.detail ? (
            <DetailWrapper>
              <DetailImageContainer>
                <ImageWrapper>
                  <ImageComponent mode='product' src={detailItem.detail.imageUrl} width='100%' height='auto' />
                  <IconComponent name='share' width='20px' onClick={evShare}/>
                  <ShareContainer isOpen={isOpenShare}>
                    <Facebook url={shareUrl} />
                    <Twitter url={shareUrl} shareText={shareText} />
                    <Email url={shareUrl} text={shareText} subject={shareSubject}/>
                  </ShareContainer>
                </ImageWrapper>
              </DetailImageContainer>
              <DetailItemContainer>
                <DetailTitleWrapper>
                  <DetailTitle>{detailItem.detail.title}</DetailTitle>
                  <IconComponent name={detailItem.detail.loved ? 'love' : 'love-black'}  width='24px'  data-detail={JSON.stringify(detailItem.detail)} onClick={evLove}/>
                </DetailTitleWrapper>
                <DetailDescription>
                  {detailItem.detail.description}
                </DetailDescription>
              </DetailItemContainer>
              <DetailActionContainer>
                <DetailPrice>{detailItem.detail.price}</DetailPrice>
                <ButtonComponent mode='default' data-detail={JSON.stringify(detailItem.detail)} onClick={evBuy} >Buy</ButtonComponent>
              </DetailActionContainer>
            </DetailWrapper>
          )  : <TextComponent color='#fff'>No Item</TextComponent>
        }
      </DetailContainer>
    </SingleLayouts>
  )
}

const mapStateToProps = state => ({
  detailItem: state.item.detailItem
})

const mapDispatchToProps = dispatch => ({
  addCart: cart => dispatch(addCart(cart)),
  setLoveDetailItem: item => dispatch(setLoveDetailItem(item)),
  setLoveItem: item => dispatch(setLoveItem(item))
})

export default connect(mapStateToProps, mapDispatchToProps)(DetailIndex)