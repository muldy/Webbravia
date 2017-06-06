const Bravia = require('bravia')
var storage = require('node-persist')

module.exports = {
  getDevice: function() {
    storage.initSync()
    device = {}
    device['hostname'] = storage.getItemSync('hostname')
    device['port'] = storage.getItemSync('port')
    device['psk'] = storage.getItemSync('psk')
    return device
  },
  getApps: function(device) {}

}
