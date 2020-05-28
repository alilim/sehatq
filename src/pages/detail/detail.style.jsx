import styled from 'styled-components'

/* function */

const getShareContainerStyled = ({isOpen}) => {
  let modifiedStyled = ""
  if(isOpen) modifiedStyled += `
    opacity: 1;
  `
  return modifiedStyled
}

/* components */
export const DetailContainer = styled.section`
  padding: 10px 1em;
` 

export const DetailWrapper = styled.article`
  background: #faf2e8;
  border-radius: 6px;
  border: 0;
  position: relative;
  overflow: hidden;
  display: grid;
  grid-auto-flow: row;
`

export const DetailImageContainer = styled.div`
  position: relative;
`

export const ImageWrapper = styled.div`
  display: block;
  overflow: hidden;
  width: 100%;
  height: 200px;
  position: relative;
  & > i {
    position: absolute;
    right: 1em;
    top: 1em;
    border-radius: 50%;
    border: 1px solid #fff;
    background: #fff;
    padding: 3px 5px 3px 2px;
  }
`

export const DetailItemContainer = styled.div`
  padding: 10px 1em;
`

export const DetailTitleWrapper = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: auto 32px;
  justify-items: stretch;
`

export const DetailTitle = styled.h2`
  padding: 0 0 10px 0;
  margin: 0;
  line-height: 22px;
  border-bottom: 1px solid #fff;
`

export const DetailDescription = styled.div`
  padding-top: 10px;
`

export const DetailActionContainer = styled.aside`
  grid-auto-flow: column;
  display: grid;
  grid-template-columns: auto;
  padding: 10px 1em;
`

export const DetailPrice = styled.div`
  font-size: 1.5em;
  font-weight: 700;
  padding-top: 10px;
  color: #000;
  text-align: right;
  padding-right: 10px;
`

export const ShareContainer = styled.div`
  opacity: 0;
  position: absolute;
  top: 8px;
  right: 42px;
  background-color: #faf2e8;
  display: grid;
  grid-gap: 10px;
  padding: 10px 1em;
  & > a {
    margin: 0;
  }
  ${getShareContainerStyled}
`