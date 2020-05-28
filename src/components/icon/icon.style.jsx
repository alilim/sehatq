import styled from 'styled-components'
import IconSehat from '../../assets/images/icons/sehat.svg'
import IconBlackSehat from '../../assets/images/icons/sehat-black.svg'
import IconSearch from '../../assets/images/icons/search.svg'
import IconSearchActive from '../../assets/images/icons/search-active.svg'
import IconHome from '../../assets/images/icons/home.svg'
import IconHomeActive from '../../assets/images/icons/home-active.svg'
import IconFeed from '../../assets/images/icons/feed.svg'
import IconCart from '../../assets/images/icons/cart.svg'
import IconCartActive from '../../assets/images/icons/cart-active.svg'
import IconProfile from '../../assets/images/icons/profile.svg'
import IconProfileActive from '../../assets/images/icons/profile-active.svg'
import IconLove from '../../assets/images/icons/love.svg'
import IconBackLove from '../../assets/images/icons/love-black.svg'
import IconBack from '../../assets/images/icons/back.svg'
import IconShare from '../../assets/images/icons/share.svg'

/* functions */
const getIconContainerStyled = ({name, width, height, onClick, mode}) => {
  let modifiedStyled = ''
  switch(name){
    case 'sehat': 
      modifiedStyled += `&:before { content: url(${IconSehat}); }`
      break;
    case 'sehat-black': 
      modifiedStyled += `&:before { content: url(${IconBlackSehat}); }`
      break;  
    case 'search': 
      modifiedStyled += `&:before { content: url(${IconSearch}); }`
      break;  
    case 'search-active': 
      modifiedStyled += `&:before { content: url(${IconSearchActive}); }`
      break; 
    case 'home': 
      modifiedStyled += `&:before { content: url(${IconHome}); }`
      break;  
    case 'home-active': 
      modifiedStyled += `&:before { content: url(${IconHomeActive}); }`
      break; 
    case 'feed': 
      modifiedStyled += `&:before { content: url(${IconFeed}); }`
      break;  
    case 'cart': 
      modifiedStyled += `&:before { content: url(${IconCart}); }`
      break;  
    case 'cart-active': 
      modifiedStyled += `&:before { content: url(${IconCartActive}); }`
      break; 
    case 'profile': 
      modifiedStyled += `&:before { content: url(${IconProfile}); }`
      break;  
    case 'profile-active': 
      modifiedStyled += `&:before { content: url(${IconProfileActive}); }`
      break;  
    case 'love': 
      modifiedStyled += `&:before { content: url(${IconLove}); }`
      break;  
    case 'love-black': 
      modifiedStyled += `&:before { content: url(${IconBackLove}); }`
      break;   
    case 'back': 
      modifiedStyled += `&:before { content: url(${IconBack}); }`
      break;  
    case 'share': 
      modifiedStyled += `&:before { content: url(${IconShare}); }`
      break;  
    default: 
      break;
  }
  if(width && height) modifiedStyled += `
    &:before { 
      width: ${width}; 
      height: ${height};
    }
  `
  else if(width) modifiedStyled += `
    &:before { 
      width: ${width}; 
      height: ${width};
    }
  `
  if(onClick) modifiedStyled += ` cursor: pointer; `
  return modifiedStyled
}


/* components */
export const IconContainer = styled.i`
  ${getIconContainerStyled}
  &:before {
    display: grid;
  }
`

