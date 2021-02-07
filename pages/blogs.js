import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage'

const Blogs = (props) => {
  return (
    <BaseLayout {...props.auth}>
      <BasePage>
        <h1> I am Blogs Page </h1>
      </BasePage>
    </BaseLayout>
  )
}

export default Blogs;
