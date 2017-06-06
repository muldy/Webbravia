const Bravia = require('bravia')
var express = require('express')
var braviatv = require('../api/braviatv')
var router = express.Router()

const timeout = 5000

/* GET home page. */
router.get('/discover', function(req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  res.header('Cache-Control',
    'private, no-cache, no-store, must-revalidate')
  Bravia.discover(timeout)
    .then(devices => {
      res.send(JSON.stringify(devices))
    })
    .catch(error => {
      res.send("{'error2':" + error + '}')
    })
})
router.get('/versions', function(req, res, next) {
  let device = braviatv.getDevice()
  let bravia = new Bravia(device['hostname'], device['port'], device['psk'])
  res.setHeader('Content-Type', 'application/json')
  res.header('Cache-Control',
    'private, no-cache, no-store, must-revalidate')
  bravia.system.getVersions()
    .then(devices => {
      res.send(JSON.stringify(devices))
    })
    .catch(error => {
      res.send("{'error2':" + error + '}')
    })
})

router.get('/remotecontrollerinfo', function(req, res, next) {
  let device = braviatv.getDevice()
  let bravia = new Bravia(device['hostname'], device['port'], device['psk'])
  res.setHeader('Content-Type', 'application/json')
  res.header('Cache-Control',
    'private, no-cache, no-store, must-revalidate')
  bravia.system.invoke('getRemoteControllerInfo')
    .then(devices => {
      res.send(JSON.stringify(devices))
    })
    .catch(error => {
      res.send("{'error2':" + error + '}')
    })
})
router.get('/protocols', function(req, res, next) {
  let device = braviatv.getDevice()
  let bravia = new Bravia(device['hostname'], device['port'], device['psk'])
  res.setHeader('Content-Type', 'application/json')
  res.header('Cache-Control',
    'private, no-cache, no-store, must-revalidate')
  res.send(JSON.stringify(bravia.protocols))
})
router.get('/methods/:method', function(req, res, next) {
  let method = req.params.method
  let device = braviatv.getDevice()
  let bravia = new Bravia(device['hostname'], device['port'], device['psk'])
  res.setHeader('Content-Type', 'application/json')
  res.header('Cache-Control',
    'private, no-cache, no-store, must-revalidate')
  bravia[method].getMethodTypes()
    .then(devices => {
      res.send(JSON.stringify(devices))
    })
    .catch(error => {
      res.send("{'error2':" + error + '}')
    })
})
router.get('/methods/:methods/:method', function(req, res, next) {
  let methods = req.params.methods
  let method = req.params.method
  let device = braviatv.getDevice()
  let bravia = new Bravia(device['hostname'], device['port'], device['psk'])
  res.setHeader('Content-Type', 'application/json')
  res.header('Cache-Control',
    'private, no-cache, no-store, must-revalidate')
  console.log("Calling: " + method)
  bravia[methods].invoke(method)
    .then(devices => {
      res.send(JSON.stringify(devices))
    })
    .catch(error => {
      res.send("{'error2':" + error + '}')
    })
})
router.get('/methods/:methods/:method/:param1', function(req, res, next) {
  let methods = req.params.methods
  let method = req.params.method
  let param1 = req.params.param1
  let device = braviatv.getDevice()
  let bravia = new Bravia(device['hostname'], device['port'], device['psk'])
  res.setHeader('Content-Type', 'application/json')
  res.header('Cache-Control',
    'private, no-cache, no-store, must-revalidate')
  console.log("Calling: " + method + " : " + param1)
  bravia[methods].invoke(method, param1)
    .then(devices => {
      res.send(JSON.stringify(devices))
    })
    .catch(error => {
      res.send("{'error2':" + error + '}')
    })
})
module.exports = router
