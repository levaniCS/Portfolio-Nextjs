import React from 'react';
import BaseLayout from '../components/layouts/BaseLayout';
import BasePage from '../components/BasePage'
import { 
  Col, Row,
  Card, CardBody, 
  CardHeader, 
  CardText, CardTitle
} from 'reactstrap'
import useWithAuth from '../components/hoc/useWithAuth'
import { getPortfolios } from '../actions'

const Portfolios = (props) => {
  const portfolios = props.pageProps.portfolios

  const renderPortfolios = () => 
    portfolios.map(portfolio =>
      <Col md="4" key={portfolio._id}>
        <span>
          <Card className="portfolio-card">
            <CardHeader className="portfolio-card-header">{portfolio.position}</CardHeader>
            <CardBody>
              <p className="portfolio-card-city">{portfolio.location}</p>
              <CardTitle className="portfolio-card-title">{portfolio.company}</CardTitle>
              <CardText className="portfolio-card-text">{portfolio.description}</CardText>
              <div className="readMore"> </div>
            </CardBody>
          </Card>
        </span>
      </Col>
    )

  return (
    <BaseLayout {...props.auth}>
      <BasePage className="portfolio-page" title="Portfolios">
        <h1> I am Portfolios Page </h1>
        <Row>
          {renderPortfolios()}
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