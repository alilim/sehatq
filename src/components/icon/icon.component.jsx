import React from 'react'
import PropTypes from 'prop-types'

import { IconContainer } from './icon.style'

const IconComponent = ({  width, height, name, mode, onClick,  ...props }) => {
  return <IconContainer width={width} height={height} name={name} onClick={onClick} mode={mode} {... props}></IconContainer>
}

IconComponent.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  height: PropTypes.string,
  mode: PropTypes.string,
  onClick: PropTypes.func
}

export default IconComponent