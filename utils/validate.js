import moment from 'moment'

export const validateInputs = (values) => {
  const errors = {};

  Object.keys(values).forEach(key => {
    if(!values[key] && key !== 'startDate' && key !== 'endDate') {
      errors[key] = `Field ${key} is required!`
    }
  })

  const startDate = values.startDate
  const endDate = values.endDate

  if(startDate && endDate && moment(endDate).isBefore(startDate)) {
    errors.endDate = 'End date can not be before start date!'
  }

  return errors;
}


export const INITIAL_VALUES = {
  title: '',
  company: '',
  location: '',
  position: '',
  description: '', // Text Area
  startDate: '', // Date
  endDate: '' // Date
}