import React from 'react'
import PropTypes from 'prop-types'

import { InputContainer } from './input.style'

const InputComponent = ({  width, height, name, mode, type,autocomplete, innerRef, ...props }) => {
  return <InputContainer type={type} width={width} height={height} name={name} mode={mode} autocomplete={autocomplete} ref={innerRef} {... props}></InputContainer>
}

InputComponent.defaultProps = {
  name: 'common-input',
  type: 'text',
  autocomplete: false,
}

InputComponent.propTypes = {
  name: PropTypes.string,
  width: PropTypes.string,
  mode: PropTypes.string,
  type: PropTypes.string,
  autocomplete: PropTypes.bool,
  innerRef: PropTypes.any
}

export default InputComponent