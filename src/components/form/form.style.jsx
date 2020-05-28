import styled, { css } from 'styled-components'

/* style */
const FormStyles = css`
  width: 100%;
  height: 100%;
`

/* function */
const getFormContainerStyled = ({ mode }) => {
  let modifiedStyled = ""
  if(mode === 'login') {
    modifiedStyled += `
      & ${FormActionGroupField} {
        grid-auto-flow: column;
      }
    `
  }
  return modifiedStyled
}


/* component */
export const FormContainer = styled.form.attrs(props => ({
    name: (props.name) ? props.name : 'form', 
    autoComplete: (props.autocomplete) ? props.autocomplete : 'off' 
  }))`
  ${FormStyles}
  display: inline-grid;
  grid-auto-flow: row;
  grid-gap: 25px;
  ${getFormContainerStyled}
`
export const FormGroupField = styled.article`
  display: inline-grid;
  grid-gap: 8px;
`
export const FormLabelField = styled.div`
  font-weight: 400;
  text-transform: capitalize;
  color: #555;
`
export const FormInputField = styled.div`
  display: inline-grid;
  grid-gap: 8px;
`
export const FormActionGroupField = styled.article`
  display: grid;
`
/* component */