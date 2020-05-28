import React from 'react'
import PropTypes from 'prop-types'

import { ImageContainer } from './image.style'

const ImageComponent = ({ mode, width, height, ...props }) => {
  return (
    <ImageContainer mode={mode} width={width} height={height} onerror="this.src='http://server/app/resources/img/avatar.jpg'" {...props}></ImageContainer>
  )
}

ImageComponent.propTypes = {
  mode: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
}

export default ImageComponent