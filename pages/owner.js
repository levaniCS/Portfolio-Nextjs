import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage'

import useWithAuth from '../components/hoc/useWithAuth'

const Owner = (props) => {
  return (
    <BaseLayout {...props.auth}>
      <BasePage>
        <h1> I am Owner Page </h1>
      </BasePage>
    </BaseLayout>
  )
}

export default useWithAuth('siteOwner')(Owner);
