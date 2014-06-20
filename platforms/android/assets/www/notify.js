// var gcm = require('node-gcm');
// var message = new gcm.Message();
 
// //API Server Key
// var sender = new gcm.Sender('AIzaSyDgu_jeQ-joPHeBeHzLADYpMtNxR2ChFxs');
// var registrationIds = [];
 
// // Value the payload data to send...
// message.addData('message',"\u270C Peace, Love \u2764 and PhoneGap \u2706!");
// message.addData('title','Push Notification Sample' );
// message.addData('msgcnt','3'); // Shows up in the notification in the status bar
// message.addData('soundname','beep.wav'); //Sound to play upon notification receipt - put in the www folder in app
// message.timeToLive = 3000;// Duration in seconds to hold in GCM and retry before timing out. Default 4 weeks (2,419,200 seconds) if not specified.
 
// registrationIds.push('APA91bHUA1bPB8rRAdwR4r_I8MQ845EcIiRnonTI2kSixe_56wuPOLnsgKexfHQ2aQyIqyKGpJFEG_Q5JMJhIF6hTd7G8pp7oHESmjnc3bNoe4_Ta-YlAEt6bvLFxKkNlLD8G8c2auX4');
 

// sender.send(message, registrationIds, 4, function (result) {
    // console.log(result);
// });

var gcm = require('node-gcm');
 
var message = new gcm.Message();
var sender = new gcm.Sender('AIzaSyCDx8v9R0fMsAsjoAffF-P3FCFWXlvwKgL');
var registrationIds = [];
 
message.addData('title','My Game');
message.addData('message','Your turn!!!!');
message.addData('msgcnt','1');
message.collapseKey = 'demo';
message.delayWhileIdle = true;
message.timeToLive = 3;
 
// At least one token is required - each app registers a different token
registrationIds.push('APA91bFobAwN7P3Okxy2al8RI12VcJFUS-giXWTOoWXIObtSPOE1h7FuH1VPLBPgshDI_Fp7aIYVET-ssvGUErlWYA0cKPGhoXT1daqyDsEfem9ZtgZNRhQFv7kLCIVSigYlpMluToPiSHSsFSEdtCDfKoOZqNPgfs');
 
/**
 * Parameters: message-literal, registrationIds-array, No. of retries, callback-function
 */
sender.send(message, registrationIds, 4, function (result) {
    console.log(result);
});
/** Use the following line if you want to send the message without retries
sender.sendNoRetry(message, registrationIds, function (result) {
console.log(result); });
**/