const jwt = require('jsonwebtoken');

// const jwtKey =
//   process.env.JWT_SECRET ||
//   'add a .env file to root of project with the JWT_SECRET variable';
const secret = require('../config/secrets');
// quickly see what this file exports
module.exports = {
  authenticate,
};

// implementation details
function authenticate(req, res, next) {
  const token = req.get('Authorization');
  // const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secret.jwtSecret, (err, decoded) => {
      if (err) return res.status(401).json(err);

      req.decoded = decoded;

      next();
    });
  } else {
    return res.status(401).json({
      error: 'No token provided, must be set on the Authorization Header',
    });
  }
}
