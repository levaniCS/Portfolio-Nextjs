const express = require('express')

const authService = require('../services/auth')
const portfolioCtrl = require('../controllers/portfolio')
const router = express.Router()

router.get('', portfolioCtrl.getPortfolios)
router.get('/:id', portfolioCtrl.getPortfolioById)

router.use(authService.checkJWT, authService.checkRole('siteOwner'))

router.post('', portfolioCtrl.savePortfolio)
router.patch('/:id', portfolioCtrl.updatePortfolio)
router.delete('/:id', portfolioCtrl.deletePortfolio)

module.exports = router


