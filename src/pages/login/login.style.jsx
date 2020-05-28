import styled from 'styled-components'

/* components */
export const LoginContainer = styled.section`
  display: inline-grid;
  width: 100%;
  height: 100%;
  background-color: #6fc7e1;
  grid-auto-flow: row;
  grid-template-rows: 60px auto;
  align-content: center;
  justify-items: center;
  grid-row-gap: 1em;
  padding: 1em;
` 

export const LogoContainer = styled.article``

export const LoginPanelContainer = styled.article`
  background-color: #fff;
  padding: 1em;
  border-radius: 4px;
  width: 100%;
  max-width: 425px;
` 

export const LoginTitleContainer = styled.div`
  text-align: center;
` 

export const LoginTitle = styled.h2``

export const LoginSubtitle = styled.h4``

export const LoginFormContainer = styled.section`
  padding: 1em;
` 

export const LoginAsideContainer = styled.aside`
  width: 100%;
  max-width: 425px;
`

export const LoginSocialSignContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-row-gap: 10px;
  margin: 1em;
  text-align: center;
  button {
    width: 100%;
  }
`
