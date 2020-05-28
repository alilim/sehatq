import React from 'react'
import { useLocation } from 'react-router-dom'
import { connect } from 'react-redux'
import { store } from '../../../redux/store'

import IconComponent from '../../../components/icon/icon.component'
import LinkComponent from '../../../components/link/link.component'
import TextComponent from '../../../components/text/text.component'

import { FooterContainer, FooterListContainer, FooterItemWrapper, NotificationIcon } from './footer.style'

const FooterPartials = ({cartItems, setLogoutUser}) => {
  const location = useLocation()
  const RESET_ACTION = {
    type: 'USER_LOGGED_OUT'
  }

  const evLogout = () => {
    store.dispatch(RESET_ACTION)
  }

  return (
    <FooterContainer>
      <FooterListContainer>
        <FooterItemWrapper>
          <LinkComponent mode='clear' to='/'>
            <IconComponent width='26px' name={location.pathname === '/' ? 'home-active' : 'home' } />
            <TextComponent color={location.pathname === '/' ? '#ffa883' : 'initial' }>Home</TextComponent>
          </LinkComponent>
        </FooterItemWrapper>
        <FooterItemWrapper>
          <LinkComponent mode='clear' to='/'>
            <IconComponent width='26px' name='feed' />
            <TextComponent>Feed</TextComponent>
          </LinkComponent>
        </FooterItemWrapper>
        <FooterItemWrapper>
          <LinkComponent mode='clear' to='/history'>
            <IconComponent width='26px' name={location.pathname === '/history' ? 'cart-active' : 'cart' }  />
            <TextComponent color={location.pathname === '/history' ? '#ffa883' : 'initial' }>Cart</TextComponent>
            {cartItems.length ? <NotificationIcon>{cartItems.length}</NotificationIcon> : null}
          </LinkComponent>  
        </FooterItemWrapper>
        <FooterItemWrapper>
          <LinkComponent mode='clear' as='div' to='#' onClick={evLogout}>
            <IconComponent width='26px' name='profile'/>
            <TextComponent>Logout</TextComponent>
          </LinkComponent>  
        </FooterItemWrapper>
      </FooterListContainer>
    </FooterContainer>
  )
}

const mapStateToProps = state => ({
  cartItems: state.cart.cartItems
})


export default connect(mapStateToProps)(FooterPartials)