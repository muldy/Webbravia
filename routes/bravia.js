const Bravia = require('bravia')
var express = require('express')
var storage = require('node-persist')

var router = express.Router()

const timeout = 5000

router.get('/add/:hostname/:port', function(req, res, next) {
  let key = ""
  key = req.query.pski ? req.query.pski : key
  console.log("KEY: '" + key + "'")
  Bravia.connect(req.params.hostname, req.params.port,
    "BraviaWebNJS" + new Date().getTime(),
    "BraviaWebNJS", key).then(versions => {

    res.setHeader('Content-Type', 'application/json')
    res.header('Cache-Control',
      'private, no-cache, no-store, must-revalidate')
    console.log("OUT" + JSON.stringify(versions))
    if (versions.error === undefined) {
      // if succeeds alredy added!
      storage.init( /* options ... */ )
        // then start using it
      storage.setItem('hostname', req.params.hostname)
      storage.setItem('port', req.params.port)
      storage.setItem('psk', req.params.psk)
      storage.setItem('tv', req.params.hostname + ':' + req.params.port +
        ':' + key)
      storage.getItem('tv')

      console.log('Stored: ' + value) // yourname
      res.send(JSON.stringify({
        success: true
      }))
    } else {
      res.send(JSON.stringify({
        success: false,
        error: JSON.stringify(versions.error)
      }))
    }

  }).catch(error => {
    var resp = {
      success: false,
      hostname: req.params.hostname,
      port: req.params.port,
      psk: key,
      pski: req.params.pski,
      error: error + ""
    }
    res.setHeader('Content-Type', 'application/json')
    res.header('Cache-Control',
      'private, no-cache, no-store, must-revalidate')
    res.send(JSON.stringify(resp))
  })

})

module.exports = router
