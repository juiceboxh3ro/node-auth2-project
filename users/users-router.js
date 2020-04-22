const router = require("express").Router();
const Users = require("./users-model.js");
const passportChecker = require('../auth/authenticator')

// use middleware to check that the user is logged in first
router.use(passportChecker)

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => {
      res.status(400).json({ message: "nope", error: err })
    });
});

module.exports = router;
