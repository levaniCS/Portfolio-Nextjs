const Portfolio = require('../models/portfolio')
const factory = require('../controllers/handlerFactory')

exports.getPortfolios = factory.getAll(Portfolio)
exports.savePortfolio = factory.createOne(Portfolio, true)
exports.deletePortfolio =  factory.deleteOne(Portfolio)
exports.updatePortfolio = factory.updateOne(Portfolio)
