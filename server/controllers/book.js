const Book = require('../models/book')

const factory = require('../controllers/handlerFactory')

exports.getBooks = factory.getAll(Book)
exports.saveBook = factory.createOne(Book)
exports.deleteBook =  factory.deleteOne(Book)
exports.updateBook = factory.updateOne(Book)