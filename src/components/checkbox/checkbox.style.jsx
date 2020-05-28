import styled, { css } from 'styled-components'

/* style */
const GlobalCheckboxStyles = css`
  grid-gap: 6px;
  position: relative;
  padding-left: 1.5em;
  cursor: pointer;
  user-select: none;
  align-items: center;

  input:checked ~ span, input.checked ~ span {
    background-color: #3e85f7;
  }
  input:checked ~ span:after, input.checked ~ span:after {
    display: grid;
  }
`;
const getInputContainerStyled = css`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`
const getCheckmarkContainerStyled = css`
  position: absolute;
  left: 0;
  height: 14px;
  width: 14px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 3px;

  &:after {
    content: "";
    position: absolute;
    display: none;
    left: 3px;
    top: -1px;
    width: 4px;
    height: 8px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
    border-radius: 4px;
  }
`

/* function */
const getCheckboxStyled = ({ mode, flow }) => {
  switch(flow){
    case 'column':
      return `display: inline-grid; grid-auto-flow: column;`
    default:
      return `display: grid; grid-auto-flow: row;`
  }
}

const getCheckmarkPropsStyled = props => {
  let modifiedStyled = ``
  if(props.isError) {
    modifiedStyled += ` border:1px solid #fc5c64; `
  }
  return modifiedStyled
}

/* component */
export const CheckboxContainer = styled.label`
  ${GlobalCheckboxStyles}
  ${getCheckboxStyled}
`;

export const InputContainer = styled.input`
  ${getInputContainerStyled}
`

export const CheckmarkContainer = styled.span`
  ${getCheckmarkContainerStyled}
  ${getCheckmarkPropsStyled}
`