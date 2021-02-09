const express = require('express');
const next = require('next');
const mongoose = require('mongoose')
const routes = require('../routes');

// Middleware
const authService = require('./services/auth')

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

const Book = require('./models/book')

// Mongo config
// const DB = process.env.DATABASE.replace(
//   '<DB>',
//   dev ? process.env.MONGO_DEV_DB : process.env.MONGO_PROD_DB
// );
// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log('DB connection successful!'))
//   .catch(err => console.error(err))

const secretData = [
  {
    title: 'secredTitle 1',
    desc: 'Plans how to  build spaceshiip'
  },
  {
    title: 'secredTitle 2',
    desc: 'Plans how to  build building'
  }
]


app.prepare() 
.then(() => {
  const server = express()

  server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
    return res.json(secretData)
  })


  server.post('/api/v1/books', (req, res) => {
    const bookData = req.body
    const book = new Book(bookData)

    book.save((err, createdBook) => {
      if(err) {
        return res.status(422).send(err)
      }

      return res.json(createdBook)
    })
  })


  // // Handling errors
  // server.use(function (err, req, res, next) {
  //   if (err.name === 'UnauthorizedError') {
  //     res.status(401).send({
  //       title: 'Unauthorized',
  //       detail: 'Unauthorized Access!'
  //     })
  //   }
  // })

  server.get('*', (req, res) => {
    return handle(req, res)
  })

  server.use(handle).listen(3000, (err) => {
    if (err) throw err
    console.log('> Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
