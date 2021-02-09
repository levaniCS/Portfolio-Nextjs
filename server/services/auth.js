var expressJwt = require('express-jwt');
const jwksRsa = require('jwks-rsa')

// Middleware
exports.checkJWT =  expressJwt({
  secret: jwksRsa.expressJwtSecret({
    jwksUri: 'https://dev-4bao-9je.us.auth0.com/.well-known/jwks.json',
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 15,
  }),
  // clientId from auth0
  audience: '3MF1oxn1XhbpIB6Wd384lKX13reD6cUK',
  // domain from auth0
   issuer: 'https://dev-4bao-9je.us.auth0.com/',
  algorithms: ['RS256']
})