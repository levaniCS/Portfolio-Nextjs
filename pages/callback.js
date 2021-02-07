import React, { useEffect } from 'react';
import { useRouter } from 'next/router'
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage'

import auth0Client from '../services/auth0'

const Callback = () => {
  const router = useRouter()

  useEffect(async () => {
    try {
      await auth0Client.handleAuthentication()
      router.push('/')
    } catch (err) {
      console.error(err)
    }
  }, [])

  return (
    <BaseLayout>
      <BasePage>
        <h1> You are logging in... </h1>
      </BasePage>
    </BaseLayout>
  )
}

export default Callback;
