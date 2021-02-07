const express = require('express');
const next = require('next');
const mongoose = require('mongoose')
const routes = require('../routes');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = routes.getRequestHandler(app);

console.log(`./config/.env.${process.env.NODE_ENV || 'development'}`)
console.log(process.env.DATABASE)
console.log(process.env.TEST)

// Mongo config
const DB = process.env.DATABASE.replace(
  '<DB>',
  dev ? process.env.MONGO_DEV_DB : process.env.MONGO_PROD_DB
);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB connection successful!'))
  .catch(err => console.error(err))


app.prepare()
.then(() => {
  const server = express();

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
