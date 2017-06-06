'use strict'
const Bravia = require('bravia')

//// The time in milliseconds for the bravia discovery to scan for.
//let timeout = 15000
//
//
//// Attempts to discover any Sony Bravia TVs.
//Bravia.discover(timeout)
//  .then(devices => {
//    for (let device in devices) {
//      console.log(device)
//    }
//  }, error => {
//    console.log(error)
//  })
//  .catch(error => console.error(error))

let bravia = new Bravia('bravia.lan', '80', '6968');
//Bravia.connect("bravia.lan",80,"teste78","teste2","1234").then(body => {
//	console.log(body)
//})
//
bravia.audio.invoke("getSpeakerSettings", "1.0", {}).then(function(info) {
		console.log("speaker settings", info);
}).catch(function(err) {
		console.error("speaker settings err", err);
});

