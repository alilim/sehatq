import React from 'react'
import PropTypes from 'prop-types'

import { TextContainer } from './text.style'

const TextComponent = ({ children, color, weight, size, transform, elipsis, align, inline, ...props }) => {
  return (
    <TextContainer color={color} weight={weight} size={size} transform={transform} align={align} inline={inline} elipsis={elipsis}>
      {children}
    </TextContainer>
  )
}

TextComponent.defaultProps = {
  elipsis: true,
  align: 'left',
  inline: false
}

TextComponent.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  weight: PropTypes.string,
  transform: PropTypes.string,
  align: PropTypes.string,
  elipsis: PropTypes.bool, 
  inline: PropTypes.bool
}

export default TextComponent