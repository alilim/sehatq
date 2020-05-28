import styled, { css } from 'styled-components'

/* style */
const InputStyles = css`
  position: relative;
  padding: 9px 16px;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 4px;
  background-color: #fff;
  font-size: .9375em;
  height: auto;
  max-height: 36px;
  width: 100%;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-style: italic;
  }
`

/* functions */
const getInputContainerStyled = ({mode, width, height, isError}) => {
  let modifiedStyled = ''
  if(width) modifiedStyled += `
    width: ${width}; 
  `
  if(height) modifiedStyled += `
    height: ${height}; 
  `
  if(isError) {
    modifiedStyled += ` border:1px solid #fc5c64; `
  }
  return modifiedStyled
}


/* components */
export const InputContainer = styled.input.attrs(props => ({
    name: props.name,
    type:  props.type, 
    placeholder: props.placeholder || ''
  }))`
  ${InputStyles}
  ${getInputContainerStyled}
`

