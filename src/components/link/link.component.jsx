import React from 'react'
import PropTypes from 'prop-types'

import { LinkContainer } from './link.style'

const LinkComponent = ({ children, to, mode, fontSize, refContainer, onClick, as,  elipsis, ...props }) => {
  return (
    <LinkContainer as={as} to={to} mode={mode} fontSize={fontSize} ref={refContainer} onClick={onClick} elipsis={elipsis  ? 1 : 0} {...props}>{children}</LinkContainer>
  )
}

LinkComponent.defaultProps = {
  elipsis: false
}

LinkComponent.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
  as: PropTypes.string,
  mode: PropTypes.string, 
  fontSize: PropTypes.string,
  refContainer: PropTypes.any, 
  onClick: PropTypes.func,
  elipsis: PropTypes.bool
}

export default LinkComponent