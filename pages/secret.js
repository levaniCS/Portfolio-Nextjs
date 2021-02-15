import React from 'react';

import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage'

import { getSecretData } from '../actions'
import useWithAuth from '../components/hoc/useWithAuth'

const Secret = (props) => {
  const secretData = props.pageProps?.secretData
  
  return (
    <BaseLayout {...props.auth}>
      <BasePage>
        <h1>I am secret page</h1>
        <ul>
          {secretData && secretData.map(item => (
            <li key={item.title}>
              Title: {item.title} <br />
              Description: {item.desc}
            </li>
          ))}
        </ul>
      </BasePage>
    </BaseLayout>
  )
}

// Get request object from context
Secret.getInitialProps = async({req}) => {
  const secretData = await getSecretData(req)

  console.log(secretData)
  return { secretData }
}

export default useWithAuth()(Secret)
