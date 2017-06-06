var express = require('express')
var storage = require('node-persist')
var braviatv = require('../api/braviatv')
const Bravia = require('bravia')
const timeout = 5000
var router = express.Router()

/* GET home page. */
router.get('/discover', function(req, res, next) {
  Bravia.discover(timeout)
    .then(devices => {
      res.render('snippets/discover', {
        layout: false,
        devices: devices
      })
    })
    .catch(error => {
      res.send("{'error2':" + error + '}')
    })
})

module.exports = router
