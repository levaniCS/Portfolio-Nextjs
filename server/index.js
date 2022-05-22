const express = require('express');
const next = require('next');
const mongoose = require('mongoose')
const routes = require('../routes');

// Middleware
const globalErrorHandler = require('./controllers/errorController')
const authService = require('./services/auth')

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

// ROUTES
const bookRoutes = require('./routes/book')
const portfolioRoutes = require('./routes/portfolio')

// Mongo config
const DB = process.env.DATABASE
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'))
  .catch(err => console.error(err))

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
  //* when we have body larger than 10kb basically not be accepted
  server.use(express.json({ limit: '10kb' }));
  
  // Routes
  server.use('/api/v1/books', bookRoutes)
  server.use('/api/v1/portfolios', portfolioRoutes)

  
  server.get('/api/v1/secret', authService.checkJWT, (req, res) => {
    return res.json(secretData)
  })

  server.get('/api/v1/onlySiteOwner', authService.checkJWT, authService.checkRole('siteOwner'), (req, res) => {
    return res.json(secretData)
  })

  //! ERROR HANDLING MIDDLEWARE
  server.use(globalErrorHandler);

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
