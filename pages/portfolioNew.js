import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage'

import { Row, Col } from 'reactstrap'
import PortfolioCreateForm from '../components/portfolios/PortfolioNewForm'


const PortfolioNew = (props) => {

  const savePortfolio = (portfolioData) => {
    alert(JSON.stringify(portfolioData, null, 2))
  }

  return (
    <BaseLayout {...props.auth}>
      <BasePage className="portfolio-create-page" title="Create new Portfolio">
      <Row>
        <Col>
          <PortfolioCreateForm onSubmit={savePortfolio} />
        </Col>
      </Row>
      </BasePage>
    </BaseLayout>
  )
}

export default PortfolioNew;
