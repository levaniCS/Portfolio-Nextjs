import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage'

const CVPage = (props) => {
  return (
    <BaseLayout {...props.auth}>
      <BasePage>
        <h1> I am CVPage Page </h1>
      </BasePage>
    </BaseLayout>
  )
}

export default CVPage;
