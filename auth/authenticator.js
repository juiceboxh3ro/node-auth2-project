const jwt = require('jsonwebtoken')

module.exports = function (req, res, next) {
  const token = req.header('auth-token')

  if(!token) return res.status(401).send('Access Denied')

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET)
    req.user = verified
    next()
  } catch (error) {
    res.status(400).send('Invalid Token')
  }
}

// luis
/*
module.exports = function (req, res, next) {
  const token = req.headers.authorization

  if(!token) return res.status(401).send('Access Denied')
  
  jwt.verify(token, process.env.TOKEN_SECRET, (err, decodedToken) => {
    if(err) {
      res.status(401).json({ message: "not right now mom" })
    } else {
      req.decodedToken = decodedToken
      next()
    }
  })
}
*/