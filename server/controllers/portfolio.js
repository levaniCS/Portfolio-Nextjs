const Portfolio = require('../models/portfolio')
const factory = require('../controllers/handlerFactory')

exports.getPortfolios = factory.getAll(Portfolio, { 'startDate': 1 })
exports.getPortfolioById = factory.getOne(Portfolio)
exports.savePortfolio = factory.createOne(Portfolio, true)
exports.deletePortfolio =  factory.deleteOne(Portfolio)
exports.updatePortfolio = factory.updateOne(Portfolio)
