import React from 'react'
import PropTypes from 'prop-types'

import { FormContainer, FormGroupField, FormLabelField, FormInputField, FormActionGroupField } from './form.style'

const FormComponent = ({ children, name, mode,  ...props }) => {
  let FormContentEl, FormActionEl

  if(children.length) {
    const FormContentFilter = children.filter(child => child.props['aria-label'] === 'body')
    const FormActionFilter = children.filter(child => child.props['aria-label'] === 'action')

    if(FormActionFilter.length) FormActionEl = <FormActionGroupField>{FormActionFilter[0].props.children}</FormActionGroupField>
    if(FormContentFilter.length) {
      const newFormContentChildren = FormContentFilter[0].props.children
      if(newFormContentChildren.length) {
        FormContentEl = newFormContentChildren.map((child, idx) => {
          if(child.props['aria-label'] === 'group') {
            const groupChildren = child.props.children
            let groupChildrenEl 
            if(groupChildren.length) {
              const groupChildrenLabelEL = groupChildren.filter(groupchild => groupchild.props['aria-label'] === 'label')
              const groupChildrenInputEL = groupChildren.filter(groupchild => groupchild.props['aria-label'] === 'input')
              groupChildrenEl = (
                <>
                  <FormLabelField>{groupChildrenLabelEL.length ? groupChildrenLabelEL[0].props.children : null }</FormLabelField>
                  <FormInputField>{groupChildrenInputEL.length ? groupChildrenInputEL[0].props.children : null }</FormInputField>
                </>
              )
            }
            return <FormGroupField key={idx}>{groupChildrenEl}</FormGroupField>
          }else return null
        })
      }
    }


  }

  return (
    <FormContainer name={name} mode={mode} {... props}>
      {FormContentEl}
      {FormActionEl}
    </FormContainer>
  )
}

FormComponent.defaultProps = {
  name: 'common-form'
}

FormComponent.propTypes = {
  name: PropTypes.string.isRequired,
  mode: PropTypes.string,
}

export default FormComponent