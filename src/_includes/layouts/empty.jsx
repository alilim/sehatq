import React from 'react'

import { EmptyLayoutContainer,  EmptyLayoutBody, EmptyLayoutBodyContainer } from './layout.styles'

const EmptyLayouts = ({ children, ...props }) => {
  return (
    <EmptyLayoutContainer>
      <EmptyLayoutBody>
        <EmptyLayoutBodyContainer>{children}</EmptyLayoutBodyContainer>
      </EmptyLayoutBody>
    </EmptyLayoutContainer>
  )
} 

export default EmptyLayouts