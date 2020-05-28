import styled, { css } from 'styled-components'

/* styles */
const elipsisStyle = css `
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  max-width: 100%;
  width: auto;
`

const getTextStyled = ({inline, color, weight, size, transform, elipsis, align}) => {
  let modifiedStyled = ``
  if(color ) modifiedStyled += `color: ${color};`
  if(weight)  modifiedStyled += `font-weight: ${weight};`
  if(size)  modifiedStyled += `font-size: ${size}px;`
  if(transform)  modifiedStyled += `text-transform: ${transform};`
  if(align)  modifiedStyled += `text-align: ${align};`
  if(inline) modifiedStyled += `display: inline;`
  else if(elipsis) modifiedStyled += `${elipsisStyle}`

  return modifiedStyled;
}

/* component */
export const TextContainer = styled.span`
  display: grid;
  ${getTextStyled}
`
