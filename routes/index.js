var express = require('express')
var storage = require('node-persist')
var router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  storage.init().then(function () {
    return storage.getItem('tv')
  })
    .then(function (value) {
      let device
      if (value !== undefined) {
        device = {}
        device['hostname'] = storage.getItemSync('hostname')
        device['port'] = storage.getItemSync('port')
        device['psk'] = storage.getItemSync('psk')
      }
      res.render('index', {
        'device': device,
        'footer': "FOOTER2!",
        'scripts':["discover.js"]
      })
    }).catch((err) => {
      console.log('ERROR:' + err)
    })
})

module.exports = router
