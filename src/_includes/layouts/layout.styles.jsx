import styled, { css } from 'styled-components'

/* style */
const layoutContainer = css`
  display: inline-grid;
  width: 100%;
`

const layoutBodyStyled = css`
  display: grid;
  background-color: #fff;
`

const LayoutBodyContainerStyled = css`
  max-width: 768px;
  width: 100%;
  overflow-x: hidden;
` 

/* components */
export const EmptyLayoutContainer = styled.section`
  ${layoutContainer}
` 

export const EmptyLayoutBody = styled.section`
  ${layoutBodyStyled}
`  

export const EmptyLayoutBodyContainer =  styled.section`
  ${LayoutBodyContainerStyled}
  display: grid;
  justify-self: center;
  align-items: center;
  min-height: 100vh;
` 

export const SingleLayoutContainer = styled.section`
`

export const SingleLayoutBody = styled.section`
  ${layoutBodyStyled}
`

export const SingleLayoutBodyContainer = styled.section`
  ${LayoutBodyContainerStyled}
  height: calc(100vh - 103px);
  background-color: #6fc7e1;
  margin-top: 47px;
  margin-bottom: 56px;
  margin-left: auto;
  margin-right: auto;
  // align-items: start;
`

export const SingleLayoutTitleWrapper = styled.div`
  display: grid;
  grid-auto-flow: row;
  padding: 10px 1em;
`

export const SingleLayoutTitle = styled.span`
  margin: 4px 0 0 0;
  font-size: 2em;
  letter-spacing: -0.02em;
  line-height: 1.3em;
  color: #fff;
`

export const SingleLayoutSubTitle = styled.span`
  font-size: 1em;
  font-weight: 500;
  margin: 6px 0 0 0;
  color: #eee;
  line-height: 1.6em;
`