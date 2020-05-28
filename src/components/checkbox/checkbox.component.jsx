import React, { useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import { CheckboxContainer, InputContainer, CheckmarkContainer } from './checkbox.style'

const CheckboxComponent = ({ id, name, children, handleChange, mode, value, flow, checked, extendClass, isDisabled, ...props }) => {
  const [ checkboxValue, setCheckboxValue ] = useState(false)
  const [ modCheckboxValue, setModCheckboxValue ] = useState(false) 
  const checkboxRef = useRef(null)
  let extendClassName = extendClass || ''

  useEffect(() => {
    evModChecked()
  })

  const evModChecked = () => {
    const el = (checkboxRef && checkboxRef.current) ? checkboxRef.current :  null
    let checkedValueRef = false
    if(el && el.firstElementChild) checkedValueRef = el.firstElementChild.classList.contains('checked')

    const _checked = (checked !== undefined) ? (checked ? true: false) : checkedValueRef
    if(modCheckboxValue !== _checked) {
      setCheckboxValue(_checked)
      setModCheckboxValue(_checked)
      extendClassName = (_checked) ? ' checked ' : ' '
    }
  }

  const onChange = (e) => {
    const value = e.target.checked 
    setCheckboxValue(value)
    if (handleChange && typeof(handleChange) == "function") handleChange(e)
  }

  return (
    <CheckboxContainer mode={mode} flow={flow} {...props} ref={checkboxRef}>
      {children}
      <InputContainer id={id} type='checkbox' className={` ${extendClassName} ${checkboxValue ? 'checked': ''}`} disabled={isDisabled} checked={checkboxValue} onChange={onChange} name={name} value={value} />
      <CheckmarkContainer mode={mode} isError={props.isError}></CheckmarkContainer>
    </CheckboxContainer>
  )
}

CheckboxComponent.defaultProps = {
  isDisabled: false
}

CheckboxComponent.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  handleChange: PropTypes.func,
  mode: PropTypes.string,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  checked: PropTypes.bool,
  isDisabled: PropTypes.bool
}

export default CheckboxComponent