import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'

/* style */
const GlobalLinkStyles = css`
  position: relative;
  cursor: pointer;
  text-decoration: underline;
  &:hover {
    opacity: .8;
  }
`
const ClearLinkStyles = css` 
  color: #429ddf;
  text-decoration: none;
`
const ClearLinkUnderlineStyles = css`
  color: #429ddf;
  text-decoration: underline;
`
const ClearStyles = css`
  color: inherit;
  text-decoration: none;
`
const ResetLinkStyles = css`
  text-decoration: none;
  cursor: default;
  &:hover { opacity: 1; }
`

/* function */
const getLinkContainerStyled = ({mode, fontSize, elipsis, ...props}) => {
  let modifiedStyled = ""

  if(mode === 'clearlink') modifiedStyled += ClearLinkStyles
  if(mode === 'clearlinkunderline') modifiedStyled += ClearLinkUnderlineStyles
  else if(mode === 'clear') modifiedStyled += ClearStyles

  if(props.as === 'div') modifiedStyled += ResetLinkStyles

  if(fontSize) modifiedStyled += `
    font-size: ${fontSize};
  `
  if(elipsis) modifiedStyled += `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    max-width: 100%;
    width: auto;
  `
  return modifiedStyled
}

/* component */
export const LinkContainer = styled(Link)`
  ${GlobalLinkStyles}
  ${getLinkContainerStyled}
`