import styled from 'styled-components'

/* functions */
const getHeaderContainerStyled = ({mode}) => {
  let modifiedStyled = ''
  if(mode === 'search') modifiedStyled += `
    grid-template-columns: 50px 7fr;
  `
  return modifiedStyled
}
const getSearchContainerStyled = ({isShown}) => {
  let modifiedStyled = ''
  if(isShown) modifiedStyled += `
    & > input {
      margin-top: -4px;
      height: 36px;
      margin-bottom: -6px;
      padding-left: 30px;
    }
    & > i {
      position: absolute;
      z-index: 10;
      top: 16px;
      margin-left: 8px;
    }
  `
  return modifiedStyled
}

/* component */
export const HeaderContainer = styled.section`
  position: fixed;
  top: 0;
  display: grid;
  width: 100%;
  grid-auto-flow: column;
  padding: 10px 1em;
  border-bottom: 1px solid #faf2e8;
  justify-content: space-between;
  align-content: center;
  max-width: 768px;
  left: 50%;
  transform: translateX(-50%);
  ${getHeaderContainerStyled}
`

export const LogoContainer = styled.div``

export const SearchContainer = styled.div`
  ${getSearchContainerStyled}
`

export const BackContainer = styled.div``