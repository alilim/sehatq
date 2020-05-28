import styled from 'styled-components'

/* function */

const getErrorContainerStyled = ({align}) => {
  let modifiedStyled = ''
  if(align) {
    modifiedStyled += ` text-align: ${align} `
  }
  return modifiedStyled
}

/* component */
export const ErrorContainer = styled.div`
  display: inline-grid;
  grid-auto-flow: column;
  grid-template-columns: auto;
  grid-gap: 4px;
  align-items: center;
  color: #fc5c64;
  line-height: 14px;
  font-weight: 400;
  align-content: center;
  width: 100%;
  ${getErrorContainerStyled}
`
