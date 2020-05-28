import styled, { css } from 'styled-components'

/* style */
const ItemStyles = css`
  background: #faf2e8;
  border-radius: 6px;
  border: 0;
  position: relative;
  overflow: hidden;
`


/* components */
export const HomeContainer = styled.section`` 

export const NavContainer = styled.article`
  display: block;
  padding: 10px 0 10px 1em;
`

export const NavItemWrapper = styled.div`
  ${ItemStyles}
  margin-top: 0;
  margin-right: 1em;
  padding: .5em .25em 0;
  & > img {
    margin: 0 auto;
  }
` 

export const NavItemDescription = styled.span`
  padding: 3px 6px 4px;
  display: grid;
  height: 30px;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 300;
  line-height: 14px;
  border-top: 1px solid #fc5c64;
  margin-top: 6px;
`

export const LatestContainer = styled.section`
  padding: 10px 1em;
  border-top: 1px solid #faf2e8;
`

export const LatestListContainer = styled.ul`
  list-style: none;
  margin: 10px 0;
  padding: 0;
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 20px;
  @media (min-width: 767px) {
    grid-auto-flow: unset;
    grid-template-columns: 49% 49%;
    grid-column-gap: 15px;
  }
`

export const LatestItemWrapper = styled.li``

export const ImageWrapper = styled.div`
  display: block;
  overflow: hidden;
  width: 100%;
  height: 200px;
`

export const ItemWrapper = styled.div`
  ${ItemStyles}
` 

export const ItemWrapperTitle = styled.div`
  display: grid;
  grid-auto-columns: auto 70px;
  grid-auto-flow: column;
  align-items: center;
  font-size: 1em;
  font-weight: 600;
  letter-spacing: .05em;
  padding: 8px 1em 10px 1em;
  position: relative;
  > i {
    position: absolute;
    z-index: 10;
    top: -45px;
    left: 10px;
    border-radius: 50%;
    border: 1px solid #fff;
    background: #fff;
    padding: 2px 1px 0px 1px;
  }
`