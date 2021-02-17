import React, { useState } from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage'

import { Row, Col } from 'reactstrap'
import PortfolioCreateForm from '../components/portfolios/PortfolioNewForm'

import { createPortfolio } from '../actions'
import { Router } from '../routes'

const PortfolioNew = (props) => {
  const [error, setError] = useState(undefined)

  const savePortfolio = async (portfolioData, { setSubmitting }) => {
    setSubmitting(true)
    createPortfolio(portfolioData)
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
      <BasePage className="portfolio-create-page" title="Create new Portfolio">
      <Row>
        <Col>
          <PortfolioCreateForm error={error} onSubmit={savePortfolio} />
        </Col>
      </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default PortfolioNew;
