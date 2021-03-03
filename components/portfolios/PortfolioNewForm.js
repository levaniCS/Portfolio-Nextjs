import React from 'react'
import { Formik, Form, Field } from 'formik';
import { Button, Alert } from 'reactstrap';

import FormDate from '../../components/form/FormDate'
import FormInput from '../../components/form/FormInput'
import { validateInputs } from '../../utils/validate'


const PortfolioNewForm = ({ onSubmit, error, initialValues}) => {
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={validateInputs}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            
            <Field 
              component={FormInput} 
              type="text" 
              name="title"
              label="Title"
            />
          
            <Field 
              component={FormInput} 
              type="text" 
              name="company"
              label="Company"
            />
            
            <Field 
              component={FormInput} 
              type="text" 
              name="location"
              label="Location"
            />

            <Field 
              component={FormInput} 
              type="text" 
              name="position"
              label="Position"
            />
          
            <Field 
              component={FormInput}
              type="textarea" 
              name="description"
              label="Description"
            />

            <Field 
              component={FormDate} 
              name="startDate"
              label="Start Date"
              initialDate={initialValues.startDate}
            />
            
            <Field 
              component={FormDate} 
              name="endDate"
              canBeDisabled
              label="End Date"
              initialDate={initialValues.endDate}
            />
            {error && (
              <Alert color="danger">
                {error}
              </Alert>
            )}
            
            <Button color="success" size="lg" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default PortfolioNewForm
