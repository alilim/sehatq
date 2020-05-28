import styled, { css } from 'styled-components'

/* style */
const ButtonStyles = css`
  display: inline-grid;
  cursor: pointer;
  border: 0;
  border-radius: 4px;
  margin-left: 5px;
  margin-right: 5px;
  font-size: .9375em;
  font-weight: 500;
  outline: none;
  background-color: transparent;
  position: relative;
  padding: .75em;
`

const DefaultStyles = css`
  background-color: #ffa883;
  color: #fff;
  border: 1px solid #ffa883;
  font-weight: 600;
`

const FBStyles = css`
  background-color: #3F5AA9;
  color: #fff;
  border: 1px solid #3F5AA9;
  font-weight: 600;
`

const GStyles = css `
  background-color: #fff;
  color: #2c2c2c;
  border: 1px solid #fff;
  font-weight: 600;
`

/* function */
const getButtonStyled = ({mode, isIndicatorArrow,  isLoading, ...props}) => {
  let modifiedStyled = ""
  switch(mode){
    case 'default':  modifiedStyled += DefaultStyles
      break;
    case 'facebook':  modifiedStyled += FBStyles
      break;
    case 'google':  modifiedStyled += GStyles
      break;    
    default: 
      break;
  }
  if(isIndicatorArrow) modifiedStyled += ` padding-right: 30px; `
  if(isLoading) modifiedStyled += ` padding-right: 30px; `
  return modifiedStyled
}

const getIndicatorsArrowIconSvgStyled = props => {
  let modifiedStyled = ``
  if(props.color && props.color !== 'initial') {
    modifiedStyled += `
      fill: ${props.color};
      stroke: ${props.color};
    `
  }
  return modifiedStyled
}

/* component */
export const ButtonContainer = styled.button.attrs(props => ({
    type: (props.type) ? props.type : 'button' 
  }))`
  ${ButtonStyles}
  ${getButtonStyled}
`
export const IndicatorsArrowIconSvg = styled.svg`
  display: inline-block;
  fill: currentColor;
  line-height: 1;
  stroke: currentColor;
  stroke-width: 0;
  position: absolute;
  right: 8px;
  top: 50%;
  margin-top: -10px;
  ${getIndicatorsArrowIconSvgStyled}
`