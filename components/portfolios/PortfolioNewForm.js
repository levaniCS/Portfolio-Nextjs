import React from 'react'
import { Formik, Form, Field } from 'formik';
import { Button } from 'reactstrap';

import FormDate from '../../components/form/FormDate'
import FormInput from '../../components/form/FormInput'
import { validateInputs, INITIAL_VALUES } from '../../utils/validate'


const PortfolioNewForm = (props) => {
  return (
    <div>
      <Formik
        initialValues={INITIAL_VALUES}
        validate={validateInputs}
        onSubmit={props.onSubmit}
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
              label="Start Date "
            />
            
            <Field 
              component={FormDate} 
              name="endDate"
              canBeDisabled
              label="End Date "
            />
            
            <Button color="success" size="lg" type="submit" disabled={isSubmitting}>
              Create
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default PortfolioNewForm
