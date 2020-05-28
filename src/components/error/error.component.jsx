import React from 'react'
import PropTypes from 'prop-types'

import { ErrorContainer } from './error.style'

const ErrorComponent = ({ children, align, ...props }) => {
  return (
    <ErrorContainer align={align}>{children}</ErrorContainer>
  )
}

ErrorComponent.defaultProps = {
  align: 'left'
}

ErrorComponent.propTypes = {
  children: PropTypes.node.isRequired,
  align: PropTypes.string,
}

export default ErrorComponent