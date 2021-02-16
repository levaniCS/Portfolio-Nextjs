const express = require('express')

const authService = require('../services/auth')
const booksCtrl = require('../controllers/book')
const router = express.Router()

router.use(authService.checkJWT, authService.checkRole('siteOwner'))

router.post('', booksCtrl.saveBook)
router.get('', booksCtrl.getBooks)
router.patch('/:id', booksCtrl.updateBook)
router.delete('/:id', booksCtrl.deleteBook)

module.exports = router