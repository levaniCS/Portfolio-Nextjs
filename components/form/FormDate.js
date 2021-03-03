import React, { useState } from "react"
import DatePicker from "react-datepicker"
import { FormGroup, Label, Button } from 'reactstrap';

import "react-datepicker/dist/react-datepicker.css"

const FormDatePicker = (props) => {
  const initDate = props.initialDate ? new Date(props.initialDate) : new Date()
  const initHidden = props.initialDate ? false : true
  const [dateValue, setDateValue] = useState(initDate)
  const [isHidden, setIsHidden] = useState(initHidden)
  const { 
    field,
    form: { touched, errors, setFieldValue, setFieldTouched },
    canBeDisabled,
  } = props

  const setFieldValueAndTouched = (date, touched) => {
    const { name } = props.field

    setFieldValue(name, date, true)
    setFieldTouched(name, touched, true)
  }
  
  const handleChange = (date) => {
    setDateValue(date)
    setFieldValueAndTouched(date, true)
  } 
  
  const toggleDate = (date) => {
    setIsHidden(!isHidden)
    setFieldValueAndTouched(date, true)
  }
  return (
    <FormGroup>
      <Label>{props.label}</Label>
      <div className="input-group">
        {!isHidden && (
          <DatePicker
            selected={dateValue} 
            onChange={handleChange}
            maxDate={new Date()}
            peekNextMonth
            showMonthDropdown
            showYearDropdown
            dropdownMode="select"
          />
        )}
        {canBeDisabled && !isHidden  && <Button className="mx-3" onClick={() => toggleDate()}>Still Working Here...</Button> }

        {canBeDisabled && isHidden && (
          <>
            <span>Still Working Here</span>
            <Button className="mx-3" onClick={() => toggleDate(dateValue)}>Set End Date</Button>
          </>
        )}

        {touched[field.name] &&
      errors[field.name] && <div className="error">{errors[field.name]}</div>}
      </div>
    </FormGroup>
  )
}

export default FormDatePicker