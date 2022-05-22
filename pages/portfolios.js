import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage'
import { 
  Col, Row,
  Button
} from 'reactstrap'
import useWithAuth from '../components/hoc/useWithAuth'
import { getPortfolios } from '../actions'

import { Router } from '../routes'
import PortfolioCard from '../components/portfolios/portfolioCard'

const Portfolios = (props) => {
  const portfoliosData = props.pageProps ? props.pageProps.portfolios : []
  const { isAuthenticated, isSiteOwner } = props.auth

  return (
    <BaseLayout {...props.auth}>
      <BasePage className="portfolio-page" title="Portfolios">
        {isAuthenticated && isSiteOwner && (
          <Button 
            onClick={() => Router.pushRoute('/portfolioNew')} 
            color="success" 
            className="create-port-btn"
          >
            Create Portfolio
          </Button>
        )}
        <Row>
          {
            portfoliosData.map(portfolio => (
              <Col md="4" key={portfolio._id}>
                <PortfolioCard isValidUser={isAuthenticated && isSiteOwner} portfolio={portfolio}/>
              </Col>
            ))
          }
        </Row>
      </BasePage>
    </BaseLayout>
  )
}

// Get request object from context
Portfolios.getInitialProps = async() => {
  try {
    const res = await getPortfolios()
    const portfolios = res.data.data

    return { portfolios }
  } catch(error) {
    console.error(error)
  }
  
}

export default useWithAuth()(Portfolios);