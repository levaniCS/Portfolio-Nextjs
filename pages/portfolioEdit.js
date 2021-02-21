import React, { useState } from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage'

import { Row, Col } from 'reactstrap'
import PortfolioCreateForm from '../components/portfolios/PortfolioNewForm'

import { getPortfolioById, updatePortfolio } from '../actions'
import { Router } from '../routes'

const PortfolioEdit = (props) => {
  const [error, setError] = useState(undefined)
  const { portfolio } = props

  const updatePortfolioNew = async (portfolioData, { setSubmitting }) => {
    setSubmitting(true)
    updatePortfolio(portfolioData)
      .then(() => {
        setError(undefined)
        setSubmitting(false)
        Router.pushRoute('/portfolios')
      })
      .catch(err => {
        const error = err.message || 'Server Error!'
        setError(error)
        setSubmitting(false)
      })
  }

  return (
    <BaseLayout {...props.auth}>
      <BasePage className="portfolio-create-page" title="Update Portfolio">
      <Row>
        <Col>
          <PortfolioCreateForm 
            error={error} 
            onSubmit={updatePortfolioNew}
            initialValues={portfolio}
          />
        </Col>
      </Row>
      </BasePage>
    </BaseLayout>
  )
}

// Get request object from context
PortfolioEdit.getInitialProps = async({query}) => {
  try {
    const res = await getPortfolioById(query.id)
    const portfolio = res.data.data

    return { portfolio }
  } catch(error) {
    console.error(error)
  }

}

export default PortfolioEdit;
