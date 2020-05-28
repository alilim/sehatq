import React from 'react'

import HeaderPartials from '../partials/header/index'
import FooterPartials from '../partials/footer/index'

import { SingleLayoutContainer,  SingleLayoutBody, SingleLayoutBodyContainer, SingleLayoutTitleWrapper, SingleLayoutTitle, SingleLayoutSubTitle } from './layout.styles'

const SingleLayouts = ({ children, title, subtitle, header, setValueSearch, ...props }) => {
  return (
    <SingleLayoutContainer>
      <HeaderPartials {...header && {mode: header, setValueSearch: setValueSearch}}></HeaderPartials>
      <SingleLayoutBody>
        <SingleLayoutBodyContainer>
          <SingleLayoutTitleWrapper>
            <SingleLayoutTitle>{title}</SingleLayoutTitle>
            <SingleLayoutSubTitle>{subtitle}</SingleLayoutSubTitle>
          </SingleLayoutTitleWrapper>
          {children}
        </SingleLayoutBodyContainer>
      </SingleLayoutBody>
      <FooterPartials></FooterPartials>
    </SingleLayoutContainer>
  )
} 

export default SingleLayouts