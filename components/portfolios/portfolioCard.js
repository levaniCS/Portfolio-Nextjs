import React, { useState } from 'react'
import { 
  Card, CardBody, 
  CardHeader, 
  CardText, CardTitle,
  Button
} from 'reactstrap'
import PortfolioCardItem from './portfolioCardItem'

import { Router } from '../../routes'
import { deletePortfolio } from '../../actions'


const portfolioCard = ({portfolio, isValidUser}) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const displayDeleteWarning = (portfolioId) => {
    const isConfirm = confirm('Are you sure you want to delete this portfolio?')

    if(isConfirm) {
      deletePortfolio(portfolioId)
        .then(() => Router.pushRoute('/portfolios'))
        .catch(err => console.error(err))
    }
  }

  return (
    <span onClick={toggle}>
      <PortfolioCardItem portfolio={portfolio} toggle={toggle} modal={modal} />
      <Card className="portfolio-card">
        <CardHeader className="portfolio-card-header">{portfolio.position}</CardHeader>
        <CardBody>
          <p className="portfolio-card-city">{portfolio.location}</p>
          <CardTitle className="portfolio-card-title">{portfolio.company}</CardTitle>
          <CardText className="portfolio-card-text">{portfolio.description}</CardText>
          <div className="readMore">
            {isValidUser && (
              <>
                <Button onClick={(e) => {
                  e.stopPropagation()
                  Router.pushRoute(`/portfolio/${portfolio._id}/edit`)
                }} color="warning">Edit</Button>
                {' '}
                <Button onClick={(e) => {
                  e.stopPropagation()
                  displayDeleteWarning(portfolio._id)
                }} color="danger">Delete</Button>
              </>
            )}
          </div>
        </CardBody>
      </Card>
    </span>
  )
}

export default portfolioCard
