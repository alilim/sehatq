import styled, { css } from 'styled-components'

/* style */
const navStyles = css`

`


/* function */
const getImageStyled = ({mode, width, height}) => {
  let modifiedStyled = ''
  if(mode === 'nav') modifiedStyled += navStyles
  
  if(width && height) modifiedStyled += `
    width:${width}; 
    height:${height};
  `
  else if(width) modifiedStyled += `
    width:${width}; 
    height:${width};
  `
  else if(height) modifiedStyled += `
    width:${width}; 
    height:${height};
  `
  return modifiedStyled
}

/* component */
export const ImageContainer = styled.img`
  width: 100%;
  height: auto;
  ${getImageStyled}
`