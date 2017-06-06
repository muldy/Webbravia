const Bravia = require('bravia');
 
// Connects to a Bravia TV at 192.168.1.2:80 with the PSK 0000. 
bravia = new Bravia('10.10.10.12', '80', '6968');

console.log(bravia)
// Retrieves all the system method type versions. 
//bravia.system.getVersions()
//  .then(versions => console.log(versions))
//  .catch(error => console.error(error));
 
//for (index = 0; index < bravia.protocols.length; ++index) {
//    k = bravia.protocols[index]
//    // Retrieves all the system method types and versions. 
//    bravia[k].getMethodTypes()
//    .then(methods => {
//        console.log("\n****************************** " + k + " *****************************")
//        for (index2 = 0; index2 < methods.length; ++index2) {
//            console.log(methods[index2]);
//        }
//    })
//    .catch(error => console.error(error));
//}
 
 
// Sets the speaker volume level to 50%. 
//bravia.audio.invoke('setAudioVolume', '1.0', { target: 'speaker', volume: 50 });
//}
// Queries the volume info. 
bravia.system.invoke('getSpeakerSettings',"1.0","{target: 'speaker'}")
  .then(info => {
      console.log("************** CALL **************")
      console.log(info)
  })  
  .catch(error => console.error(error));
 
