import React from 'react'
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage'

import { Row, Col } from 'reactstrap'
import PortfolioCreateForm from '../components/portfolios/PortfolioNewForm'


const PortfolioNew = () => (
  <BaseLayout>
    <BasePage className="portfolio-create-page" title="Create new Portfolio">
    <Row>
      <Col>
        <PortfolioCreateForm />
      </Col>
    </Row>
    </BasePage>
  </BaseLayout>
)

export default PortfolioNew;
